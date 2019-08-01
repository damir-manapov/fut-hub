import { BaseServerRepository } from '../types/base-repository';
import { IChildren, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const childrensDB = createDB<IChildren>(EEntityName.Childrens);

export class ChildrensRepository extends BaseServerRepository<IChildren> {
    protected db = childrensDB;
    public entityName = EEntityName.Childrens;
}