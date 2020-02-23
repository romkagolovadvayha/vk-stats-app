const initialState = {
    loadingUserBy: false
};

const userBy = (state = initialState, action: any) => {
    switch (action.type) {
        case "GET_USER_REQ":
            return {
                ...state,
                loadingUserBy: true
            };
        case "GET_USER_RES":
            return {
                ...state,
                ...action.payload,
                loadingUserBy: false
            };
        default:
            return state;
    }
};

export default userBy;