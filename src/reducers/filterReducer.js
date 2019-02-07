const initState = '';

const filterReducer = (state = initState, action) => {
  if(action.type === 'FIND_USER') {
      return  action.word;
    }
  return state;
};

export default filterReducer;