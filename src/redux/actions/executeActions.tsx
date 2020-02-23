import connect from "@vkontakte/vk-connect";

export const getExecuteGetMembers = (group_id: number, offset: number, total_count: number, token: string) => async (dispatch: any) => {
    dispatch({type: "GET_EXECUTE_GET_MEMBERS_REQ"});

    try {
        const req = await connect.sendPromise("VKWebAppCallAPIMethod", {
            method: "execute.getMembers",
            params: {
                group_id: group_id,
                offset: offset,
                total_count: total_count,
                v: "5.102",
                access_token: token
            }
        });
        dispatch({type: "GET_EXECUTE_GET_MEMBERS_RES", payload: req});
        return req.response;
    } catch (error) {
        dispatch({type: "GET_EXECUTE_GET_MEMBERS_FAIL", payload: error.message});
    }
};

export const getExecuteGetFriends = (user_id: number, token: string) => async (dispatch: any) => {
    dispatch({type: "GET_EXECUTE_GET_FRIENDS_REQ"});

    try {
        const req = await connect.sendPromise("VKWebAppCallAPIMethod", {
            method: "execute.getFriends",
            params: {
                user_ids: user_id,
                v: "5.102",
                access_token: token
            }
        });
        dispatch({type: "GET_EXECUTE_GET_FRIENDS_RES", payload: req});
        return req.response;
    } catch (error) {
        dispatch({type: "GET_EXECUTE_GET_FRIENDS_FAIL", payload: error.message});
    }
};