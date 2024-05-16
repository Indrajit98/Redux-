import { createStore } from "redux";
import { productReducer } from "./reducers/productReducer";
// import { composeWithDevTools } from "@redux-devtools/extension";
import{ composeWithDevTools  } from "@redux-devtools/extension"

// import { composeWithDevTools } from '@redux-devtools/extension';

export const store = createStore(productReducer,composeWithDevTools());


