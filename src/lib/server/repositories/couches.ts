import { BaseServerRepository } from '../types/base-repository';
import { ICouch, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const couchesDB = createDB<ICouch>(EEntityName.Couches);

export class CouchesRepository extends BaseServerRepository<ICouch> {
    protected db = couchesDB;
    public entityName = EEntityName.Couches;
}