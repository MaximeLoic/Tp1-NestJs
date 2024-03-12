import { Module, NestModule, MiddlewareConsumer, NestMiddleware } from '@nestjs/common';
import { AnimauxService } from './animaux.services';
import { AnimauxRacesMiddleware } from 'middlewares/animaux-races.middleware';

@Module({
    providers: [AnimauxService],
    exports: [AnimauxService],
})
export class AnimauxModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer.apply(AnimauxRacesMiddleware).forRoutes('*');
    }
  }



