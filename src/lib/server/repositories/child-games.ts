import { BaseServerRepository } from '../types/base-repository';
import { IChildGame, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const childGamesDB = createDB<IChildGame>(EEntityName.ChildGames);

export class ChildGamesRepository extends BaseServerRepository<IChildGame> {
    protected db = childGamesDB;
    public entityName = EEntityName.ChildGames;
}