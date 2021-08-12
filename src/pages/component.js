import React from "react";
import './component.scss';
import LandingScreen from "./LandingScreen";
import Store from "./Store";
import EmailModal from './emailModal';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isLogin: false,
            isEnrolled: false,
            studentData: {},
            loginMessage: "",
            points:1000,
            rewardPoints: 500,
            showEmailModal:false
        }
        this.users = [
            { name: "Rahul", isEnrolled: false, gmailID: "rahul@whitehat", userId: "rahul", password: "rahul" },
            { name: "prakhar", isEnrolled: true, gmailID: "prakhar@whitehat", userId: "prakhar", password: "prakhar" },
            { name: "Jitender", isEnrolled: true, gmailID: "jitender@whitehat", userId: "jitender", password: "jitender" },
        ]
    }

    rewardPointsHandler = (sub) =>{
     this.setState({rewardPoints: this.state.rewardPoints-sub})
    }

    checkUser = () => {
        var username = this.state.username
        var password = this.state.password
        var usernameMatch = false
        var passwordMatch = false
        var message = ""
        var enrolled = false
        this.users.forEach(item => {
            if (item.userId === username) {
                usernameMatch = true
                if (item.password === password) {
                    passwordMatch = true
                    enrolled = true
                }
                else {
                    passwordMatch = false
                    message = "Incorrect Password"
                }
            }
        })
        if (username.length > 0 && password.length > 0) {
            if (usernameMatch === true && passwordMatch === true) {
                message = "Login Successful"
                this.setState({ isLogin: true, isEnrolled: enrolled })
            }
            else if (usernameMatch === false) {
                message = "Incorrect Username"
            }
        }
        else {
            message = username.length < 1 ? "Enter User ID" : password.length < 1 ? "Enter Password" : ""
        }
        this.setState({ loginMessage: message, });
    }

    updateUserPassword = (name, e) => {
        this.setState({ [name]: e.target.value })
    }

    logout = () => {
        // this.setState({ isLogin: false, loginMessage: "" })
        var vals=!this.state.showEmailModal 
        this.setState({showEmailModal:vals})
    }

    render() {
        let { isLogin, isEnrolled, studentData, loginMessage, username, password, showEmailModal } = this.state;
        return (
            <div>
                {!isLogin &&
                    <div>
                        <h1 style={{ textAlign: "center" }} className="mt-2"> Welcome to WhiteHat Ambassadors</h1>
                        
                        <div className="wrapper flex-column">
                            <form className="form">
                                <input type="text" className="fadeIn second" value={this.state.username} placeholder="login" autoComplete="false" onChange={(event) => this.updateUserPassword('username', event)} required />
                                <input type="password" className="fadeIn third" value={this.state.password} placeholder="password" autoComplete="false" onChange={(event) => this.updateUserPassword('password', event)} required />
                                <input type="button" className="fadeIn fourth" value="Log In" onClick={() => this.checkUser()} />
                                {loginMessage.length > 0 && <h5>{loginMessage}</h5>}
                            </form>
                            <h6>login- prakhar , password- prakhar</h6>

                        </div>
                        <div className="d-flex justify-content-center flex-column">
                        <h1 className="text-center m-5">Business - Delighted and Engaged Student</h1>
                        <h2 className="text-center m-5">Project submission/worksheet submission-% - How do we get more students to attempt/complete projects/worksheets they get after every class</h2>
                    </div>
                    </div>
                }
                {isLogin && isEnrolled &&
                <LandingScreen  user={this.state.user} rewardPoints={this.state.rewardPoints} points={this.state.points}/>
                }
            </div>
        )
    }
}

export default MyComponent;