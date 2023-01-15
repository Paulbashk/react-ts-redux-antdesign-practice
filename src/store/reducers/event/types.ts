import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";

export interface EventState {
  quests: IUser[],
  events: IEvent[],
  isLoading: boolean,
  error: string | null
}