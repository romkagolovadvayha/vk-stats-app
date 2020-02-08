import React from "react";
// @ts-ignore
import {connect} from "react-redux";
import {getUserInfo} from "../../redux/actions/userActions";

class User extends React.Component {

    constructor(props: any) {
        super(props);
    }

    private activateLasers = async (e: any) => {
        e.preventDefault();
        await this.props.getUserInfo();
    };

    render = () => (
        <button onClick={(e: any) => this.activateLasers(e)}>
            Активировать лазеры
        </button>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    getUserInfo: () => dispatch(getUserInfo()),
});

const mapStateToProps = (state: any) => ({
    state,
    user: state.userState
});

export default connect(mapDispatchToProps, mapStateToProps)(User);