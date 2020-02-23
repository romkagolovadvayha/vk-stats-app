import {connect} from "react-redux";
import Presenter from "./Presenter";

import {getExecuteGetMembers} from "../../../../redux/actions";

const mapStateToProps = (state: any) => ({
    state,
    token: state.token,
    execute: state.execute,
    loadingExecuteGetMembers: state.execute.loadingExecuteGetMembers
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    getExecuteGetMembers: (group_id: number, offset: number, total_count: number, token: string) => dispatch(getExecuteGetMembers(group_id, offset, total_count, token)),
});

const ProcessForm = connect(mapStateToProps, mapDispatchToProps)(Presenter);

export default ProcessForm;
