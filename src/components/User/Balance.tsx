import React from "react";
import './Balance.scss';

class Balance extends React.Component {

    render = () => {
        return (
            <div className="Balance">
                <div className="count">0 руб</div>
                <div className="title">Баланс</div>
            </div>
        );
    }
}

export default Balance;