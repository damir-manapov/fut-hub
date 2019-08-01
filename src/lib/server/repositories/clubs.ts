import { BaseServerRepository } from '../types/base-repository';
import { IClub, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const clubsDB = createDB<IClub>(EEntityName.Clubs);

export class ClubsRepository extends BaseServerRepository<IClub> {
    protected db = clubsDB;
    public entityName = EEntityName.Clubs;
}