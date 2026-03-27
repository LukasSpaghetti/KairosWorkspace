import express from "express";
// import { authMiddleware } from "@/middlewares/auth.middleware";
import * as spacesController from "@/controllers/spaces.controller";

const router: express.Router = express.Router();

// router.use(authMiddleware);

router.get("/", spacesController.getAll);
router.get("/:id", spacesController.getById);

export default router;