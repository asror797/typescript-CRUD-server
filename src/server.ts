import express , {Request , Response} from "express";
import { dataSource } from "./config/ormconfig";
import { Users } from "./entities/users.entity";

const PORT = 9000;

const app: express.Application = express()

app.use(express.json())

app.get('/users',async(req:Request, res:Response) => {
   try {
      res.json( await dataSource.getRepository(Users).find())
   } catch (error) {
      console.log(error)
      res.sendStatus(500)
   }
})


app.post('/users',async(req:Request, res:Response) => {

   try {
      const {firstname , lastname , email } = req.body

      const {raw} = await dataSource.getRepository(Users)
      .createQueryBuilder()
      .insert()
      .into(Users)
      .values({ firstname: firstname, lastname: lastname , email:email })
      .returning(['firstname','lastname','email'])
      .execute();

      res.json(raw)

   } catch (error) {
      console.log(error)
      res.sendStatus(500)
   }
})

app.delete('/users',async(req:Request,res:Response) => {
   try {
      
      const { id } = req.body


      const { raw } = await dataSource
         .createQueryBuilder()
         .delete()
         .from(Users)
         .where("id = :id", { id: id })
         .returning(['firstname','lastname','email'])
         .execute()

      res.json(raw[0])

   } catch (error) {
      
   }
})


app.put('/users',async(req:Request,res:Response) => {

   try {

      const { firstname , lastname , email } = req.body

      const updateData = await dataSource
            .createQueryBuilder()
            .update(Users)
            .set(req.body)
            .where("id = :id" , { id: req.body.id})
            .returning(['id','firstname','lastname'])
            .execute()
      res.json(updateData)

      // await dataSource
      //    .createQueryBuilder()
      //    .update(User)
      //    .set({ firstName: "Timber", lastName: "Saw" })
      //    .where("id = :id", { id: 1 })
      //    .execute()

   } catch (error) {
      console.log(error);
      res.sendStatus(500)
   }
})

app.listen(PORT,() => {
   console.log('Server is runing at 9000')
})