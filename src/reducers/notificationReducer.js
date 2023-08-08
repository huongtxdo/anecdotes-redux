import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    changeNotification(state, action) {
      // console.log('action.payload', action.payload)
      return action.payload
    },
    removeNotification(state, action) {
      return action.payload
    },
  },
})

export const { changeNotification, removeNotification } =
  notificationSlice.actions
export default notificationSlice.reducer
