import * as graphql from "@nestjs/graphql";
import { AgentResolverBase } from "./base/agent.resolver.base";
import { Agent } from "./base/Agent";
import { AgentService } from "./agent.service";

@graphql.Resolver(() => Agent)
export class AgentResolver extends AgentResolverBase {
  constructor(protected readonly service: AgentService) {
    super(service);
  }
}
