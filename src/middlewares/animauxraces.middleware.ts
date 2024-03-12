import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AnimauxRacesMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    
    if (req.path.includes('animals')) {
      console.log('');
     
    } else if (req.path.includes('races')) {
      console.log('');
     
    }
    next();
  }
}
