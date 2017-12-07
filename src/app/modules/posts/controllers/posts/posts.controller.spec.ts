import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';
import {PostsController} from './posts.controller';
import {expect} from 'chai';

describe('PostsController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        PostsController
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: PostsController;
  beforeEach(() => {
    controller = module.get(PostsController);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});
