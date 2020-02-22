import connect from "@vkontakte/vk-connect";

export const getGroups = (token: string) => async (dispatch: any) => {
    dispatch({type: "GET_GROUPS_REQ"});

    try {
        const req = await connect.sendPromise("VKWebAppCallAPIMethod", {
            method: "groups.get",
            params: {
                extended: "1",
                fields: "id,is_admin,admin_level,name,photo_50,screen_name,type,members_count",
                v: "5.102",
                access_token: token
            }
        });
        dispatch({type: "GET_GROUPS_RES", payload: req});
        return req.response;
    } catch (error) {
        dispatch({type: "GET_GROUPS_FAIL", payload: error.message});
    }
};

export const getGroup = (id: number, token: string) => async (dispatch: any) => {
    dispatch({type: "GET_GROUP_REQ"});

    try {
        const req = await connect.sendPromise("VKWebAppCallAPIMethod", {
            method: "groups.getById",
            request_id: "groupCurrent",
            params: {
                group_id: id,
                fields: "id,is_admin,admin_level,name,photo_50,screen_name,type,members_count",
                v: "5.102",
                access_token: token
            }
        });

        dispatch({type: "GET_GROUP_RES", payload: req});
        return req;
    } catch (error) {
        dispatch({type: "GET_GROUP_FAIL", payload: error.message});
    }
};

export const groupReset = () => async (dispatch: any) => {
    dispatch({type: "GROUP_RESET_RES"});
};