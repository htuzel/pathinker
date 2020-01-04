const request = require("supertest");
const app = require("../index");

describe("Authentication Tests", () => {
    it("Register Test", async () => {
        const response = await request(app).get("/status");
        expect(response.body.success).toBe(true);
    });

    test("", async () => {
        const response = await request(app).get("/status");
        expect(response.body.success).toBe(true);   
    });
});