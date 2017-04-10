import { decorate, injectable } from 'inversify';
import TYPES from './types';

export default class Hammer {
  use() {
    console.log('Hammer time!');
  }
}

decorate(injectable(), Hammer);
