import { combineReducers } from "redux";
import themeMode from "./themeMode";

const rootReducer = combineReducers({
    themeMode
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;