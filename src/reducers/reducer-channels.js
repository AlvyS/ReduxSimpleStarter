// const initialChannels = ['truztout', 'biwwie', 'nl_krippi']

const initialState = [
  {
    id: '1',
    name: 'truztout',
    logo: 'https://static.giantbomb.com/uploads/scale_small/0/3948/969765-chipmunk4.jpg',
    game: 'Overwatch',
    followers: 0,
  },
  {
    id: '2',
    name:'biwwie',
    logo: 'https://static.giantbomb.com/uploads/scale_small/0/3948/969765-chipmunk4.jpg',
    game: 'League of Suffering',
    followers:'100'
  },
  {
    id: '3',
    name:'Bentos',
    logo: 'https://static.giantbomb.com/uploads/scale_small/0/3948/969765-chipmunk4.jpg',
    game: 'China',
    followers:'2'
  }
]


const channelsReducer = (state= initialState, action) => {
  switch (action.type) {

    case 'FETCH_CHANNEL':
      state = {...state, fetching: true}
      break;
    
      default:
      return state;
  }
}

export default channelsReducer;