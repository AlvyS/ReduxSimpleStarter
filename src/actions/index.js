// Action Creator, 'Broadcaster'. Defines what type to listen for, sends payload/data.

export const addStreamer = (data) => {
  return {
    type: 'ADD_STREAMER',
    payload: {data}
  }
}