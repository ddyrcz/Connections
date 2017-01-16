process.env.NODE_ENV = 'test';

let Post = require('../model/post')
let User = require('../model/user')

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Posts', () => {
    beforeEach((done) => {
        Promise.all([Post.remove({}), User.remove({})])
            .then(result => {
                done();
            })
    });

    let user = {
        'name': 'Michal',
        'lastname': 'Kowalski',
        'login': 'mkowalski',
        'password': 'mk'
    }

    describe('Gets all the posts', () => {
        it('should get zero posts', (done) => {
            chai.request(server)
                .get('/posts')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                })
        })
    })

    describe('Creates a new post', () => {
        it('should create a user that make a post', (done) => {
            chai.request(server)
                .post('/users')
                .send(user)
                .end((err, user) => {
                    let post = {
                        content: 'Hello world!',
                        publisher: {
                            name: user.name,
                            lastname: user.lastname,
                            _ref: user._id
                        }
                    }
                    chai.request(server)
                        .post('/posts')
                        .send(post)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('content').eql('Hello world!');
                            //res.body.should.have.property('publisher')

                            // TODO publisher.name itp
                            done();
                        })
                })
        })
    })

    describe('Gets followers posts', () => {
        it('should get one post that the follower posted', (done) => {

            // Creates a new user 
            chai.request(server)
                .post('/users')
                .send(user)
                .end((err, res) => {

                    // New user make a post
                    let user = res.body;
                    chai.request(server)
                        .post('/posts')
                        .send({
                            content: 'Where are my followers?', publisher: {
                                name: user.name,
                                lastname: user.lastname,
                                _ref: user._id
                            }
                        })
                        .end((err, res) => {

                            // Admin is following the new user
                            chai.request(server)
                                .patch(`/users/follow/${user._id}`)
                                .end((err, res) => {

                                    // Admin gets all posts
                                    chai.request(server)
                                        .get('/posts')
                                        .end((err, res) => {
                                            res.should.have.status(200);
                                            res.body.should.be.a('array');
                                            res.body.length.should.be.eql(1);
                                            done();
                                        })
                                })
                        })
                })
        });
    })
})