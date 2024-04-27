import { PrismaClient, type Repository } from './prisma';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { gunzipSync } from 'node:zlib';

const prisma = new PrismaClient();
const MEMORY_DIR = './db/legacy/';
const PHOTO_DIR = './public/images';
const ScriptInfo = [
  {
    path: '/scripts/berries-pilot.pdf',
    title: 'Berries: If Acai Loved Cocaine',
    description:
      "Disgraced semi-pro volleyball player Wells discovers a bountiful crop in his bungalow's backyard. Can he turn his prospects around, crack his emotionless exterior, and just maybe find love? Yes, yes, and yes. That is - if his adorable and machiavellian sidekick Lucy has anything to do with it.",
  },
  {
    path: '/scripts/evergreen-fitness-pilot.pdf',
    title: 'Evergreen Fitness and Lawn Bowling Club',
    description:
      "Is he a writer, a lowly gym attendant, or a secret lawn bowling star? Why can't our hero be all three? Jim fights (or is it embraces?) his baser urges while trying to find higher meaning - at the bottom of a stack of beers! Join us for a romp through gym politics, apathy & the creative process, and an Australian mentor that just might be the messiah we all need.",
  },
  {
    path: '/scripts/porpoise-pool-service.pdf',
    title: 'Porpoise Pool Service',
    description: '',
  },
  {
    path: '/scripts/spies-like-us-pilot.pdf',
    title: 'Spies "Like" Us',
    description: '',
  },
];

type StringValue = { S: string };
interface Row {
  Item: { id: StringValue; memory: StringValue; timestamp: StringValue };
}

async function memories() {
  console.log('seeding legacy memories from dynamoDB...');
  const legacyData = readdirSync(MEMORY_DIR).flatMap<Row>((file) => {
    const rawData = gunzipSync(readFileSync(join(MEMORY_DIR, file))).toString();
    const jsonData = rawData
      .split('\n')
      .filter(Boolean)
      .map<Row>((row) => {
        try {
          return JSON.parse(row);
        } catch (e) {
          console.warn(`Error parsing JSON > ${e}`);
        }
      });
    return jsonData;
  });

  const deduplicated = legacyData.reduce<Row[]>((result, entry) => {
    const existing = result.map(({ Item }) => Item.memory.S);
    if (!existing.includes(entry.Item.memory.S)) result.push(entry);
    return result;
  }, []);

  await prisma.memory.createMany({
    data: deduplicated.map(({ Item }) => ({
      entry: Item.memory.S,
      createdAt: new Date(Date.parse(Item.timestamp.S)),
    })),
  });
  console.log('loaded all memories into database');
}

async function photos() {
  console.log('seeding photos...');
  const data = readdirSync(PHOTO_DIR).map((file) => ({
    path: join('/images', file),
    repository: 'PUBLIC' as Repository,
  }));
  await prisma.photo.createMany({ data });
  console.log('loaded all photos into database');
}

async function scripts() {
  console.log('seeding scripts...');
  const data = ScriptInfo.map((script) => ({
    ...script,
    repository: 'PUBLIC' as Repository,
  }));
  await prisma.script.createMany({ data });
  console.log('loaded all scripts into database');
}

async function main() {
  await Promise.all([memories(), photos(), scripts()]);
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
