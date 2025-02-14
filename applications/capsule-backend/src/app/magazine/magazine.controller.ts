import { Controller } from "@nestjs/common";
import { TsRestHandler } from "@ts-rest/nest";
import { magazineContract } from "@capsule/contracts";
import { MagazineService } from "./magazine.service";

@Controller()
export class MagazineController {
  constructor(
    private readonly magazineService: MagazineService,
  ) {}

  @TsRestHandler(magazineContract.getMagazines)
  async getMagazines() {
    const magazines = await this.magazineService.getAllMagazines();
    return { status: 200, body : { magazines }};
  }
}
