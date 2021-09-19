import { Module, Post } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'src/config/config.module';
import { ConfigService } from 'src/config/config.service';
import { PostgressOrmConfig } from './postgres-typorm-config.service';

@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            imports:[ConfigModule],
            useClass:PostgressOrmConfig,
        }),
        ConfigService]
})
export class DatabaseModule {}
