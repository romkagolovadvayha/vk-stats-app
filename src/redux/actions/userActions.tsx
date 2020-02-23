import connect from "@vkontakte/vk-connect";

export const getUserInfo = () => async (dispatch: any) => {
    dispatch({type: "GET_USER_INFO_REQ"});

    try {
        const req = await connect.sendPromise("VKWebAppGetUserInfo");
        dispatch({type: "GET_USER_INFO_RES", payload: req});
        return req;
    } catch (error) {
        dispatch({type: "GET_USER_INFO_FAIL", payload: error.message});
    }
};

export const getUser = (id: number, token: string) => async (dispatch: any) => {
    dispatch({type: "GET_USER_REQ"});

    try {
        const req = await connect.sendPromise("VKWebAppCallAPIMethod", {
            method: "users.get",
            params: {
                user_ids: id,
                fields: "photo_50, domain",
                v: "5.102",
                access_token: token
            }
        });
        dispatch({type: "GET_USER_RES", payload: req});
        return req.response[0];
    } catch (error) {
        dispatch({type: "GET_USER_FAIL", payload: error.message});
    }
};