import { connect } from "react-redux";

import Presenter from "./Presenter";
import {setPopoutApp, setModalApp} from "../../../redux/actions";

const mapStateToProps = (state: any) => ({
    state,
    popout: state.popoutApp.popout,
    modal: state.modalApp.modal,
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    setPopoutApp: (block: any) => dispatch(setPopoutApp(block)),
    setModalApp: (block: any) => dispatch(setModalApp(block)),
});

const List = connect(mapStateToProps, mapDispatchToProps)(Presenter);

export default List;
