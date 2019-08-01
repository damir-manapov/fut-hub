import { BaseServerRepository } from '../types/base-repository';
import { IChildGameRole, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const childrenGameRolesDB = createDB<IChildGameRole>(EEntityName.ChildGameRoles);

export class ChildrenGameRolesRepository extends BaseServerRepository<IChildGameRole> {
    protected db = childrenGameRolesDB;
    public entityName = EEntityName.ChildGameRoles;
}