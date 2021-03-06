const initialState = {
    loadingGroups: false
};

const groups = (state = initialState, action: any) => {
    switch (action.type) {
        case "GET_GROUPS_REQ":
            return {
                ...state,
                loadingGroups: true
            };
        case "GET_GROUPS_RES":
            return {
                ...state,
                ...action.payload.response,
                loadingGroups: false
            };
        default:
            return state;
    }
};

export default groups;