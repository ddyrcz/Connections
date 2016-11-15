process.env.NODE_ENV = 'test';

let User = require('../models').User;

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
    beforeEach((done) => {
        User.destroy({ where: {} });
        done();
    });

    describe('Gets all the users', () => {
        it('it should get zero users', (done) => {
            chai.request(server)
                .get('/users')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

    describe('Gets a user by given id', () => {
        it('it should find a user by given id', (done) => {
            User.create({ 'name': 'Michal' })
                .then((user) => {
                    chai.request(server)
                        .get(`/users/${user.id}`)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('name').eql('Michal');
                            done();
                        })
                })
        });

        it('it should return 404 status code', (done) => {
            chai.request(server)
                .get(`/users/${1}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                })
        })
    })

    describe('Creates a new user', () => {
        it('it should create a new user', (done) => {
            let user = {
                name: 'Michal'
            }
            chai.request(server)
                .post('/users')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('id');
                    res.body.should.have.property('name').eql('Michal');
                    idUser = res.body.id;
                    done();
                });
        });
    });
});