import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Reducers/rootreducer'
export default configureStore({
  reducer: rootReducer
})