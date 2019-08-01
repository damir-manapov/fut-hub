import { BaseServerRepository } from '../types/base-repository';
import { IChildTeam, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const childTeamsDB = createDB<IChildTeam>(EEntityName.ChildTeams);

export class ChildTeamsRepository extends BaseServerRepository<IChildTeam> {
    protected db = childTeamsDB;
    public entityName = EEntityName.ChildTeams;
}