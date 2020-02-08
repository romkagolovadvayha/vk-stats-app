import React from "react";
// @ts-ignore
import {connect} from "react-redux";
import {getUserInfo} from "../../redux/actions/userActions";

class User extends React.Component {

    private activateLasers = (e: any) => {
        e.preventDefault();
        console.log('По ссылке кликнули.');
    };

    render = () => (
        <button onClick={this.activateLasers}>
            Активировать лазеры
        </button>
    )
}

const mapStateToProps = function (store: any) {
    return {
        users: store.userState
    };
};

export default connect(mapStateToProps)(User);