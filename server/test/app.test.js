const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect,should } = chai;
chai.use(chaiHttp)

const tourKeys= [
    "_id",
    "comments",
    "country",
    "description",
    "end",
    "imageUrl",
    "name",
    "places",
    "price",
    "rate",
    "rateAmount",
    "start",
    "usersRates"]

const reservationKeys = ['cost','tourId','start','places','user']

describe("Pobranie wszystkich wycieczek", () => {
    it("Pobranie wszystkich wycieczek", done => {
        chai
            .request(app)
            .get("/tour/all")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.length(10);
                res.body.forEach(v=>expect(v).to.have.any.keys(tourKeys))
                done();
            });
    });
})


describe("Pobranie wybranej wycieczki ", () => {
    it("id istniejące w bazie ", done => {
        chai
            .request(app)
            .get("/tour/5e3bdbd05787b19948f05e66")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.any.keys(tourKeys)
                done();
            });
    });



    it("id nie  istniejące w bazie ", done => {
        chai
            .request(app)
            .get("/tour/not_exist")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.not.have.any.keys(tourKeys)
                done();
            });
    });
})



describe(" Pobranie wszystkich rezerwacji użytkownika", () => {
    it("id użytkownika z dodanymi rezerwacjami", done => {
        chai
            .request(app)
            .get("/reservation/user/5e3aaf42b7ce6e95f8714c22")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.length.gt(0);
                res.body.forEach(v=>expect(v).to.have.any.keys(reservationKeys));
                done();
            });
    });

    it("id użytkownika bez rezerwacji", done => {
        chai
            .request(app)
            .get("/reservation/user/5e3aad7859f2846764b121aeee")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.length(0);
                done();
            });
    });
})


describe("Rejestracja nowego użytkownika", () => {
    it("nowy poprawny login, poprawne hasło", done => {
        chai
            .request(app)
            .post("/signup")
            .send({
                login: "user",
                password: "user"
            })
            .end((err, res) => {
                expect(res).to.have.status(201);
                done();
            });
    });
    it("istniejacy login, poprawne hasło", done => {
        chai
            .request(app)
            .post("/signup")
            .send({
                login: "user",
                password: "user"
            })
            .end((err, res) => {
                expect(res).to.have.status(400);
                done();
            });
    });
    it("nowy poprawny login, hasło krótsze niż 3 znaki", done => {
        chai
            .request(app)
            .post("/signup")
            .send({
                login: "user1231",
                password: "12"
            })
            .end((err, res) => {
                expect(res).to.have.status(400);
                done();
            });
    });

    it("nowy poprawny login, hasło krótsze niż 3 znaki", done => {
        chai
            .request(app)
            .post("/signup")
            .send({
                login: "",
                password: "1234"
            })
            .end((err, res) => {
                expect(res).to.have.status(400);
                done();
            });
    });

})




describe("Zalogowanie użytkownika", () => {
    it("stniejący login, poprawne hasło", done => {
        chai
            .request(app)
            .post("/auth")
            .send({
                login: "user",
                password: "user"
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.any.keys('token')
                done();
            });
    });
    it("istniejący login, niepoprawne hasło", done => {
        chai
            .request(app)
            .post("/auth")
            .send({
                login: "user",
                password: "userrtrtrt"
            })
            .end((err, res) => {
                expect(res).to.have.status(401);
                expect(res.body).to.not.have.keys('token')

                done();
            });
    });
    it("pusty login, puste hasło", done => {
        chai
            .request(app)
            .post("/auth")
            .send({
                login: "",
                password: ""
            })
            .end((err, res) => {
                expect(res).to.have.status(400);
                done();
            });
    });
})


describe("Dodanie nowej wycieczk", () => {
    it("Poprawne dane wycieczki ze wszystkimi poprawnymi danymi", done => {
        chai
            .request(app)
            .post("/tour")
            .send({
                imageUrl: [
                    "https://i.content4travel.com/cms/img/u/desktop/prodsliderphoto/xsomale_0.jpg?version=89?version=1"
                ],
                name: "Wycieczka 0",
                country: "Angola",
                description: "Cras sit amet nibh libero, in gravida nulla",
                price: 5912,
                maxPlaces: 53,
                start: "2020-01-28T00:00:00.000Z",
                end: "2020-03-15T00:00:00.000Z",
                places: 53
            })
            .end((err, res) => {
                expect(res).to.have.status(201);
                done();
            });
    });

    it("Niepoprawne dane w polu ceny wpisano niepoprawną ujemną liczbę ", done => {
        chai
            .request(app)
            .post("/tour")
            .send({
                imageUrl: [
                    "https://i.content4travel.com/cms/img/u/desktop/prodsliderphoto/xsomale_0.jpg?version=89?version=1"
                ],
                name: "Wycieczka 0",
                country: "Angola",
                description: "Cras sit amet nibh libero, in gravida nulla",
                price: - 5912,
                maxPlaces: 53,
                start: "2020-01-28T00:00:00.000Z",
                end: "2020-03-15T00:00:00.000Z",
                places: 53
            })
            .end((err, res) => {
                expect(res).to.have.status(400);
                done();
            });
    });

    it("Puste ciało zapytania", done => {
        chai
            .request(app)
            .post("/tour")
            .send({
            })
            .end((err, res) => {
                expect(res).to.have.status(400);
                done();
            });
    });
})


describe("Edycja wycieczki", () => {
    it("Poprawna wartość liczbowa  inna niż poprzednia dla tej wycieczki w polu ceny", done => {
        chai
            .request(app)
            .put("/tour/5e3aaef1b7ce6e95f8714c21")
            .send({

                price: 5912,
                maxPlaces: 53
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it("Niepoprawne dane w polu ceny wpisano niepoprawną ujemną liczbę ", done => {
        chai
            .request(app)
            .put("/tour/5e3aaef1b7ce6e95f8714c21")
            .send({
                imageUrl: [
                    "https://i.content4travel.com/cms/img/u/desktop/prodsliderphoto/xsomale_0.jpg?version=89?version=1"
                ],
                name: "Wycieczka 0",
                country: "Angola",
                description: "Cras sit amet nibh libero, in gravida nulla",
                price: - 5912,
                maxPlaces: 53,
                start: "2020-01-28T00:00:00.000Z",
                end: "2020-03-15T00:00:00.000Z",
                places: 53
            })
            .end((err, res) => {
                expect(res).to.have.status(400);
                done();
            });
    });

    it("Puste ciało zapytania", done => {
        chai
            .request(app)
            .put("/tour/5e3aaef1b7ce6e95f8714c21")
            .send({
            })
            .end((err, res) => {
                expect(res).to.have.status(400);
                done();
            });
    });





})
