import express from "express"
import cors from "cors"
import "dotenv/config"
import {connectDB} from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import taskRouter from "./routes/taskRoutes.js"

const app = express()
const port = process.env.PORT || 4000

//Middleware
const corsOptions = {
  origin: "https://personaltaskmanager-frontend-3w6u.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  credentials: true
};

// Attach CORS middleware
app.use(cors(corsOptions));

// Explicitly handle preflight requests
app.options("*", cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Database 
connectDB()

//Routes
app.use("/api/user", userRouter)
app.use("/api/task", taskRouter)


app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`Server started on  http://localhost:${port}`); 
})