process.env.NODE_ENV = 'test';

let User = require('../model/user')

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

    let user = {
        'name': 'Michal',
        'lastName': 'Kowalski',
        'login': 'mkowalski',
        'password': 'mk'
    }

    describe('Gets all the users', () => {
        it('should get only one user that actually is admin created for tests as a logged in user', (done) => {
            chai.request(server)
                .get('/users')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                });
        });
    });

    describe('Creates a new user', () => {
        it('should create a new user', (done) => {
            chai.request(server)
                .post('/users')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('id');
                    res.body.should.have.property('name').eql('Michal');
                    res.body.should.have.property('lastName').eql('Kowalski');
                    res.body.should.have.property('login').eql('mkowalski');
                    res.body.should.have.property('password').eql('mk');
                    done();
                });
        });
    });

    describe('Gets a user by given id', () => {
        it('should create and find the user by given id', (done) => {
            chai.request(server)
                .post('/users')
                .send(user)
                .end((err, res) => {
                    var user = res.body;
                    chai.request(server)
                        .get(`/users/${user.id}`)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('id');
                            res.body.should.have.property('name').eql('Michal');
                            res.body.should.have.property('lastName').eql('Kowalski');
                            res.body.should.have.property('login').eql('mkowalski');
                            res.body.should.have.property('password').eql('mk');
                            done();
                        })
                })
        });

        it('should return 404 status code', (done) => {
            chai.request(server)
                .get(`/users/${1}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                })
        })
    })

    describe('Follow the user', () => {
        it('should create a new user and make the admin is following him', (done) => {
            chai.request(server)
                .post('/users')
                .send(user)
                .end((err, res) => {
                    var user = res.body;
                    chai.request(server)
                        .patch(`/users/follow/${user.id}`)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('id');
                            res.body.should.have.property('name').eql('Michal');
                            res.body.should.have.property('lastName').eql('Kowalski');
                            res.body.should.have.property('login').eql('mkowalski');
                            res.body.should.have.property('password').eql('mk');

                            done();
                        })
                })
        });
    });
});