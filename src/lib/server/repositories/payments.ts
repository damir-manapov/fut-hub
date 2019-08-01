import { BaseServerRepository } from '../types/base-repository';
import { IPayment, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const paymentsDB = createDB<IPayment>(EEntityName.Payments);

export class PaymentsRepository extends BaseServerRepository<IPayment> {
    protected db = paymentsDB;
    public entityName = EEntityName.Payments;
}