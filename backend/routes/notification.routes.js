import express from 'express'
import { protectRoute } from '../middleware/protectRoute.js';
import { deleteNotifications, getNotifications } from '../controllers/notification.controllers.js';

const route = express.Router()

route.get('/', protectRoute, getNotifications);
route.delete("/", protectRoute, deleteNotifications);


export default route;