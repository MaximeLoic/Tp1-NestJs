import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { AnimauxService } from './services/animaux.services';
import { RacesService } from './services/races.service';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}


// Controller statique
@Controller('animaux')
export class AnimauxController {
  constructor(private readonly animauxService: AnimauxService) {}

  @Get()
  findAll(): string[] {
    return this.animauxService.findAll();
  }

  @Post()
  create(@Body() animal: string): void {
    this.animauxService.create(animal);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newAnimal: string): void {
    const index = parseInt(id);
    this.animauxService.update(index, newAnimal);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    const index = parseInt(id);
    this.animauxService.delete(index);
  }

}
  //controler dynamique

  @Controller('races')
export class RacesController {
    constructor(private readonly racesService: RacesService) {}

    @Get()
    findAll(): string[] {
        return this.racesService.findAll();
    }

    @Post()
    create(@Body() raceData: any): void {
        this.racesService.create(raceData);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() raceData: any): void {
         this.racesService.update(id, raceData);
    }

    @Delete(':id')
    delete(@Param('id') id: string): void {
       this.racesService.delete(id);
    }



}


