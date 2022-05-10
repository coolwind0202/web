/*
  Warnings:

  - You are about to drop the `DiscordUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProfileTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Profile` DROP FOREIGN KEY `Profile_discordUserId_fkey`;

-- DropForeignKey
ALTER TABLE `ProfileTag` DROP FOREIGN KEY `ProfileTag_profileId_fkey`;

-- DropForeignKey
ALTER TABLE `ProfileTag` DROP FOREIGN KEY `ProfileTag_tagId_fkey`;

-- DropTable
DROP TABLE `DiscordUser`;

-- DropTable
DROP TABLE `Profile`;

-- DropTable
DROP TABLE `ProfileTag`;

-- DropTable
DROP TABLE `Tag`;

-- CreateTable
CREATE TABLE `MemberAccount` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MemberProfile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bio` VARCHAR(191) NOT NULL,
    `friend_code` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MemberDiscordUser` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `discord_id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `discriminator` CHAR(4) NOT NULL,
    `avatar_url` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `MemberDiscordUser_discord_id_key`(`discord_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MemberCluster` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `icon_url` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_MemberClusterToMemberProfile` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MemberClusterToMemberProfile_AB_unique`(`A`, `B`),
    INDEX `_MemberClusterToMemberProfile_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_MemberClusterToMemberProfile` ADD FOREIGN KEY (`A`) REFERENCES `MemberCluster`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MemberClusterToMemberProfile` ADD FOREIGN KEY (`B`) REFERENCES `MemberProfile`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
