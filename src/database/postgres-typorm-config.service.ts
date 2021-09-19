import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from '@nestjs/typeorm'
import { ConfigService } from 'src/config/config.service'

export class PostgressOrmConfig implements TypeOrmOptionsFactory{
    constructor(private readonly configService:ConfigService){}
    createTypeOrmOptions(): TypeOrmModuleOptions  {
        const options:TypeOrmModuleOptions={
            host: this.configService.get<string>('database.host'),
            username: this.configService.get<string>('database.username'),
            password: this.configService.get<string>('database.password'),
            database: this.configService.get<string>('database.dbname'),
            port: this.configService.get<number>('database.port'),
            entities: [__dirname + '/../**/**.entity{.ts,.js}'],
            synchronize: this.configService.get<boolean>('orm.sync')
        }
        return options
    }
    
}