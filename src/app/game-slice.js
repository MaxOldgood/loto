import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstField: [],
  secondField: [],
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    toggleFirstFieldNumber(state, action) {
      state.firstField.find((number) => number === action.payload)
        ? (state.firstField = state.firstField.filter((number) => number !== action.payload))
        : state.firstField.push(action.payload)
    },
    toggleSecondFieldNumber(state, action) {
      state.secondField.find((number) => number === action.payload)
        ? (state.secondField = state.secondField.filter((number) => number !== action.payload))
        : state.secondField.push(action.payload)
    },
    resetGame() {
      return initialState
    },
    selectRandomNumbers(state, action) {
      state.firstField = action.payload.firstField
      state.secondField = action.payload.secondField
    },
  },
})

export const selectFirstFieldNumbers = (state) => state.game.firstField
export const selectSecondFieldNumbers = (state) => state.game.secondField

export const { toggleFirstFieldNumber, toggleSecondFieldNumber, resetGame, selectRandomNumbers } = gameSlice.actions
export default gameSlice.reducer
