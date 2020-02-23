// @ts-ignore
import connect from "@vkontakte/vk-connect";

export const getResolveScreenName = (url: string, token: string) => async (dispatch: any) => {
    dispatch({type: "GET_RESOLVE_SCREEN_NAME_REQ"});

    try {
        const req = await connect.sendPromise("VKWebAppCallAPIMethod", {
            method: "utils.resolveScreenName",
            params: {
                screen_name: url,
                v: "5.27",
                https: 1,
                access_token: token
            }
        });
        dispatch({type: "GET_RESOLVE_SCREEN_NAME_RES", payload: req});
        return req.response;
    } catch (error) {
        dispatch({type: "GET_RESOLVE_SCREEN_NAME_FAIL", payload: error.message});
    }
};