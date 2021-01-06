import React, {Component} from 'react';
import UserOne from "./user/UserOne";
import {UsersServices} from "./userServices/UsersServices";

export let {Consumer, Provider} = React.createContext();

class App extends Component {
    inputMain = React.createRef();
    state = {inputValue : "",user : 0}
    usersServices = new  UsersServices()
    onInputFill = ()=> {
        //console.log(this.inputMain.current.value);
        this.setState({inputValue : this.inputMain.current.value});
    };
    onFormSubmit = (e)=> {
        e.preventDefault()
        let id = +this.inputMain.current.value;
         let user = this.usersServices.user(id).then(user=>{
                console.log(user);
                this.setState({user})
         })
    }
    render(){
        let {inputValue,user} = this.state;
        return (
            <Provider value={user.name}>
                <div>
                    <form  onSubmit={this.onFormSubmit}>
                        <input ref={this.inputMain} type={"number"} onInput={this.onInputFill} value={inputValue}/>
                        {
                            1 <= inputValue  &&  10 >= inputValue && <button >send</button>
                        }
                    </form>
                    <div>
                        <UserOne />
                    </div>
                </div>
            </Provider>
            );
    }
}

export default App;