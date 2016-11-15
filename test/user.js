process.env.NODE_ENV = 'test';

let User = require('../models').User;
let Post = require('../models').Post;


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
    before((done) => {
        User.destroy({ where: {} });
        Post.destroy({ where: {} });
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

        var idUser;
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


        it('it should get one user', (done) => {
            chai.request(server)
                .get('/users')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                })
        });

        describe('The created user makes a post', () => {
            it('it should tell the new user to make a post', (done) => {

                let post = {
                    'content': 'Hello every one!',
                    'userId': idUser
                }

                chai.request(server)
                    .post('/posts')
                    .send(post)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('content').eql('Hello every one!');
                        res.body.should.have.property('userId').eql(idUser);
                        done();
                    });

            })
        });
    });

});