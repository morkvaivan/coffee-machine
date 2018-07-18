import {
  handleActions,
} from 'redux-actions';

import {
  TRIGGER_CONNECTION,
} from '../constants/connection.js';

export const defaultState = {
  offline: true,
};

export default handleActions({
  [TRIGGER_CONNECTION]: (state, action) => ({
    ...state,
    offline: !state.offline,
  }),
}, defaultState);
