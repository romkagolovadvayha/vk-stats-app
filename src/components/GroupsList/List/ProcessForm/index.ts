import {connect} from "react-redux";
import Presenter from "./Presenter";

import {getExecuteGetMembers, getExecuteGetFriends} from "../../../../redux/actions";

const mapStateToProps = (state: any) => ({
    state,
    token: state.token,
    execute: state.execute,
    loadingExecuteGetMembers: state.execute.loadingExecuteGetMembers,
    loadingExecuteGetFriends: state.execute.loadingExecuteGetFriends
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    getExecuteGetMembers: (group_id: number, offset: number, total_count: number, token: string) => dispatch(getExecuteGetMembers(group_id, offset, total_count, token)),
    getExecuteGetFriends: (user_id: number, token: string) => dispatch(getExecuteGetFriends(user_id, token)),
});

const ProcessForm = connect(mapStateToProps, mapDispatchToProps)(Presenter);

export default ProcessForm;
