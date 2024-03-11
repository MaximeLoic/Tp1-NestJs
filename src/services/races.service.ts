import { Injectable } from '@nestjs/common';

@Injectable()
export class RacesService {
    private readonly races: string[] = ['Labrador', 'Persan', 'Siamois'];

    findAll(): string[] {
        return this.races;
    }

    create(races: string): void {
        this.races.push(races);
      }
    
      update(index: number, newRaces: string): void {
        this.races[index] = newRaces;
      }
    
      delete(index: number): void {
        this.races.splice(index, 1);
      }
}