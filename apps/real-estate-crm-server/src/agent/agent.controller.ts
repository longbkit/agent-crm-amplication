import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AgentService } from "./agent.service";
import { AgentControllerBase } from "./base/agent.controller.base";

@swagger.ApiTags("agents")
@common.Controller("agents")
export class AgentController extends AgentControllerBase {
  constructor(protected readonly service: AgentService) {
    super(service);
  }
}
