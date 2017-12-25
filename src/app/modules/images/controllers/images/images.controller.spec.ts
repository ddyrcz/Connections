import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';
import {ImagesController} from './images.controller';
import {expect} from 'chai';

describe('ImagesController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        ImagesController
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: ImagesController;
  beforeEach(() => {
    controller = module.get(ImagesController);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});
