import { Button, Layout, Row, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useAppSelector } from '../hooks/redux';
import useAction from '../hooks/useAction';
import { IEvent } from '../models/IEvent';

const Event: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { fetchQuests, createEvent, fetchEvents } = useAction();
  const { isLoading, quests, events } = useAppSelector(state => state.event);
  const { user } = useAppSelector(state => state.auth);

  useEffect(() => {
    fetchQuests();
  }, []);

  const addNewEvent = (event: IEvent) => {
    setModalVisible(false);
    createEvent(event);
    fetchEvents(user.username);
  }

  return (
    <Layout>
      <Row justify="center">
        <EventCalendar events={events} />
        <Button onClick={event => setModalVisible(true)}>Добавить событие</Button>
      </Row>
      <Modal 
        title="Добавить событие"
        open={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <EventForm 
          quests={quests} 
          loading={isLoading} 
          submit={event => addNewEvent(event)}
        />
      </Modal>
    </Layout>
  )
}

export default Event;