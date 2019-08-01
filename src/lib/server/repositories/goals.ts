import { BaseServerRepository } from '../types/base-repository';
import { IGoal, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const goalsDB = createDB<IGoal>(EEntityName.Goals);

export class GoalsRepository extends BaseServerRepository<IGoal> {
    protected db = goalsDB;
    public entityName = EEntityName.Goals;
}