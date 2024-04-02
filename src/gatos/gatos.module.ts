import { Module } from '@nestjs/common';
import { GatosController } from './gatos.controller';
import { GatosService } from './gatos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gato } from './gato.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Gato])],
    controllers: [GatosController],
    providers: [GatosService]
})
export class GatosModule {}
