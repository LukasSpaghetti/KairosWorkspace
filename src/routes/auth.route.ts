import express from "express";
// import { authMiddleware } from "@/middlewares/auth.middleware";

const router: express.Router = express.Router();

// router.use(authMiddleware);

router.post("/api/sign-in");
router.post("/api/sign-up");

export default router;