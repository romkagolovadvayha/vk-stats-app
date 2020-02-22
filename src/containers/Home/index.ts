import { connect } from "react-redux";

import Presenter from "./Presenter";
import {getAuthToken} from "../../redux/actions";

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    getAuthToken: () => dispatch(getAuthToken()),
});

const Home = connect(null, mapDispatchToProps)(Presenter);

export default Home;
