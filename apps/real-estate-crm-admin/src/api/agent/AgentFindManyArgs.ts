import { AgentWhereInput } from "./AgentWhereInput";
import { AgentOrderByInput } from "./AgentOrderByInput";

export type AgentFindManyArgs = {
  where?: AgentWhereInput;
  orderBy?: Array<AgentOrderByInput>;
  skip?: number;
  take?: number;
};
