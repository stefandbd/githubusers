export const LOAD = 'user/LOAD';
export const LOAD_SUCCESS = 'user/LOAD_SUCCESS';
export const LOAD_FAIL = 'user/LOAD_FAIL';

const initialState = {
  loaded: false,
  data: null,
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
  console.log('---', action.payload.data);
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload.data,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.payload
      };
    default:
      return state;
  }
};



