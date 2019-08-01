import { BaseServerRepository } from '../types/base-repository';
import { IGame, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const gamesDB = createDB<IGame>(EEntityName.Games);

export class GamesRepository extends BaseServerRepository<IGame> {
    protected db = gamesDB;
    public entityName = EEntityName.Games;
}