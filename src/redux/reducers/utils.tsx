const initialState = {
    loadingResolveScreenName: false
};

const utils = (state = initialState, action: any) => {
    switch (action.type) {
        case "GET_RESOLVE_SCREEN_NAME_REQ":
            return {
                ...state,
                loadingResolveScreenName: true
            };
        case "GET_RESOLVE_SCREEN_NAME_RES":
            return {
                ...state,
                ...action.payload.response,
                loadingResolveScreenName: false
            };
        default:
            return state;
    }
};

export default utils;