import express from "express";
// import { authMiddleware } from "@/middlewares/auth.middleware";
import * as bookingsController from "@/controllers/bookings.controller";

const router: express.Router = express.Router();

// router.use(authMiddleware);

router.get("/", bookingsController.getAll);
router.get("/:id", bookingsController.getById);

router.delete("/:id", bookingsController.deleteById)

router.put("/:id", bookingsController.modify)

router.post("/", bookingsController.create)

export default router;