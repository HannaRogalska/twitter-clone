import express from "express";
import {
  followUnfollowUser,
  getSuggestedUsers,
  getUserProfile,
  updateUserProfile,
} from "../controllers/user.controllers.js";
import { protectRoute } from "../middleware/protectRoute.js";

const route = express.Router();

route.get("/profile/:username", protectRoute, getUserProfile);
route.get("/suggested", protectRoute, getSuggestedUsers);
route.post("/follow/:id", protectRoute, followUnfollowUser);
route.post("/update", protectRoute, updateUserProfile);

export default route;
