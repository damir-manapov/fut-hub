import { BaseServerRepository } from '../types/base-repository';
import { IGraduateProfessional, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const graduateProfessionalsDB = createDB<IGraduateProfessional>(EEntityName.GraduateProfessionals);

export class GraduateProfessionalsRepository extends BaseServerRepository<IGraduateProfessional> {
    protected db = graduateProfessionalsDB;
    public entityName = EEntityName.GraduateProfessionals;
}