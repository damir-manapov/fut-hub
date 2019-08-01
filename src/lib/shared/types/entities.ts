import { IBaseSchema } from './base-schema';

// export enum EPassengerType {
//   International = 'international',
//   LocalRussian = 'local_russian',
//   LocalBelarus = 'local_belarus',
// }

// export enum ETicketType {
//   GDS = 'GDS',
//   Sweet = 'Sweet',
// }

// export enum EPaymentMethod {
//   Card = 'card',
//   Cash = 'cash',
//   Split = 'split',
// }

/**
 * Карточка ребенка
 */
export interface IChildren extends IBaseSchema {
  firstName: string;
  lastName: string;
  patronymic: string;
  birthDate: string;
  height: number;
  weight: number;
  averagePhysicalTraining: number;
  medicalNote: boolean;
  parentsPhone: string;
  parentFirstName: string;
  parentPatronymic: string;
  imageId: IImage['id'];
}

/**
 * Карточка тренера
 */
export interface ICouch extends IBaseSchema {
  firstName: string;
  lastName: string;
  patronymic: string;
  age: number;
  experience: number;
  education: string;
  licences: string;
  regalia: string;
  reviews: string;
  studentsAge: number;
  contact: string;
  imageId: IImage['id'];
}

/**
 * Родители
 */
export interface IParent extends IBaseSchema {
  parentName: string;
  parentPatronymic: string;
  phone: string;
}

/**
 * Карточка команды
 */
export interface ITeam extends IBaseSchema {
  couchId: ICouch['id'];
  imageId: IImage['id'];
}

/**
 * Профессиональные клубы
 */
export interface IProfessionalClub extends IBaseSchema {
}

/**
 * Спортивные секции
 */
export interface IClub extends IBaseSchema {
  clubName: string;
  imageId: IImage['id'];
}

/**
 * Занятия
 */
export interface ITraining extends IBaseSchema {
  teamId: ITeam['id'];
  couchId: ICouch['id'];
  date: string;
  canceled: boolean;
}

/**
 * Расписание
 */
export interface ISchedule extends IBaseSchema {
  trainings: number;
  games: number;
  personalTrainings: number;
  getTogether: number;
}

/**
 * Позиции
 */
export interface IRole extends IBaseSchema {
  roleName: string;
}

/**
 * Голы
 */
export interface IGoal extends IBaseSchema {
  childId: IChildren['id'];
  gameId: IGame['id'];
  autoGoal: boolean;
  second: number;
}

/**
 * Матчи
 */
export interface IGame extends IBaseSchema {
  team1Id: ITeam['id'];
  team2Id: ITeam['id'];
}

/**
 * В какой игре на какой позиции играл ребенок
 */
export interface IChildGameRole extends IBaseSchema {
  childGameId: IChildGame['id'];
  roleId: IRole['id'];  
}

/**
 * Ключевые компетенции
 */
export interface ICapability extends IBaseSchema {
}

/**
 * Связь позиции и ребенка
 */
export interface IChildRole extends IBaseSchema {
  childId: IChildren['id'];
  roleId: IRole['id'];
}

/**
 * Связь ребенка и занятия
 */
export interface IChildTraining extends IBaseSchema {
  childId: IChildren['id'];
  trainingId: ITraining['id'];
  attended: boolean;
}

/**
 * Связь ребенка и матча
 */
export interface IChildGame extends IBaseSchema {
  childId: IChildren['id'];
  gameId: IGame['id'];
  teamId: ITeam['id'];
}

/**
 * Связь ребенка и команды
 */
export interface IChildTeam extends IBaseSchema {
  childId: IChildren['id'];
  teamId: ITeam['id'];
}

/**
 * Связь ребенка и родителя
 */
export interface IParentChild extends IBaseSchema {
  childId: IChildren['id'];
  parentId: IParent['id'];
}

/**
 * Связь секции и ребенка
 */
export interface IChildClub extends IBaseSchema {
  childId: IChildren['id'];
  clubId: IClub['id'];
  // у дат вроде string должно быть. Пишу number в соотвествии с таблицей:
  startDate: number;
  finishDate: number;
}

/**
 * Связь ключевых компетенций и ребенка
 */
export interface IChildCapacilities extends IBaseSchema {
  childId: IChildren['id'];
  capabilityId: ICapability['id'];
}

/**
 * Связь выпускников и клубов
 */
export interface IGraduateClub extends IBaseSchema {
  graduateId: IProfessionalCouch['id'];
  clubId: IProfessionalClub['id'];
}

/**
 * Связь выпускника-про с тренерами
 */
export interface IProfessionalCouch extends IBaseSchema {
  graduateId: IGraduateProfessional['id'];
  couchId: ICouch['id'];
}

/**
 * Выпускники, подписавшие про контракт
 */
export interface IGraduateProfessional extends IBaseSchema {
  firstName: string;
  lastName: string;
  patronymic: string;
}

/**
 * Онлайн платежи
 */
export interface IPayment extends IBaseSchema {
  monthPass: number;
  quarterPass: number;
  annualPass: number;
}

/**
 * Изображения
 */
export interface IImage extends IBaseSchema {
  url: string;
}