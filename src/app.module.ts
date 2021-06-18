import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotasModule } from './notas/notas.module';

@Module({
  imports: [NotasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
