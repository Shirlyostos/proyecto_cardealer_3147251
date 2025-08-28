/*
  Warnings:

  - You are about to drop the `brands` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lugares` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usuarios` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `usuarios` DROP FOREIGN KEY `usuarios_lugar_id_fkey`;

-- DropTable
DROP TABLE `brands`;

-- DropTable
DROP TABLE `lugares`;

-- DropTable
DROP TABLE `usuarios`;

-- CreateTable
CREATE TABLE `Lugar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lugar_nombre` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Lugar_lugar_nombre_key`(`lugar_nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario_nombre` VARCHAR(191) NOT NULL,
    `usuario_email` VARCHAR(191) NOT NULL,
    `usuario_password` VARCHAR(191) NOT NULL,
    `usuario_rol` VARCHAR(191) NOT NULL,
    `usuario_estado` BOOLEAN NOT NULL DEFAULT true,
    `lugar_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Brand` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `brand_name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Brand_brand_name_key`(`brand_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_lugar_id_fkey` FOREIGN KEY (`lugar_id`) REFERENCES `Lugar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
