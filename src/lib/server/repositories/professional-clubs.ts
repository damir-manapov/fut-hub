import { BaseServerRepository } from '../types/base-repository';
import { IProfessionalClub, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const professionalClubsDB = createDB<IProfessionalClub>(EEntityName.ProfessionalClubs);

export class ProfessionalClubsRepository extends BaseServerRepository<IProfessionalClub> {
    protected db = professionalClubsDB;
    public entityName = EEntityName.ProfessionalClubs;
}