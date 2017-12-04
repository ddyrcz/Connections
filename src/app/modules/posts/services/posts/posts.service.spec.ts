import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';
import {PostsService} from './posts.service';
import {expect} from 'chai';

describe('PostsService', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
        PostsService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let service: PostsService;
  beforeEach(() => {
    service = module.get(PostsService);
  });

  it('should exist', () => {
    expect(service).to.exist;
  });
});
