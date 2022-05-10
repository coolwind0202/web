/*
  Warnings:

  - A unique constraint covering the columns `[discordUserId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Profile_discordUserId_key` ON `Profile`(`discordUserId`);