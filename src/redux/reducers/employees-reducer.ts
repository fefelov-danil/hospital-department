import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { EmployeeType } from 'api/types'
import { setAppStatus } from 'redux/reducers/app-reducer'
import { getEmployees } from 'api/api'

export const getAllEmployees = createAsyncThunk(
  'employees/getAllEmployees',
  async (_, { dispatch }) => {
    dispatch(setAppStatus(true))
    const res = await getEmployees()
    dispatch(setAppStatus(false))
    return res as EmployeeType[]
  }
)

const sliceEmployees = createSlice({
  name: 'employees',
  initialState: {} as { employees: EmployeeType[] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllEmployees.fulfilled, (state, action) => {
      state.employees = action.payload
    })
  },
})

export const employeesReducer = sliceEmployees.reducer
