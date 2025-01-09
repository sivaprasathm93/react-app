export function loadCategories() {
    return function (dispatch) {
      fetch("https://run.mocky.io/v3/29b85620-9307-47c7-8f16-2450dedfd1c4")
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          dispatch({ type: "LOAD_CATEGORIES", payload: response });
          console.log(response);
        });
    };
  }
  
  function categoriesReducer(state = { categories: [] }, action) {
    switch (action.type) {
      case "LOAD_CATEGORIES": {
        return {
          ...state,
          categories: action.payload,
        };
      }
      default:
        return state;
    }
  }
  
  export default categoriesReducer;
  