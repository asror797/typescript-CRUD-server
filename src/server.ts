import express from "express";
const PORT = 9000;

const app: express.Application = express()

app.use(express.json())


app.listen(PORT,() => {
   console.log('Server is runing at 9000')
})