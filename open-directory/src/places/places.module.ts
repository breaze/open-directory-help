import { Module } from '@nestjs/common';
import { MediaTypeEnum } from './enums/media-type-enum';
import { PlaceTypeEnum } from './enums/place-type-enum';
import { PlaceController } from './controllers/place.controller';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categories } from './entities/categories';


@Module({
    imports: [
        MediaTypeEnum,
        PlaceTypeEnum,
        PlacesModule,
        TypeOrmModule.forFeature([Categories])
      ],
      controllers: [PlaceController, CategoryController],
      providers: [CategoryService],
})
export class PlacesModule {
    
}
