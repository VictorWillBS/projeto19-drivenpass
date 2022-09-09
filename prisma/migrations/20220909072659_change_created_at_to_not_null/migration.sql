-- AlterTable
ALTER TABLE "cards" ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "credentials" ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "notes" ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "session" ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "wifi" ALTER COLUMN "createdAt" DROP NOT NULL;
