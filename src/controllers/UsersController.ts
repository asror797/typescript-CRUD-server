import { Request , Response } from "express";

module.exports = {
   GET:async(req:Request, res:Response) => {
      try {
         res.json({status:"ok"})
      } catch (error) {
         console.log(error)
         res.json({status:500})
      }
   }
}