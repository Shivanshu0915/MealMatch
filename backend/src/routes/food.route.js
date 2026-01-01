import express from 'express';
import {createFood,getAllFoods,getFoodById,getMyFoods,updateFood,deleteFood} from "../controllers/food.controller.js"
import { verifyJwt } from "../middlewares/verifyJwt.middleware.js";
import { upload } from '../middlewares/multer.middleware.js';
const foodRouter = express.Router();
foodRouter.get("/", getAllFoods);
foodRouter.post("/create", verifyJwt,upload.fields([{ name: "menuImage", maxCount: 1 }]), createFood); 
foodRouter.get("/me/myposts", verifyJwt, getMyFoods); 
foodRouter.get("/:id", getFoodById);    
foodRouter.put("/update/:id", verifyJwt,upload.fields([{ name: "menuImage", maxCount: 1 }]), updateFood); 
foodRouter.delete("/delete/:id", verifyJwt, deleteFood); 

export default foodRouter;