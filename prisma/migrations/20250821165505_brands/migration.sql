/*
  Warnings:

  - Added the required column `lugar_id` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `lugar_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `brands` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `brand_name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `brands_brand_name_key`(`brand_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `usuarios_lugar_id_fkey` FOREIGN KEY (`lugar_id`) REFERENCES `lugares`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
