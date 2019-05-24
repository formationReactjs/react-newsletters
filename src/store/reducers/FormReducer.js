const initialState = {
    email: undefined,
    checkbox: false
};

export default function FormReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET-FORM':
            return { ...state, email: action.email, checkbox: action.checkbox };
        default:
            return state;
    }
}
