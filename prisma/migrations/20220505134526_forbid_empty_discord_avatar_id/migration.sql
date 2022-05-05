/*
  Warnings:

  - Made the column `avatar_url` on table `DiscordUser` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `DiscordUser` MODIFY `avatar_url` VARCHAR(191) NOT NULL;
