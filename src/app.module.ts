import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [BookModule, ConfigModule, DatabaseModule],
  controllers: [],
  providers: [],
  exports:[]
})
export class AppModule {}
