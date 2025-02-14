import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MagazineService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllMagazines() {
    return this.prisma.magazine.findMany();
  }
}
