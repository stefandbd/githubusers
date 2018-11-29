export const LOAD = 'LOAD';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAIL = 'LOAD_FAIL';

const initialState = {
  loaded: false,
  data: null,
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
    console.log('LOAD')

      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
    console.log('success')

  console.log(action.payload.data);
  console.log(action.payload.data.length);
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload.data,
        list: action.payload.data,
        error: null
      };
    case LOAD_FAIL:
    console.log('fail')
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




