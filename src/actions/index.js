// Action Creator, define what type to listen for, returns payload/data
export const selectChannel = (channel) => {
  console.log(`Clicked on ${channel.channelName}`)
  return {
    type: 'CHANNEL_SELECTED',
    payload: channel
  }
}