import { Router } from "express";
import { searchTrips } from "../controllers/tripController";

const router = Router();
router.get("/", (req, res) => {
  searchTrips(req, res);
});

export default router;
