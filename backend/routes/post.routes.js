import express from "express";
import {
  commentOnPost,
  createPost,
  deletePost,
  getAllPost,
  getFollowingPosts,
  getLikedPosts,
  getUserPosts,
  likeUnlikePost,
} from "../controllers/post.controllers.js";
import { protectRoute } from "../middleware/protectRoute.js";

const route = express.Router();
route.get("/all", protectRoute, getAllPost);
route.get("/following", protectRoute, getFollowingPosts);
route.get("/likes/:id", protectRoute, getLikedPosts);
route.get("/user/:username", protectRoute, getUserPosts);
route.post("/create-post", protectRoute, createPost);
route.post("/like/:id", protectRoute, likeUnlikePost);
route.post("/comment/:id", protectRoute, commentOnPost);
route.delete("/:id", protectRoute, deletePost);
export default route;
