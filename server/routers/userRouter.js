import { Router } from "express";
import { createUser, authUser } from "../controllers/userController.js";
const router = Router();

router.post("/signup", createUser, (req, res) => res.json(res.locals.user));

router.get("/login", authUser, (req, res) => {
  res.json(res.locals.userAuth);
});
