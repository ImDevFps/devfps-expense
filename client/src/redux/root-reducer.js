import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import goalsReducer from "./goals/goals.reducer";
import startReducer from "./start/start.reducer";
import transactionsReducer from "./transactions/transactions.reducer";

const persistConfig = {
  key: "root",
  storage,
  timeout: null,
  whitelist: ["start", "transactions", "goals"],
};

const rootReducer = combineReducers({
  start: startReducer,
  transactions: transactionsReducer,
  goals: goalsReducer,
});

export default persistReducer(persistConfig, rootReducer);
