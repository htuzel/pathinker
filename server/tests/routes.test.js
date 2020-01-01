const request = require("supertest");
const app = require("../index");

describe("Route Tests", () => {
    it("API status test", async () => {
        const response = await request(app).get("/status");
        expect(response.body.success).toBe(true);
    });

    test('', async () => {
        const response = await request(app).get("/status");
        expect(response.body.success).toBe(true);   
    });
});