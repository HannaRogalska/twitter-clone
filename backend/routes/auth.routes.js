import express from "express";
import { signup, login, logout, getMe } from "../controllers/auth.controllers.js"; 
import { protectRoute } from "../middleware/protectRoute.js";

const route = express.Router();

route.get("/me", protectRoute, getMe);
route.post("/signup", signup);
route.post("/login", login);
route.post("/logout", logout);

export default route;
