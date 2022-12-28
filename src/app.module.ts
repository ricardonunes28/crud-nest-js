import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://ricardo:spMaOTnX3WL8lZfb@cluster0.csbmfut.mongodb.net/test',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
