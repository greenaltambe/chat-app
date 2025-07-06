import express from "express";
import {
	signup,
	login,
	logout,
	updateProfile,
	checkAuth,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// protect route for checking if user is logged in (middleware)
router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth); // when we refresh the page, we check if the user is logged in

export default router;
