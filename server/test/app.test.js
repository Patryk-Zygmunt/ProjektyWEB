const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;

chai.use(chaiHttp)
describe("Server!", () => {
    it("Pobranie wszystkich wycieczek", done => {
        chai
            .request(app)
            .get("/tour/all")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.length(10);
                done();
            });
    });
})
