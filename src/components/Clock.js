import React, { Component } from "react";
import "../styles/clock.css";

class Clock extends Component {
    constructor() {
        super();
        this.state = {
            time: new Date()
        };
    }

    currentTime() {
        this.setState({ time: new Date() });
    }
    componentDidMount() {
        this.interval = setInterval(() => this.currentTime(), 1000);
    }

    // componentDidMount() {
    //     this.interval = setInterval(
    //         () => this.setState({ time: new Date() }),
    //         1000
    //     );
    // }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h3 id="time">{this.state.time.toLocaleTimeString()}</h3>
            </div>
        );
    }
}

export default Clock;
