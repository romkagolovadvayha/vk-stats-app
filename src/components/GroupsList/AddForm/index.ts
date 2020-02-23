import { connect } from "react-redux";

import Presenter from "./Presenter";
import {setModalApp, getGroups, getFriends, getResolveScreenName, getGroup, getUser} from "../../../redux/actions";

const mapStateToProps = (state: any) => ({
    state,
    token: state.token,
    groups: state.groups,
    group: state.group,
    userBy: state.userBy,
    utils: state.utils,
    friends: state.friends,
    loadingGroups: state.groups.loadingGroups,
    loadingFriends: state.groups.loadingFriends,
    loadingGroup: state.group.loadingGroup,
    loadingUserBy: state.group.loadingUserBy,
    loadingResolveScreenName: state.utils.loadingResolveScreenName,
    modal: state.modalApp.modal,
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    setModalApp: (block: any) => dispatch(setModalApp(block)),
    getGroups: (token: string) => dispatch(getGroups(token)),
    getFriends: (token: string) => dispatch(getFriends(token)),
    getGroup: (id: number, token: string) => dispatch(getGroup(id, token)),
    getUser: (id: number, token: string) => dispatch(getUser(id, token)),
    getResolveScreenName: (url: string, token: string) => dispatch(getResolveScreenName(url, token)),
});

const AddForm = connect(mapStateToProps, mapDispatchToProps)(Presenter);

export default AddForm;