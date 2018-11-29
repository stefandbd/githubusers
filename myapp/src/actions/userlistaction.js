export function load(pageNumber) {console.log('aaa')
  return {
    types: ['LOAD', 'LOAD_SUCCESS', 'LOAD_FAIL'],
    payload: {
      request: {
        url: `/users?`,
        params:{
          since: pageNumber,
        },
        method: 'get'
      }
    }
  };
}