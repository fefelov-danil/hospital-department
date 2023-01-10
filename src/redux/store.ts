import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import thunk from 'redux-thunk'
import { appReducer } from 'redux/reducers/app-reducer'
import { employeesReducer } from 'redux/reducers/employees-reducer'
import { workLogReducer } from 'redux/reducers/workLog-reducer'

const rootReducer = combineReducers({
  app: appReducer,
  employeesList: employeesReducer,
  workLogList: workLogReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
