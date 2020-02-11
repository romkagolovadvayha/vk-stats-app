const initialState = {
    popout: false,
};

const popoutApp = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'GET_POPOUT':
            return {
                ...state
            };
        case 'SET_POPOUT':
            return {
                ...state,
                popout: action.block
            };
        default:
            return state
    }
};

export default popoutApp;