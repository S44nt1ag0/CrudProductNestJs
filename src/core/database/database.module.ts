import { Module } from '@nestjs/common';
import { databaseProviders } from './database';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
