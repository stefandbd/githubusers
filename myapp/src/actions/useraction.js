export function load(username) {
    return {
      types: ['user/LOAD', 'user/LOAD_SUCCESS', 'user/LOAD_FAIL'],
      payload: {
        request: {
          url: `/users/${username}`,
          // params:{
          //   username: username,
          // },
          method: 'get'
        }
      }
    };
  }