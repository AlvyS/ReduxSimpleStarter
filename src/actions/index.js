// Action Creator, 'Broadcasts'. Defines what type to listen for, sends payload/data.
export const selectChannel = (channel) => {
  console.log(`Clicked on ${channel.channelName}`)
  return {
    type: 'CHANNEL_SELECTED',
    payload: channel
  }
}

export function fetchChannel() {
  console.log(`Clicked on fetchDATA`)
  return {
    type: 'FETCH_CHANNEL',
    payload: {
      id: '1',
      name: "Truztout",
      followers: "101"
    }
  }
}