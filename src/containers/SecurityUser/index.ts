import { connect } from "react-redux";

import Presenter from "./Presenter";
import {getExecuteGetFriendsInfo, getResolveScreenName} from "../../redux/actions";

const mapStateToProps = (state: any) => ({
    state,
    token: state.token
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    getExecuteGetFriendsInfo: (user_id: number, token: string) => dispatch(getExecuteGetFriendsInfo(user_id, token)),
    getResolveScreenName: (url: string, token: string) => dispatch(getResolveScreenName(url, token)),
});

const SecurityUser = connect(mapStateToProps, mapDispatchToProps)(Presenter);

export default SecurityUser;