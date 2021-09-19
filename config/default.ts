import { resolve } from "path"
const SRC_PATH=resolve(__dirname,'..','src')
export default{
    database:{
        host:'localhost',
        port:5432,
        username:'postgres',
        password:'123456',
        dbname:'book'
    },
    orm:{
        entities:[SRC_PATH+'/**/*.entity{.ts,.js}'],
        sync:true
    }

}