/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import { UserControllers } from "./user.controller";
import auth from "../../middlewares/auth";
import { upload } from "../../utils/multer";
// import auth from '../../middlewares/auth';

const router = express.Router();
router.get(
  "/",
  auth("admin",  "user", "student"),
  UserControllers.getAllUser
);
router.get(
  "/:id",
  auth("admin",  "user", "student"),
  UserControllers.getSingleUser
);

router.patch(
  "/:id",
  auth("admin",  "user", "student"),
  UserControllers.updateUser
);


export const UserRoutes = router;
