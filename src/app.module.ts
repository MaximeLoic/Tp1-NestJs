import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimauxModule } from './services/animaux.module';
import { RacesModule } from './services/Races.module';


@Module({
  imports: [AnimauxModule, RacesModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
