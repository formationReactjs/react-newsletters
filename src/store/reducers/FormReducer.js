const initialState = {
    email: undefined,
    checkbox: false
};
  
export default function formReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_FORM":
          return {
            ...state,
            email: action.form.email,
            checkbox: action.form.checkbox
          };
      default:
        return state;
    }
}
