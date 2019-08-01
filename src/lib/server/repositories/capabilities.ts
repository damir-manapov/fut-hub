import { BaseServerRepository } from '../types/base-repository';
import { ICapability, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const capabilitiesDB = createDB<ICapability>(EEntityName.Capabilities);

export class CapabilitiesRepository extends BaseServerRepository<ICapability> {
    protected db = capabilitiesDB;
    public entityName = EEntityName.Capabilities;
}