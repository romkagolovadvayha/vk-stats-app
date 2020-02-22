const initialState = {
    modal: false,
};

const modalApp = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'GET_MODAL':
            return {
                ...state
            };
        case 'SET_MODAL':
            return {
                ...state,
                modal: action.block
            };
        default:
            return state
    }
};

export default modalApp;