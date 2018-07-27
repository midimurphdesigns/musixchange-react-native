const initialState = {
  posts: [],
  page: 1,
  seed: 1,
  loading: false,
  error: null,
  refreshing: false,
  showPosts: false
};

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return {
        ...state,
        loading: true
      };

    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload
      };
    case "FETCH_POSTS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case "SHOW_POSTS_SUCCESS":
      return {
        ...state,
        showPosts: true
      };
    case "POSTS_REFRESH_SUCCESS":
      return {
        ...state,
        page: 1,
        seed: state.seed + 1,
      };
    case "POSTS_LOAD_MORE_SUCCESS":
      return {
        ...state,
        page: page + 1
      };
    default:
      return state;
  }
}
