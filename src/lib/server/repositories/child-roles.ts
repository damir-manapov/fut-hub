import { BaseServerRepository } from '../types/base-repository';
import { IChildRole, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const childRolesDB = createDB<IChildRole>(EEntityName.ChildRoles);

export class ChildRolesRepository extends BaseServerRepository<IChildRole> {
    protected db = childRolesDB;
    public entityName = EEntityName.ChildRoles;
}