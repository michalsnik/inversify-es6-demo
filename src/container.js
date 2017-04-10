import { Container } from 'inversify';
import TYPES from './types';
import RepairService from './RepairService';
import Hammer from './Hammer';
import Wrench from './Wrench';

// Declare bindings
const container = new Container();
container.bind(TYPES.RepairService).to(RepairService);
container.bind(TYPES.Hammer).to(Hammer);
container.bind(TYPES.Wrench).to(Wrench);

export default container;
