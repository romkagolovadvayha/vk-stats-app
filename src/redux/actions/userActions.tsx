// @ts-ignore
import connect from "@vkontakte/vk-connect";

export const getUserInfo = () =>  (dispatch: any) => {
    console.log('getUserInfo');
    dispatch({type: "GET_USER_INFO_REQ"});

    try {
        const req =  connect.sendPromise("VKWebAppGetUserInfo");
        console.log(req);
        dispatch({type: "GET_USER_INFO_RES", payload: req});
        return req;
    } catch (error) {
        dispatch({type: "GET_USER_INFO_FAIL", payload: error.message});
    }
};