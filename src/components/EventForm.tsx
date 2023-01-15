import { Input, Form, DatePicker, Button, Row, Select } from 'antd';
import {Dayjs} from 'dayjs';
import React, { useState } from 'react';
import { useAppSelector } from '../hooks/redux';
import { IEvent } from '../models/IEvent';
import { IUser } from '../models/IUser';
import { formatDate } from '../utils/date';
import { rules } from '../utils/rules';

interface EventFormProps {
  quests: IUser[],
  loading: boolean,
  submit: (event: IEvent) => void
}

const EventForm: React.FC<EventFormProps> = (props) => {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    quest: ''
  } as IEvent);
  const {user} = useAppSelector(state => state.auth);

  const selectDate = (date: Dayjs | null) => {
    if(date) {
      setEvent({...event, date: formatDate(date)})
    }
  }

  const submitForm = () => {
    props.submit({...event, author: user.username})
  }

  return (
    <Form
      onFinish={submitForm}
    >
      <Form.Item
        label="Описание события"
        name="description"
        rules={[ rules.required() ]}
      >
        <Input value={event.description} onChange={e => setEvent({...event, description: e.target.value})} />
      </Form.Item>
      <Form.Item
        label="Дата события"
        name="date"
        rules={[ rules.required(), rules.isDateAfter("Нельзя создавать события в прошлом") ]}
      >
        <DatePicker onChange={(date) => selectDate(date)} />
      </Form.Item>
      <Form.Item
        label="Выберите гостя"
        name="quest"
        rules={[ rules.required() ]}
      >
        <Select
          options={props.quests.map(quest => ({ value: quest.username, label: quest.username }) )}
          onChange={(quest: string) => setEvent({...event, quest})}
          loading={props.loading}
        />
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit" >
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}

export default EventForm;