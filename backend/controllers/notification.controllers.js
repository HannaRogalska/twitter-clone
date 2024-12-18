import { Notification } from "../models/notification.model.js";

export const getNotifications = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log(userId);
    const userNotifications = await Notification.find({
      to: { $in: userId },
    }).populate({ path: "from", select: "username profileImg" });
    console.log(userNotifications);
    await Notification.updateMany({ to: userId }, { read: true });
    res.status(200).json(userNotifications);
  } catch (err) {
    console.log("Error in getNotifications controller: ", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const deleteNotifications = async (req, res) => {
  try {
    const userId = req.user._id;
    await Notification.deleteMany({ to: userId });
    res.status(200).json({ message: "Notification deleted successfully" });
  } catch (err) {
    console.log("Error in deleteNotifications: ", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
