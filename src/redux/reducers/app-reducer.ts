import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const sliceApp = createSlice({
  name: 'app',
  initialState: {
    appLoading: true,
  },
  reducers: {
    setAppStatus(state, action: PayloadAction<boolean>) {
      state.appLoading = action.payload
    },
  },
})

export const appReducer = sliceApp.reducer
export const { setAppStatus } = sliceApp.actions
