import "jest";
import request from "supertest";
import { HttpStatusCode } from "../../src/Controllers/HttpStatusCode.Enum";
import app from "../../src/server";

describe("File upload endpoint", () => {
  it("should upload a file and return its metadata", async () => {
    let i = 0;
    const res = await request(app)
      .post("/fileanalyze")
      .attach("upfile", './__tests__/integration/test-file.md')
      .expect(HttpStatusCode.OK);

    expect(res.body).toHaveProperty("filename");
    expect(res.body).toHaveProperty("type");
    expect(res.body).toHaveProperty("size");
  });

  it("should return an error if no file is uploaded", async () => {
    const res = await request(app)
      .post("/fileanalyze")
      .expect(HttpStatusCode.BadRequest);

    expect(res.body).toHaveProperty("error");
  });
});
