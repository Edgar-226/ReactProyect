import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    reset: (state) => {
      state.value = 0
    },
  },
})

// Exportar las acciones
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

// Exportar el reducer
export default counterSlice.reducer

// Selector
export const selectCount = (state) => state.counter.value