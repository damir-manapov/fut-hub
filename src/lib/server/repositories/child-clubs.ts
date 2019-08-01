import { BaseServerRepository } from '../types/base-repository';
import { IChildClub, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const childClubsDB = createDB<IChildClub>(EEntityName.ChildClubs);

export class ChildClubsRepository extends BaseServerRepository<IChildClub> {
    protected db = childClubsDB;
    public entityName = EEntityName.ChildClubs;
}