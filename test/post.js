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
        Post.destroy({ where: {} });
        User.destroy({ where: {} });
        done();
    });

    let user = {
        'name': 'Michal',
        'lastName': 'Kowalski',
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
            User.create(user)
                .then(user => {
                    let post = {
                        content: 'Hello world!',
                        userId: user.id
                    }
                    chai.request(server)
                        .post('/posts')
                        .send(post)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('content').eql('Hello world!');
                            done();
                        })
                })
        })
    })    
})