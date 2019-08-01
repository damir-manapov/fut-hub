import { BaseServerRepository } from '../types/base-repository';
import { IParentChild, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const parentChildsDB = createDB<IParentChild>(EEntityName.ParentChilds);

export class ParentChildsRepository extends BaseServerRepository<IParentChild> {
    protected db = parentChildsDB;
    public entityName = EEntityName.ParentChilds;
}