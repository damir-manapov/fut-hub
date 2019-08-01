import { BaseServerRepository } from '../types/base-repository';
import { ITeam, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const teamsDB = createDB<ITeam>(EEntityName.Teams);

export class TeamsRepository extends BaseServerRepository<ITeam> {
    protected db = teamsDB;
    public entityName = EEntityName.Teams;
}