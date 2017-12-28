import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';
import {PasswordHashService} from './password-hash.service';
import {expect} from 'chai';

describe('PasswordHashService', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
        PasswordHashService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let service: PasswordHashService;
  beforeEach(() => {
    service = module.get(PasswordHashService);
  });

  it('should exist', () => {
    expect(service).to.exist;
  });
});
