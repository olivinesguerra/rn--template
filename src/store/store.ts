import ReduxThunk from "redux-thunk";
import { combineReducers } from "redux";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import { configureStore } from "@reduxjs/toolkit";
import { chatReducer } from "./reducer/contact";

const rootReducer = combineReducers({
    chatReducer,
});


const client = axios.create({
    baseURL: "",
    responseType: "json",
    timeout: 1000000,
});

let logger = (getState: Function) => {
    return (next: any) => (action: any) => {
      // console.log('< ####################### >');
      // console.log('will dispatch action');
      // console.log(action);
  
      const returnValue = next(action);
      // console.log('< ======================= >');
      // console.log('state after dispatch');
      // console.log(getState());`
  
      return returnValue;
    };
};

const store = configureStore({
    reducer: rootReducer,
    middleware: [logger, ReduxThunk, axiosMiddleware(client)],
});

export default store;