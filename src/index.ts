import express, { Request, Response } from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "@/lib/auth";
import db from "@/lib/db";
// import usersRouter from "@/routes/users.route";
// import bookingsRouter from "@/routes/bookings.route";
import spacesRouter from "@/routes/spaces.route";
// import authRouter from "@/routes/auth.route";


const app = express();
const PORT = 3000;

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// Better Auth handler BEFORE express.json()
app.all("/api/auth/{*splat}", toNodeHandler(auth));

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to KairosWorkspace API" });
});

// app.use("/users", usersRouter);
// app.use("/bookings", bookingsRouter);
app.use("/api/spaces", spacesRouter)

// app.use("/api/auth", authRouter)

app.listen(PORT, async () => {
  console.log(`Server is running on port${PORT}`);
  try {
    await db.$connect();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
});