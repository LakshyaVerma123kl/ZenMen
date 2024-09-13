import { Router } from "express";
import { registerUser, verifyUser } from "./Controllers/registerUser";
import {
  forgetPassword,
  getUserDetails,
  loginUser,
  resetPassword,
} from "./Controllers/login";
import { handleRequest } from "./Middleware/logger";
import { getGeoCodes, getNearByHospitals } from "./Controllers/hopitals";

const router = Router();

router.post("/verifyUser", verifyUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgetPassword", forgetPassword);
router.put("/resetPassword", resetPassword);
router.get("/gethospitals", getNearByHospitals);
router.get("/getGeoCodes", getGeoCodes);

router.use(handleRequest);
router.get("/user", getUserDetails);

export default router;
