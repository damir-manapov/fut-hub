import {
  // ETicketType,
  // IFootbalClient,
  // IFareBase,
  // IFoundTicket,
  // ISearchTicketsOptions,
} from '../../../shared/types';

// import {
//   calculateTicketPrice,
//   filterAirportsByCityId,
//   getAirports, getById,
//   getFlights,
//   getIds,
//   getSchedules,
//   getCommission,
//   getFareBases,
// } from './utils';

// import * as dayjs from 'dayjs';

import { ChildrensRepository } from '../../repositories/childrens';
import { CouchesRepository } from '../../repositories/couches';
import { ParentsRepository } from '../../repositories/parents';
import { TeamsRepository } from '../../repositories/teams';
import { ProfessionalClubsRepository } from '../../repositories/professional-clubs';
import { ClubsRepository } from '../../repositories/clubs';
import { TrainingsRepository } from '../../repositories/trainings';
import { ScheduleRepository } from '../../repositories/schedule';
import { RolesRepository } from '../../repositories/roles';
import { GoalsRepository } from '../../repositories/goals';
import { GamesRepository } from '../../repositories/games';
import { ChildrenGameRolesRepository } from '../../repositories/child-game-roles';
import { CapabilitiesRepository } from '../../repositories/capabilities';
import { ChildRolesRepository } from '../../repositories/child-roles';
import { ChildTrainingsRepository } from '../../repositories/child-trainings';
import { ChildGamesRepository } from '../../repositories/child-games';
import { ChildTeamsRepository } from '../../repositories/child-teams';
import { ParentChildsRepository } from '../../repositories/parent-childs';
import { ChildClubsRepository } from '../../repositories/child-clubs';
import { ChildCapabilitiesRepository } from '../../repositories/child-capabilities';
import { GraduateClubsRepository } from '../../repositories/graduate-clubs';
import { ProfessionalCouchRepository } from '../../repositories/professional-couchs';
import { GraduateProfessionalsRepository } from '../../repositories/graduate-professionals';
import { PaymentsRepository } from '../../repositories/payments';
import { ImagesRepository } from '../../repositories/images';

export class FootballClient {
  public childrens = new ChildrensRepository();
  public couches = new CouchesRepository();
  public parents = new ParentsRepository();
  public teams = new TeamsRepository();
  public professionalClubs = new ProfessionalClubsRepository();
  public clubs = new ClubsRepository();
  public trainings = new TrainingsRepository();
  public schedule = new ScheduleRepository();
  public roles = new RolesRepository();
  public goals = new GoalsRepository();
  public games = new GamesRepository();
  public childGameRoles = new ChildrenGameRolesRepository();
  public capabilities = new CapabilitiesRepository();
  public childRoles = new ChildRolesRepository();
  public childTrainings = new ChildTrainingsRepository();
  public childGames = new ChildGamesRepository();
  public childTeams = new ChildTeamsRepository();
  public parentChilds = new ParentChildsRepository();
  public childClubs = new ChildClubsRepository();
  public childCapabilities = new ChildCapabilitiesRepository();
  public graduateClubs = new GraduateClubsRepository();
  public professionalCouchs = new ProfessionalCouchRepository();
  public graduateProfessionals = new GraduateProfessionalsRepository();
  public payments = new PaymentsRepository();
  public images = new ImagesRepository();

  // /**
  //  * Производит поиск билетов.
  //  * @param options
  //  */
  // public searchTickets = async (
  //   options: ISearchTicketsOptions,
  // ): Promise<IFoundTicket[]> => {
  //   let { limit } = options;
  //   const {
  //     departureDate,
  //     departureCityId,
  //     destinationCityId,
  //   } = options;

  //   if (typeof limit !== 'number' || limit <= 0) {
  //     limit = 20;
  //   }

  //   // В первую очередь получаем список полетов, которые выполняются в эту дату
  //   // чтобы минимизировать поисковую нагрузкую
  //   const schedule = await getSchedules(this.schedule, departureDate);

  //   // Если такие полеты не найдены, нет смысла осуществлять дальнейшие
  //   // манипуляции.
  //   if (schedule.length === 0) {
  //     return [];
  //   }
  //   let flightsIds = schedule.map(item => item.flightId);

  //   // Получаем список аэропортов для городов отправления и назначения
  //   const airports = await getAirports(
  //     this.airports,
  //     [departureCityId, destinationCityId],
  //   );
  //   const departureAirportsIds = getIds(
  //     filterAirportsByCityId(airports, departureCityId),
  //   );
  //   const destinationAirportsIds = getIds(
  //     filterAirportsByCityId(airports, destinationCityId),
  //   );

  //   // Сюда попадают полеты, отфильтрованные по дате вылета, а так же городам
  //   const flights = await getFlights(
  //     this.flights,
  //     flightsIds,
  //     departureAirportsIds,
  //     destinationAirportsIds,
  //   );
  //   // Обновляем массив полетов
  //   flightsIds = getIds(flights);

  //   const [
  //     agenciesCommissions,
  //     airlines,
  //     classes,
  //     sweetcaseCommissions,
  //   ] = await Promise.all([
  //     this.agenciesCommissions.getList(),
  //     this.airlines.getList(),
  //     this.classes.getList(),
  //     this.sweetcaseCommissions.getList(),
  //   ]);

  //   // Находим комиссии агенств и Sweetcase.
  //   const agencyCommission = getCommission(agenciesCommissions);
  //   const sweetCommission = getCommission(sweetcaseCommissions);
  //   const formattedAgencyCommission = (1 + agencyCommission.percent / 100);
  //   const formattedSweetCommission = (1 + sweetCommission.percent / 100);

  //   // Находим подходящие базисы
  //   const fareBases = await getFareBases(this.fareBases, flightsIds);

  //   // Формируем список билетов исходя из базисов
  //   const tickets = flights.reduce<IFoundTicket[]>((accFlights, flight) => {
  //     // Необходимо найти для каждого полета все его базисы. Должно быть так
  //     // что для каждого полета должно быть не более 1 базиса на 1 класс полета.
  //     // Каждый базис должен быть самым дешевым для комбинации полет - класс.
  //     const flightFareBases = fareBases.reduce<IFareBase[]>(
  //       (accFlightFareBases, fareBasis) => {
  //         // Проверяем, соответствует ли базис этому полету
  //         if (fareBasis.flightId === flight.id) {
  //           // Находим, был ли раньше этот базис добавлен в аккумулятор
  //           const foundFareBasis = accFlightFareBases.find(item => {
  //             return item.classId === fareBasis.classId;
  //           });

  //           // Если он был добавлен и его цена больше текущего, то удаляем
  //           // его из очереди и добавляем текущий.
  //           if (foundFareBasis) {
  //             if (foundFareBasis.price > fareBasis.price) {
  //               accFlightFareBases.splice(
  //                 accFlightFareBases.indexOf(foundFareBasis),
  //                 1,
  //                 fareBasis,
  //               );
  //             }
  //           } else {
  //             // Если он найден не был, то просто добавляем.
  //             accFlightFareBases.push(fareBasis);
  //           }
  //         }

  //         return accFlightFareBases;
  //       },
  //       [],
  //     );
  //     const departureAirport = airports
  //       .find(getById(flight.departureAirportId));
  //     const destinationAirport = airports
  //       .find(getById(flight.destinationAirportId));
  //     const airline = airlines.find(getById(flight.airlineId));
  //     const flightSchedule = schedule.find(item => item.flightId === flight.id);

  //     // После того, как все базисы для текущего полета найдены, необходимо
  //     // для каждого из них сгенерировать запись, будто бы один базис - один
  //     // полет. Ставим пометку о том, что этот полет создан нашим проектом.
  //     const sweetCaseFlights = flightFareBases.map<IFoundTicket>(fb => {
  //       const price = calculateTicketPrice(
  //         fb.price,
  //         formattedAgencyCommission,
  //         formattedSweetCommission,
  //       );

  //       return {
  //         price,
  //         oldPrice: price,
  //         departureAirport,
  //         departureDate: flightSchedule.departureDate,
  //         destinationAirport,
  //         destinationDate: dayjs(flightSchedule.departureDate)
  //           .add(flight.duration, 'minute')
  //           .toDate()
  //           .toUTCString(),
  //         type: ETicketType.Sweet,
  //         class: classes.find(getById(fb.classId)),
  //         fareBase: fb,
  //         airline,
  //         duration: flight.duration,
  //       };
  //     });

  //     // Расчитываем билеты НЕ из нашего сервиса. Добавляем к ценникам по 10%
  //     const duplicateFlights = sweetCaseFlights.map(item => ({
  //       ...item,
  //       type: ETicketType.GDS,
  //       price: Math.floor(item.price * 1.1),
  //       oldPrice: Math.floor(item.oldPrice * 1.1),
  //     }));

  //     accFlights.push(
  //       ...sweetCaseFlights,
  //       ...duplicateFlights,
  //     );

  //     return accFlights;
  //   }, []);

  //   // Сортируем билеты по возрастанию цены.
  //   return tickets.sort((a, b) => a.price - b.price).slice(0, limit);
  // };

  // /**
  //  * Осуществляет покупку билета.
  //  * @param buyInformation
  //  */
  // public buyTicket = async (
  //   buyInformation: ITicketBuyInformation,
  // ): Promise<boolean> => {
  //
  // };
  //
  // /**
  //  * Возвращает информацию о проданных билетах.
  //  */
  // public getStatistics = async (): Promise<IGetStatisticsResult> => {
  //   return {} as IGetStatisticsResult;
  // };
}
