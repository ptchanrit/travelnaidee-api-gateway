import request from "supertest";
import tripRoutes from "../routes/tripRoutes";
import express, { Express } from "express";

const app: Express = express();
app.use("/api/trips", tripRoutes);

describe("Search Trips API", () => {
  const expectedTrip = {
    title: "คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!",
    eid: "1",
    url: "https://www.wongnai.com/trips/travel-koh-chang",
    description:
      "เริ่มจากเพื่อนอยากไปเขาคิชฌกูฏ หลังจากดูรายการทีวี จึงทำให้เกิดทริปนี้ขึ้นแบบเร่งด่วน โดยเดินทางด้วยรถ บขส. ไปยังจันทบุรี และการเดินทางหลักในการเที่ยวคือมอเตอร์ไซค์เช่า",
    photos: [
      "https://img.wongnai.com/p/1920x0/2019/07/02/ffef3d6d900146e9b17dbd726fd8bab6.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/941dbb607f0742bbadd63bbbd993e187.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/bd1d256256c14c208d0843a345f75741.jpg",
    ],
    tags: ["เกาะ", "ทะเล", "จุดชมวิว", "ธรรมชาติ", "ตราด"],
  };

  it("should return the specific trip when searching for keyword 'เกาะ'", async () => {
    const keyword = "เกาะ";
    const response = await request(app).get(`/api/trips?keyword=${keyword}`);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toEqual([expectedTrip]);
  });

  it("should return the trip when searching by title with keyword 'คู่มือเที่ยว'", async () => {
    const keyword = "คู่มือเที่ยว";
    const response = await request(app).get(`/api/trips?keyword=${keyword}`);

    const filteredTrips = [expectedTrip];

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toEqual(filteredTrips);
  });

  it("should return the trip when searching by tag with keyword 'ตราด'", async () => {
    const keyword = "ตราด";
    const response = await request(app).get(`/api/trips?keyword=${keyword}`);

    const filteredTrips = [expectedTrip];

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.data).toEqual(filteredTrips);
  });
});
