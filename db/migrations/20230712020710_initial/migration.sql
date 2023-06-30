-- CreateTable
CREATE TABLE "memories" (
    "id" SERIAL NOT NULL,
    "entry" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "memories_pkey" PRIMARY KEY ("id")
);
