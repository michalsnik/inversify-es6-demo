import { decorate, injectable } from 'inversify';
import TYPES from './types';

export default class Wrench {
  use() {
    console.log('Wrench it is!');
  }
}

decorate(injectable(), Wrench);
