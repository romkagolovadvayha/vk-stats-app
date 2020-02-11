import React from "react";
// @ts-ignore
import {connect} from "react-redux";
import {getUserInfo} from "../../redux/actions/userActions";
import {Avatar, Spinner, PanelHeaderContent} from "@vkontakte/vkui";
import './User.scss';

class User extends React.Component {

    constructor(props: any) {
        super(props);
        // @ts-ignore
        const {user} = this.props;
        if (!user.first_name) {
            this.getUser();
        }
    }

    private getUser = async () => {
        // @ts-ignore
        const {getUserInfo} = this.props;
        await getUserInfo();
    };

    render = () => {
        // @ts-ignore
        const {loadingUser, user} = this.props;
        return (
            <div className="User">
                {loadingUser && <Spinner size="medium" />}
                {user.first_name && <PanelHeaderContent
                    status="Добро пожаловать!"
                    before={<Avatar size={36}
                                    src={user.photo_100}/>}
                    aside=""
                >
                    {user.first_name} {user.last_name}
                </PanelHeaderContent>}
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    state,
    user: state.user,
    loadingUser: state.user.loadingUser,
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatch,
    getUserInfo: () => dispatch(getUserInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);