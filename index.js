import express from "express";
import urlRoutes from "./routes/url.routes.js";
import dotenv from "dotenv";
import path from "path";
dotenv.config();
import urlModel from "./models/url.models.js";
import staticRoutes from "./routes/static.routes.js";



import connectDB from "./connect.js";
import { url } from "inspector";
const app = express();






const PORT = process.env.PORT || 3000;
await connectDB(process.env.MONGO_URI);
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));



app.use(express.json());
app.use(express.urlencoded({extended:false}));//why false because we are not using any nested objects in our form data, we are just sending a simple key-value pair. If we were sending nested objects, we would set it to true.
app.use("/url", urlRoutes);
app.use("/", staticRoutes); 
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
export default app;
//now yha pending hai ki hum apne routes ko import karein aur use karein.