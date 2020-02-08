import React from "react";

interface ClockState {
    date: Date;
}
interface ClockProps {}

class Clock extends React.Component<ClockProps, ClockState> {
    public state: ClockState;
    private timerID: any;

    constructor(props: ClockProps) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    tick = () => {
        this.setState({
            date: new Date()
        });
    };

    render = () => (
        <div>Сейчас {this.state.date.toLocaleTimeString()}.</div>
    )
}

export default Clock;