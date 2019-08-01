import { BaseServerRepository } from '../types/base-repository';
import { ITraining, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const trainingsDB = createDB<ITraining>(EEntityName.Trainings);

export class TrainingsRepository extends BaseServerRepository<ITraining> {
    protected db = trainingsDB;
    public entityName = EEntityName.Trainings;
}