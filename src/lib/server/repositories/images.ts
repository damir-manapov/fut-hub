import { BaseServerRepository } from '../types/base-repository';
import { IImage, EEntityName } from '../../shared/types';
import { createDB } from '../utils/create-db';

export const imagesDB = createDB<IImage>(EEntityName.Images);

export class ImagesRepository extends BaseServerRepository<IImage> {
    protected db = imagesDB;
    public entityName = EEntityName.Images;
}