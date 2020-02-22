import { connect } from "react-redux";

import Presenter from "./Presenter";

const mapStateToProps = (state: any) => ({
    popout: state.popoutApp.popout,
    modal: state.modalApp.modal
});

const Layout = connect(mapStateToProps)(Presenter);

export default Layout;
