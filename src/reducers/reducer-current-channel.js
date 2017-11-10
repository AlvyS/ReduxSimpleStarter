// Listens for action, set initial state to null to for first loadup, then check null state in container"
export default function (state=null, action) {
  switch(action.type) {
    case 'CHANNEL_SELECTED':
      return action.payload;
      break;
  }
  return state;
}