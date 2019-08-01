import { BaseServerRepository } from '../types/base-repository';
import { IRole, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const rolesDB = createDB<IRole>(EEntityName.Roles);

export class RolesRepository extends BaseServerRepository<IRole> {
    protected db = rolesDB;
    public entityName = EEntityName.Roles;
}