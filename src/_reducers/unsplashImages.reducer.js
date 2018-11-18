export default function searchImages(state = {}, action) {
  switch (action.type) {
    case "UNSPLASH_SEARCH_REQUEST":
      return { loading: true };
    case "UNSPLASH_SEARCH_SUCCESS":
      //debugger;
      return {
        loading: false,
        error: false,
        ...action.results
      };
    case "UNSPLASH_SEARCH_FAILURE":
      return {
        loading: false,
        error: true
      };
    default:
      return state;
  }
}

let unsplashSearch = JSON.parse(localStorage.getItem("unsplashSearch"));
const initialState = unsplashSearch ? unsplashSearch : { history: [] };

export function searchHistory(state = initialState, action) {
  switch (action.type) {
    case "UNSPLASH_SEARCH_HISTORY":
      const searches = new Set([...state.history, action.query]);
      const nextState = { history: [...searches] };
      localStorage.setItem("unsplashSearch", JSON.stringify(nextState));

      return { history: [...searches] };
    default:
      return state;
  }
}
