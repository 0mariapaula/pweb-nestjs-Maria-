import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatosController } from './gatos/gatos.controller';
import { GatosService } from './gatos/gatos.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-co1gfp20si5c739ppavg-a.oregon-postgres.render.com',
      port: 5432,
      username: 'banco_teste_q7hk_user',
      password: '123',
      database: 'banco_teste_q7hk',
      entities: [],
      synchronize: true,
      ssl: true
    }),    
  ],
  controllers: [AppController, GatosController],
  providers: [AppService, GatosService],
})
export class AppModule {}
