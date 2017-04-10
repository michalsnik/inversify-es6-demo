import { decorate, injectable, inject } from 'inversify';
import TYPES from './types';

export default class RepairService {
  constructor(hammer, wrench) {
    this.hammer = hammer;
    this.wrench = wrench;
  }

  fixSink() {
    this.hammer.use();
    this.wrench.use();
  };
  
  nailPicture() {
    this.hammer.use();
  };
}

decorate(injectable(), RepairService);
decorate(inject(TYPES.Hammer), RepairService, 0);
decorate(inject(TYPES.Wrench), RepairService, 1);
