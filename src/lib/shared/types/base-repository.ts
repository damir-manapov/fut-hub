// tslint:disable:max-line-length
import { IBaseSchema } from './base-schema';
import { ISelector } from '../../server/types/pouchdb-find';

type TWithPouchMeta<Entity> = Entity & {
  _id: string;
  _rev: string;
};

interface IGetListOptions {
  filter?: ISelector;
  limit?: number;
  offset?: number;
}

interface ISharedBaseRepository<Schema extends IBaseSchema> {
  entityName: EEntityName;

  getById(id: Schema['id']): Promise<TWithPouchMeta<Schema> | null>;

  getCount(): Promise<number>;

  getList(options?: IGetListOptions): Promise<Array<TWithPouchMeta<Schema>>>;

  insert(data: Schema): Promise<TWithPouchMeta<Schema>>;

  update(data: TWithPouchMeta<Schema>): Promise<TWithPouchMeta<Schema>>;

  delete(id: Schema['id']): Promise<TWithPouchMeta<Schema>>;
}

enum ERepositoryRoutes {
  GetById = 'get-by-id',
  GetCount = 'get-count',
  GetList = 'get-list',
  Insert = 'insert',
  Update = 'update',
  Delete = 'delete',
}

// enum EAgentClientRoutes {
//   SearchTickets = 'search-tickets',
//   BuyTicket = 'buy-ticket',
// }

enum EEntityName {
  Childrens = 'childrens',
  Couches = 'couches',
  Parents = 'parents',
  Teams = 'teams',
  ProfessionalClubs = 'professional-clubs',
  Clubs = 'clubs',
  Trainings = 'trainings',
  Schedule = 'schedule',
  Roles = 'roles',
  Goals = 'goals',
  Games = 'games',
  ChildGameRoles = 'child-game-roles',
  Capabilities = 'capabilities',
  ChildRoles = 'child-roles',
  ChildTrainings = 'child-trainings',
  ChildGames = 'child-games',
  ChildTeams = 'child-teams',
  ParentChilds = 'parent-childs',
  ChildClubs = 'child-clubs',
  ChildCapabilities = 'child-capabilities',
  GraduateClubs = 'graduate-clubs',
  ProfessionalCouchs = 'professional-couchs',
  GraduateProfessionals = 'graduate-professionals',
  Payments = 'payments',
  Images = 'images',
}

export {
  ISharedBaseRepository,
  IGetListOptions,
  TWithPouchMeta,
  EEntityName,
  ERepositoryRoutes,
  // EAgentClientRoutes,
};
