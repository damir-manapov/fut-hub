import { BaseServerRepository } from '../types/base-repository';
import { IProfessionalCouch, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const professionalCouchsDB = createDB<IProfessionalCouch>(EEntityName.ProfessionalCouchs);

export class ProfessionalCouchRepository extends BaseServerRepository<IProfessionalCouch> {
    protected db = professionalCouchsDB;
    public entityName = EEntityName.ProfessionalCouchs;
}