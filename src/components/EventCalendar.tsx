import { Calendar } from 'antd';
import React from 'react';
import {Dayjs} from 'dayjs';
import { IEvent } from '../models/IEvent';
import { formatDate } from '../utils/date';

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: React.FC<EventCalendarProps> = (props) => {
  const dateCellRender = (value: Dayjs) => {
    const formatedDate = formatDate(value);
    const currentDayEvents = props.events.filter(ev => ev.date === formatedDate);

    return (
      <div>
        {currentDayEvents.map((ev, index) =>
          <div key={index}>{ev.description}</div>
        )}
      </div>
    );
  };

  return (
    <Calendar 
      dateCellRender={dateCellRender}
    />
  );
}

export default EventCalendar;