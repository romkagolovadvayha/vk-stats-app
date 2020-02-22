export const getModalApp = () => (dispatch: any) => {
    dispatch({type: "GET_MODAL"});
};

export const setModalApp = (block: any) => (dispatch: any) => {
    dispatch({type: "SET_MODAL", block});
};