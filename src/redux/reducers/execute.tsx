const initialState = {
    loadingExecuteGetMembers: false
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
        default:
            return state;
    }
};

export default execute;