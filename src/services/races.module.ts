import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { RacesService } from './races.service';
import { AnimauxRacesMiddleware } from 'middlewares/animaux-races.middleware';
@Module({

    providers: [RacesService],
    exports: [RacesService],

})
export class RacesModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer.apply(AnimauxRacesMiddleware).forRoutes('*');
    }
  }
