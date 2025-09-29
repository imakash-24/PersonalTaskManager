import mongoose from 'mongoose'

export const connectDB = async ()=> {
    await mongoose.connect("mongodb+srv://jaiakash2409:Akashatlas24@cluster0.c1koewq.mongodb.net/Taskflow")
    .then(()=> console.log("DB connected"));
    
}