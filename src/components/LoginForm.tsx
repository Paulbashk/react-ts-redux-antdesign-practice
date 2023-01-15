import { Button, Form, Input } from 'antd';
import React, {useState} from 'react';
import { useAppSelector } from '../hooks/redux';
import useAction from '../hooks/useAction';
import { rules } from '../utils/rules';

const LoginForm: React.FC = () => {
  const { userLogin } = useAction();
  const { error, isLoading } = useAppSelector(state => state.auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    userLogin(username, password);
  }

  return (
    <Form
      onFinish={submit}
    >
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[ rules.required('Пожалуйста введите имя пользователя') ]}
      >
        <Input value={username} onChange={event => setUsername(event.target.value)} />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[ rules.required('Пожалуйста введите пароль') ]}
      >
        <Input value={password} onChange={event => setPassword(event.target.value)} type={"password"} />
      </Form.Item>
      {error && 
        <div style={{ color: 'red' }}>
          {error}
        </div>
      }
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Вход
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm;