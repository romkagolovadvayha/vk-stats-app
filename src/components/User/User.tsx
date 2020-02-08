import React from "react";
// @ts-ignore
import {connect} from "react-redux";
import {getUserInfo} from "../../redux/actions/userActions";

class User extends React.Component {

    constructor(props: any) {
        super(props);
    }

    private getUser = async (e: any) => {
        e.preventDefault();
        // @ts-ignore
        const { getUserInfo } = this.props;
        console.log('getUser');
        await getUserInfo();
    };

    render = () => (
        <button onClick={(e: any) => this.getUser(e)}>
            Загрузить пользователя
        </button>
    )
}

const mapStateToProps = (state: any) => ({
    state,
    user: state.userState
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    getUserInfo: () => dispatch(getUserInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);