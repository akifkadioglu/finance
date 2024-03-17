import type { User } from "./user";

export interface WorkSchema {
  user: User;
  startTime: Date;
  endTime: Date;
  money: number;
}
