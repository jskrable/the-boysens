-- CreateEnum
CREATE TYPE "Repository" AS ENUM ('PUBLIC');

-- CreateTable
CREATE TABLE "memories" (
    "id" SERIAL NOT NULL,
    "entry" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "memories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photos" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "repository" "Repository" NOT NULL,

    CONSTRAINT "photos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scripts" (
    "id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "repository" "Repository" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "scripts_pkey" PRIMARY KEY ("id")
);
