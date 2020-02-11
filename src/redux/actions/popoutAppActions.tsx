export const getPopoutApp = () => (dispatch: any) => {
    dispatch({type: "GET_POPOUT"});
};

export const setPopoutApp = (block: any) => (dispatch: any) => {
    dispatch({type: "SET_POPOUT", block});
};