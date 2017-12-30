import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';
import {JwtValidatorService} from './jwt-validator.service';
import {expect} from 'chai';

describe('JwtValidatorService', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
        JwtValidatorService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let service: JwtValidatorService;
  beforeEach(() => {
    service = module.get(JwtValidatorService);
  });

  it('should exist', () => {
    expect(service).to.exist;
  });
});
