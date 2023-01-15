import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IEvent } from '../../../models/IEvent';
import { IUser } from '../../../models/IUser';
import { EventState } from './types';

const initialState: EventState = {
  quests: [] as IUser[],
  events: [] as IEvent[],
  isLoading: false,
  error: null
}

const eventSlide = createSlice({
  name: 'event',
  initialState,
  reducers: {
    fetchingQuests(state) {
      state.quests = [];
      state.isLoading = true;
      state.error = null;
    },
    fetchingEvents(state) {
      state.events = [];
      state.isLoading = true;
      state.error = null;
    },
    setQuests(state, action: PayloadAction<IUser[]>) {
      state.quests = action.payload;
      state.isLoading = false;
    },
    setEvents(state, action: PayloadAction<IEvent[]>) {
      state.events = action.payload;
    },
    setEventError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { reducer, actions } = eventSlide;

export const eventActions = actions;

export const eventReducer = reducer;