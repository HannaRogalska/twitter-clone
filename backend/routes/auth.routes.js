import express from "express";
import { signup, login, logout } from "../controllers/auth.controllers.js"; 

const route = express.Router();

route.get("/signup", signup);

route.post("login", login);
route.post("logout", logout);

export default route;
