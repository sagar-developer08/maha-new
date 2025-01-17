import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
// # Reducers
import cartReducer from "src/store/cart";
import wishlistReducer from "src/store/wishlist";
import bookingReducer from "src/store/booking";
import authReducer from "src/store/auth";
//
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["booking"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  booking: bookingReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export const persistor = persistStore(store);
