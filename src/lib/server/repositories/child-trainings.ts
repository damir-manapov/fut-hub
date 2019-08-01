import { BaseServerRepository } from '../types/base-repository';
import { IChildTraining, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const childTrainingsDB = createDB<IChildTraining>(EEntityName.ChildTrainings);

export class ChildTrainingsRepository extends BaseServerRepository<IChildTraining> {
    protected db = childTrainingsDB;
    public entityName = EEntityName.ChildTrainings;
}