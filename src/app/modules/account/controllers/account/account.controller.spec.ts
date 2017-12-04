import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';
import {AccountController} from './account.controller';
import {expect} from 'chai';

describe('AccountController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        AccountController
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: AccountController;
  beforeEach(() => {
    controller = module.get(AccountController);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});
