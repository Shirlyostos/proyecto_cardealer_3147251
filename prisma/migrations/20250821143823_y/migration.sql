/*
  Warnings:

  - You are about to drop the column `nombre` on the `lugares` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[lugar_nombre]` on the table `lugares` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `lugar_nombre` to the `lugares` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `lugares_nombre_key` ON `lugares`;

-- AlterTable
ALTER TABLE `lugares` DROP COLUMN `nombre`,
    ADD COLUMN `lugar_nombre` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario_nombre` VARCHAR(191) NOT NULL,
    `usuario_email` VARCHAR(191) NOT NULL,
    `usuario_password` VARCHAR(191) NOT NULL,
    `usuario_rol` VARCHAR(191) NOT NULL,
    `usuario_estado` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `lugares_lugar_nombre_key` ON `lugares`(`lugar_nombre`);
