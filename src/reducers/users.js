export const initialState = {
  loading: true,
  users: [],
};

export const reducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        loading: false,
        error: '',
        users: payload,
      };

    case 'FETCH_USER_DATA':
      return {
        ...state,
        users: payload,
      };
    default:
      throw new Error('Unexpected action');
  }
};
