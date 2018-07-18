import {
  createAction,
} from 'redux-actions';

import {
  TRIGGER_CONNECTION,
} from '../constants/connection.js';

export const triggerConnecting = createAction(TRIGGER_CONNECTION);
