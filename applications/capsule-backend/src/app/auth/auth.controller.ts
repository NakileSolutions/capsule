import { Controller } from '@nestjs/common';
import { TsRestHandler } from '@ts-rest/nest';
import { authContract, ResponseType } from '@capsule/contracts';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @TsRestHandler(authContract.register)
  async register(
    email: string,
    password: string,
    pseudo: string
  ): Promise<ResponseType> {
    const user = await this.authService.register({ pseudo, email, password });
    return { status: 200, body: { user } };
  }

  @TsRestHandler(authContract.login)
  async login(email: string, password: string): Promise<ResponseType> {
    const user = await this.authService.validateUser(email, password);
    return { status: 200, body: { user } };
  }
}
