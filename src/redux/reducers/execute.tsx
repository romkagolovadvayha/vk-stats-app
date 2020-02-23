const initialState = {
    loadingExecuteGetMembers: false,
    loadingExecuteGetFriends: false,
};

const execute = (state = initialState, action: any) => {
    switch (action.type) {
        case "GET_EXECUTE_GET_MEMBERS_REQ":
            return {
                ...state,
                loadingExecuteGetMembers: true
            };
        case "GET_EXECUTE_GET_MEMBERS_RES":
            return {
                ...state,
                ...action.payload.response,
                loadingExecuteGetMembers: false
            };
        case "GET_EXECUTE_GET_FRIENDS_REQ":
            return {
                ...state,
                loadingExecuteGetFriends: true
            };
        case "GET_EXECUTE_GET_FRIENDS_RES":
            return {
                ...state,
                ...action.payload.response,
                loadingExecuteGetFriends: false
            };
        default:
            return state;
    }
};

export default execute;