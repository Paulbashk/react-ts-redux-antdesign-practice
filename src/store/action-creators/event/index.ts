import { AppDispatch } from "../..";
import { eventActions } from "../../reducers/event";
import UserService from "../../../api/UserService";
import { IEvent } from "../../../models/IEvent";
import EventService from "../../../api/EventService";

export const {
  fetchingQuests,
  fetchingEvents,
  setQuests,
  setEvents,
  setEventError
} = eventActions;

export const fetchQuests = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchingQuests());
    const quests = await UserService.getUsers();
    dispatch(setQuests(quests.data));

  } catch(error: any) {
    dispatch(setEventError(error))
  }
}

export const createEvent = (event: IEvent) => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchingEvents());
    const json = await EventService.getEventsLC();
    json.push(event);
    dispatch(setEvents(json));

    localStorage.setItem('events', JSON.stringify(json));
  } catch(error: any) {
    console.log(error)
  }
}

export const fetchEvents = (username: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(fetchingEvents());
    const json = await EventService.getEventsLC();
    /* Получение событий, если указанный пользователь (по задумке - текущий, авторизованный) их автор или пользователь их гость */
    const currentUserEvents = json.filter(ev => ev.author === username || ev.quest === username);
    dispatch(setEvents(currentUserEvents));
  } catch(error: any) {
    console.log(error);
  }
}