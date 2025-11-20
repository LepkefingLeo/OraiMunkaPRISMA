import { Injectable } from '@nestjs/common';
import { CreateServerDto } from './dto/create-server.dto';
import { UpdateServerDto } from './dto/update-server.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ServersService {
  constructor(private readonly db: PrismaService){}
  
  create(createServerDto: CreateServerDto) {
    return this.db.server.create({
      data: createServerDto
    });
  }

  findAll() {
    return this.db.server.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} server`;
  }

  update(id: number, updateServerDto: UpdateServerDto) {
    return `This action updates a #${id} server`;
  }

  remove(id: number) {
    return `This action removes a #${id} server`;
  }
}
