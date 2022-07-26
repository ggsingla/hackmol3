import { combineReducers } from "redux";

import user from "./auth";
import hackthon from "./hackthon";
import team from "./team";
import userTeam from './userTeam';

const reducers =
combineReducers({  user,hackthon,team,userTeam });

export default reducers;