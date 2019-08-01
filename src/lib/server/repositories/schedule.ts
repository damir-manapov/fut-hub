import { BaseServerRepository } from '../types/base-repository';
import { ISchedule, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const scheduleDB = createDB<ISchedule>(EEntityName.Schedule);

export class ScheduleRepository extends BaseServerRepository<ISchedule> {
    protected db = scheduleDB;
    public entityName = EEntityName.Schedule;
}