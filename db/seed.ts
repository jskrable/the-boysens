import { gunzipSync } from 'zlib';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { PrismaClient } from './prisma';

const prisma = new PrismaClient();
const LEGACY_DATA_DIR = './db/legacy/';

type StringValue = { S: string };
interface Row {
  Item: { id: StringValue; memory: StringValue; timestamp: StringValue };
}

async function main() {
  const legacyData = readdirSync(LEGACY_DATA_DIR).flatMap<Row>((file) => {
    const rawData = gunzipSync(readFileSync(join(LEGACY_DATA_DIR, file))).toString();
    const jsonData = rawData
      .split('\n')
      .filter(Boolean)
      .map<Row>((row) => {
        try {
          return JSON.parse(row);
        } catch (e) {
          console.warn`Error parsing JSON > ${e}`;
        }
      });
    return jsonData;
  });
  await prisma.memory.createMany({
    data: legacyData.map(({ Item }) => ({
      entry: Item.memory.S,
      // TODO this migh be converting to UTC? Or overcorrecting
      createdAt: new Date(Date.parse(Item.timestamp.S)),
    })),
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
