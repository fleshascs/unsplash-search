import { searchService } from "../_services/unsplash";

function search(query) {
  return dispatch => {
    dispatch(request());

    searchService(query).then(
      results => {
        dispatch(success(results));
      },
      error => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: "UNSPLASH_SEARCH_REQUEST" };
  }
  function success(results) {
    return { type: "UNSPLASH_SEARCH_SUCCESS", results };
  }
  function failure(error) {
    return { type: "UNSPLASH_SEARCH_FAILURE", error };
  }
}

function addToHistory(query) {
  return dispatch => dispatch({ type: "UNSPLASH_SEARCH_HISTORY", query });
}

const unsplashActions = {
  search,
  addToHistory
};

export default unsplashActions;
