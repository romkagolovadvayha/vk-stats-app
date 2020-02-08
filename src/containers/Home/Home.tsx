import React from 'react';
import './Home.scss';
import Header from "../../components/Header/Header";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div>
                    Home page...
                </div>
            </div>
        );
    };
}

export default Home;
