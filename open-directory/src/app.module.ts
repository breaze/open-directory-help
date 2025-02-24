import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacesModule } from './places/places.module';
import { Categories } from './places/entities/categories';
import { Media } from './places/entities/media';
import { Places } from './places/entities/places';
import { Tags } from './places/entities/tags';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT || '3306'),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: 'test',
      entities: [Categories, Media, Places, Tags],
      synchronize: true,
    }),
    PlacesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
