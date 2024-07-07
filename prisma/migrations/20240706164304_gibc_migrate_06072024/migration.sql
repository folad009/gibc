/*
  Warnings:

  - Added the required column `business_address` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `business_category` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `business_description` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `business_type` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cac_certificate` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact_number` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_picture` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `social_media_handle` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `website_url` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `business_address` VARCHAR(191) NOT NULL,
    ADD COLUMN `business_category` ENUM('Product', 'Service') NOT NULL,
    ADD COLUMN `business_description` VARCHAR(191) NOT NULL,
    ADD COLUMN `business_type` VARCHAR(191) NOT NULL,
    ADD COLUMN `cac_certificate` VARCHAR(191) NOT NULL,
    ADD COLUMN `contact_number` VARCHAR(191) NOT NULL,
    ADD COLUMN `profile_picture` VARCHAR(191) NOT NULL,
    ADD COLUMN `social_media_handle` VARCHAR(191) NOT NULL,
    ADD COLUMN `website_url` VARCHAR(191) NOT NULL;
