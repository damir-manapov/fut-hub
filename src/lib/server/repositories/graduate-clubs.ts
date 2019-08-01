import { BaseServerRepository } from '../types/base-repository';
import { IGraduateClub, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const graduateClubsDB = createDB<IGraduateClub>(EEntityName.GraduateClubs);

export class GraduateClubsRepository extends BaseServerRepository<IGraduateClub> {
    protected db = graduateClubsDB;
    public entityName = EEntityName.GraduateClubs;
}