const initialState = {
    loadingFriends: false
};

const friends = (state = initialState, action: any) => {
    switch (action.type) {
        case "GET_FRIENDS_REQ":
            return {
                ...state,
                loadingFriends: true
            };
        case "GET_FRIENDS_RES":
            return {
                ...state,
                ...action.payload.response,
                loadingFriends: false
            };
        default:
            return state;
    }
};

export default friends;