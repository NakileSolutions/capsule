import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { GoogleProfileType } from '@capsule/contracts';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(data: { pseudo: string; email: string; password: string }) {
    const existing = await this.prisma.user.findUnique({
      where: { email: data.email },
    });
    if (existing) {
      throw new BadRequestException('User already exists');
    }
    const hashedPassword = await bcrypt.hash(data.password, 12);
    const user = await this.prisma.user.create({
      data: {
        pseudo: data.pseudo,
        email: data.email,
        password: hashedPassword,
      },
    });
    return user;
  }

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user && user.password) {
      const valid = await bcrypt.compare(password, user.password);
      if (valid) {
        return user;
      }
    }
    return null;
  }

  async validateGoogleUser(profile: GoogleProfileType) {
    const googleId = profile.id;
    let user = await this.prisma.user.findUnique({ where: { googleId } });
    if (!user) {
      user = await this.prisma.user.create({
        data: {
          pseudo: profile.displayName,
          email: profile.emails[0].value,
          googleId: googleId,
          password: null,
        },
      });
    }
    return user;
  }
}
