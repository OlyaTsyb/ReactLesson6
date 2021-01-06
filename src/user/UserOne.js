import React, {Component} from 'react';
import  {Consumer} from  "../App.js";
import {UsersServices} from "../userServices/UsersServices";
import "./User.css";

class UserOne extends Component {
    userServices = new UsersServices();
    render() {
        return (
            <div className={"style"}>
            <Consumer >
                {
                    (value) => {
                        console.log(value)
                        return <div>{value}</div>
                    }
                }
            </Consumer>
            </div>

        );

    }
}

export default UserOne;