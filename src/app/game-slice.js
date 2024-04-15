import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstField: [],
  secondField: [],
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    toggleNumber(state, action) {
      const field = action.payload.field === 1 ? 'firstField' : 'secondField'
      state[field].find((number) => number === action.payload.number)
        ? (state[field] = state[field].filter((number) => number !== action.payload.number))
        : state[field].push(action.payload.number)
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

export const { toggleNumber, resetGame, selectRandomNumbers } = gameSlice.actions
export default gameSlice.reducer
