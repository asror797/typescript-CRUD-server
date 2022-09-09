import { Request , Response } from "express";
import { dataSource } from "../config/ormconfig";
import { Users } from "../entities/users.entity";
import { getRepository} from 'typeorm'

module.exports = {
   GET:async(req:Request, res:Response) => {
      try {
         const userRepo = dataSource.getRepository(Users)
         res.json({status:"ok"})
      } catch (error) {
         console.log(error)
         res.json({status:500})
      }
   }
}