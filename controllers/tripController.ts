import { Request, Response } from "express";
import { trips } from "../mockData";

export const searchTrips = (req: Request, res: Response): Response => {

  const { keyword } = req.query;

  if (!keyword || typeof keyword !== "string" || keyword.trim() === "") {
    return res.status(200).json({ success: true, data: trips });
  }

  const keywordLower = keyword.toLowerCase();
  const filteredTrips = trips.filter(
    (trip) =>
      trip.title.toLowerCase().includes(keywordLower) ||
      trip.tags.some((tag) => tag.toLowerCase().includes(keywordLower))
  );

  return res.status(200).json({ success: true, data: filteredTrips });
};
