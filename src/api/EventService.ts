import { IEvent } from "../models/IEvent";

export default class EventService {
  static async getEventsLC(): Promise<IEvent[]> {
    /* Хранение эвентов в local storage */
    const events = await localStorage.getItem('events') || '[]';
    const json = JSON.parse(events) as IEvent[];

    return json;
  }
}