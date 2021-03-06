const initialState = {
    loadingUser: false
};

const user = (state = initialState, action: any) => {
    switch (action.type) {
        case "GET_USER_INFO_REQ":
            return {
                ...state,
                loadingUser: true
            };
        case "GET_USER_INFO_RES":
            return {
                ...state,
                ...action.payload,
                loadingUser: false
            };
        default:
            return state;
    }
};

export default user;