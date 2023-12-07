/*
  Warnings:

  - The primary key for the `Contact` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Contact` table. All the data in the column will be lost.
  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Order` table. All the data in the column will be lost.
  - Added the required column `id_contact` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_order` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Contact` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `id_contact` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_contact`);

-- AlterTable
ALTER TABLE `Order` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `id_order` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_order`);
