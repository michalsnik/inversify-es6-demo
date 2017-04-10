import 'reflect-metadata';
import container from './src/container';
import TYPES from './src/types';

const repairService = container.get(TYPES.RepairService);
repairService.fixSink();
