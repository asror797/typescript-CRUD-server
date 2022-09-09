import { DataSource } from "typeorm";
import * as path from 'path'


export const dataSource = new DataSource({
   type: 'postgres',
   host: 'localhost',
   port: 5432,
   username: 'asror',
   password: 'aaa13579#',
   synchronize: false,
   entities: [path.join(__dirname,'..','entities','*.entity.{ts,js}')]
})