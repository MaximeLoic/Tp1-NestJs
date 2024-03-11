
import { Injectable } from '@nestjs/common';

@Injectable()
export class AnimauxService {

    
  private readonly animaux: string[] = ['Lion', 'Chat', 'Lapin'];

  findAll(): string[] {
    return this.animaux;
  }

  create(animaux: string): void {
    this.animaux.push(animaux);
  }

  update(index: number, newAnimaux: string): void {
    this.animaux[index] = newAnimaux;
  }

  delete(index: number): void {
    this.animaux.splice(index, 1);
  }
}
