const request = require('supertest');
const app = require('../app'); 
jest.setTimeout(300000);
describe("Test the root path", () => {
    test("home status response check", done => {
      request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });

describe('Time test', () => {
  test('Home time', async () => {
      const foo = true;
      await new Promise((r) => setTimeout(r, 100000));
      expect(foo).toBeDefined();
    });
})

describe("Test the root path", () => {
  test("home status response check 2", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the root path", () => {
  test("home status response check 3", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test the root path", () => {
  test("home status response check 4", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.status).toBe(200);
        done();
      });
  });
});
