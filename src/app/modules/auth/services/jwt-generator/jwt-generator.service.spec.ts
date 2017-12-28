import {Test} from '@nestjs/testing';
import {TestingModule} from '@nestjs/testing/testing-module';
import {JwtGeneratorService} from './jwt-generator.service';
import {expect} from 'chai';

describe('JwtGeneratorService', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
        JwtGeneratorService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let service: JwtGeneratorService;
  beforeEach(() => {
    service = module.get(JwtGeneratorService);
  });

  it('should exist', () => {
    expect(service).to.exist;
  });
});
