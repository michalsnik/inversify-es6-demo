import 'reflect-metadata';
import { expect } from 'chai';
import sinon from 'sinon';
import container from '../src/container';
import TYPES from '../src/types';

describe('RepairService', () => {
  beforeEach(() => {
    container.snapshot();
  });

  afterEach(() => {
    container.restore();
  });

  it('Uses hammer to nail a picture', () => {
    const hammerMock = {
      use: sinon.spy()
    };

    container.unbind(TYPES.Hammer);
    container.bind(TYPES.Hammer).toConstantValue(hammerMock);

    const repairService = container.get(TYPES.RepairService);
    repairService.nailPicture();

    expect(hammerMock.use.calledOnce).eql(true);
  });
});