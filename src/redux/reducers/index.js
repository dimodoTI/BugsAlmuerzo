import {
  combineReducers
} from "redux";
import {
  reducer as operadoraReducer
} from "./operadora"
import {
  reducer as uiReducer
} from "./ui"
import {
  reducer as tarjetachipRecargaReducer
} from "./tarjetaChipRecarga"
import {
  reducer as viandaReducer
} from "./vianda"
import {
  reducer as posNetReducer
} from "./posNet"
import {
  reducer as tarjetaChipReducer
} from "./tarjetaChip"
export const reducers = combineReducers({
  operadora: operadoraReducer,
  ui: uiReducer,
  tarjetachipRecarga: tarjetachipRecargaReducer,
  vianda: viandaReducer,
  posNet: posNetReducer,
  tarjetaChip: tarjetaChipReducer
});