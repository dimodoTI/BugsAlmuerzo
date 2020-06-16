import {
  applyMiddleware,
  createStore,
  compose
} from "redux";
import {
  logger
} from "../../node_modules/redux-logger";
import {
  reducers
} from "./reducers/index";
import {
  middleware as servidorBugsMiddleware
} from "./middleware/servidorBugs"
import {
  middleware as servidorWSMiddleware
} from "./middleware/operadora"
import {
  middleware as uiMiddleware
} from "./middleware/ui"

import {
  middleware as posNetMiddleware
} from "./middleware/posNet"
import {
  middleware as tarjetaChipMiddleware
} from "./middleware/tarjetaChip"
import {
  middleware as impresoramiddleware
} from "./middleware/impresora"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let mdw = [
  ...servidorBugsMiddleware, ...servidorWSMiddleware, ...uiMiddleware, ...posNetMiddleware, ...tarjetaChipMiddleware, ...impresoramiddleware
]

if (process.env.NODE_ENV !== 'production') {
  mdw = [...mdw, logger]
}
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...mdw))
);