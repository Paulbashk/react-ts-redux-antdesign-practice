import * as authActionCreators from './auth';
import * as eventActionCreators from './event';

const actionCreators = {
  ...authActionCreators,
  ...eventActionCreators
}

export default actionCreators;