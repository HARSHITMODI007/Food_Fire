import User from "./User";
import Userclass from "./Userclass";
import {Component} from "react";
import UserContext from "../Utils/UserContext";
class About extends Component {
    constructor(props){
        super(props);
        console.log("parent constructor");
    }
    componentDidMount(){
        console.log("parent componentDidMount")
    }
    render(){
        console.log("parent render");
        return( <div>
            <h1>About</h1>
            <div> 
                <UserContext.Consumer>
                {({loggedInUser})=>(
                    <h1 className="text-xl font-bold">{loggedInUser}</h1>
                )}
                </UserContext.Consumer>
            </div>
           
            <h2>this is Namaste React series!</h2>
         
            <Userclass name="child 1" location="jaipur"/>
            <Userclass name="child 2" location="jaipur"/>
            <Userclass name="child 3" location="jaipur"/>
        </div>)

    }
}


export default About;