import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    changeNotification(state, action) {
      // console.log('action.payload', action.payload)
      return action.payload
    },
    clearNotification(state, action) {
      return ''
    },
  },
})

export const { changeNotification, clearNotification } =
  notificationSlice.actions

export const setNotification = (content, delay) => {
  return (dispatch) => {
    dispatch(changeNotification(content))
    setTimeout(() => {
      dispatch(clearNotification())
    }, delay * 1000)
  }
}

export default notificationSlice.reducer
