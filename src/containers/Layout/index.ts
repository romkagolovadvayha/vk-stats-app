import { connect } from "react-redux";

import Presenter from "./Presenter";

const mapStateToProps = (state: any) => ({
    popout: state.popoutApp.popout
});

const Layout = connect(mapStateToProps)(Presenter);

export default Layout;
