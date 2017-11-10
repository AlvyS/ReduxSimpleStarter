// Action Creator, 'Broadcasts'. Defines what type to listen for, sends payload/data.
export const selectChannel = (channel) => {
  console.log(`Clicked on ${channel.channelName}`)
  return {
    type: 'CHANNEL_SELECTED',
    payload: channel
  }
}