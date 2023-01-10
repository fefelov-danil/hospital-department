import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { WorkLogType } from 'api/types'
import { setAppStatus } from 'redux/reducers/app-reducer'
import { getWorklog } from 'api/api'

export const getWorkLog = createAsyncThunk('workLog/getWorkLog', async (_, { dispatch }) => {
  dispatch(setAppStatus(true))
  const res = await getWorklog()
  dispatch(setAppStatus(false))
  return res as WorkLogType[]
})

const sliceWorkLog = createSlice({
  name: 'workLog',
  initialState: {} as { workLog: WorkLogType[] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWorkLog.fulfilled, (state, action) => {
      state.workLog = action.payload
    })
  },
})

export const workLogReducer = sliceWorkLog.reducer
