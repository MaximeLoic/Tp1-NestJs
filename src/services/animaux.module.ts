import { Module } from '@nestjs/common';
import { AnimauxService } from './animaux.services';
 

@Module({
    providers: [AnimauxService],
    exports: [AnimauxService],
})
export class AnimauxModule {}



