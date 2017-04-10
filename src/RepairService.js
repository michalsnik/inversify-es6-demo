import { decorate, injectable, inject, multiInject } from 'inversify';
import TYPES from './types';

export default class RepairService {
  constructor(hammer, wrench, tools) {
    this.hammer = hammer;
    this.wrench = wrench;
    this.tools = tools;
  }

  fixSink() {
    this.hammer.use();
    this.wrench.use();
  }
  
  nailPicture() {
    this.hammer.use();
  }

  fixAll() {
    this.tools.forEach(tool => tool.use());
  }
}

decorate(injectable(), RepairService);
decorate(inject(TYPES.Hammer), RepairService, 0);
decorate(inject(TYPES.Wrench), RepairService, 1);
decorate(multiInject(TYPES.Tool), RepairService, 2);
