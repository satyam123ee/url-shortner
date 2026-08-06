import express from "express";
import urlRoutes from "./routes/url.routes.js";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./connect.js";
const app = express();



const PORT = process.env.PORT || 3000;
await connectDB(process.env.MONGO_URI);

app.use(express.json());
app.use("/url", urlRoutes);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
export default app;
//now yha pending hai ki hum apne routes ko import karein aur use karein.