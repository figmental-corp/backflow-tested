/*
  Warnings:

  - You are about to drop the column `address` on the `backflow_company` table. All the data in the column will be lost.
  - Added the required column `addressLine1` to the `backflow_company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `addressLine2` to the `backflow_company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `backflow_company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `backflow_company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zip` to the `backflow_company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "backflow_company" DROP COLUMN "address",
ADD COLUMN     "addressLine1" TEXT NOT NULL,
ADD COLUMN     "addressLine2" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "zip" TEXT NOT NULL;
