import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gato } from './gatos/gato.entity';
import { GatosModule } from './gatos/gatos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-co1gfp20si5c739ppavg-a.oregon-postgres.render.com',
      port: 5432,
      username: 'banco_teste_q7hk_user',
      password: '123',
      database: 'banco_teste_q7hk',
      entities: [Gato],
      synchronize: true,
      ssl: true
    }),
    GatosModule,    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
