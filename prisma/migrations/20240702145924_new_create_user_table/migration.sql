/*
  Warnings:

  - A unique constraint covering the columns `[business_name]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `business_name` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `business_name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_business_name_key` ON `users`(`business_name`);
