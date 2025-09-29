import mongoose from 'mongoose'

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        tls: true 
    })
    .then(() => console.log("DB connected"));
}
