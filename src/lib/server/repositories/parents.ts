import { BaseServerRepository } from '../types/base-repository';
import { IParent, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const parentsDB = createDB<IParent>(EEntityName.Parents);

export class ParentsRepository extends BaseServerRepository<IParent> {
    protected db = parentsDB;
    public entityName = EEntityName.Parents;
}