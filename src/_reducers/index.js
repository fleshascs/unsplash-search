import { combineReducers } from "redux";
import unsplashImages, { searchHistory } from "./unsplashImages.reducer";

const rootReducer = combineReducers({
  unsplashImages,
  searchHistory
});

export default rootReducer;
