import { connect } from "react-redux";

import Presenter from "./Presenter";
import {setModalApp, getGroups, getFriends} from "../../../redux/actions";

const mapStateToProps = (state: any) => ({
    state,
    token: state.token,
    groups: state.groups,
    friends: state.friends,
    loadingGroups: state.groups.loadingGroups,
    loadingFriends: state.groups.loadingFriends,
    modal: state.modalApp.modal,
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    setModalApp: (block: any) => dispatch(setModalApp(block)),
    getGroups: (token: string) => dispatch(getGroups(token)),
    getFriends: (token: string) => dispatch(getFriends(token)),
});

const AddForm = connect(mapStateToProps, mapDispatchToProps)(Presenter);

export default AddForm;