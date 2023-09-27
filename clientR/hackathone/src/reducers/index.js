import { combineReducers } from "redux";

import dashboard from './dashboard.js';
import orders from './orders.js';
import appointment from './appointment.js';
import user from './user.js';
const reducer = combineReducers({
    orders:orders,
    dashboard:dashboard,
    appointment:appointment,
    user:user,
});
export default reducer;