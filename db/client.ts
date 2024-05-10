import { PrismaClient } from './prisma';

// TODO too many clients?
// https://github.com/prisma/prisma/issues/1983
export const prisma = new PrismaClient();
