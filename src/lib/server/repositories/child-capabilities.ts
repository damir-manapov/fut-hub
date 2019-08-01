import { BaseServerRepository } from '../types/base-repository';
import { IChildCapacilities, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const childCapabilitiesDB = createDB<IChildCapacilities>(EEntityName.ChildCapabilities);

export class ChildCapabilitiesRepository extends BaseServerRepository<IChildCapacilities> {
    protected db = childCapabilitiesDB;
    public entityName = EEntityName.ChildCapabilities;
}