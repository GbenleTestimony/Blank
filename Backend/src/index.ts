import express from "express";
import type {Request, Response, Application} from "express";
import dotenv from "dotenv";


dotenv.config()
const app:Application = express();

app.get('/', (req: Request, res: Response) : void=>{
    res.status(202).json({
        status: 'success',
        timestamp: new Date().toISOString()
    })
})

app.listen(3000, (): void=>{
    console.log('The server is running fine')
})