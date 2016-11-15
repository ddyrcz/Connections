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

    describe('Get all the users', () => {
        it('it should GET all the users', (done) => {
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
                    res.body.should.have.property('name').eql('Michal')
                    done();
                });
        });
    });

});