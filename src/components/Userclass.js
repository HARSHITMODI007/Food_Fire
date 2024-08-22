import React from "react";
  

class Userclass extends React.Component{
    
    constructor(props){
        super(props);
      console.log(props.name+" constructor");
        this.state={
            userinfo:{
                
            }
        }

    }
     
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/HARSHITMODI007");
        const json = await data.json();
         this.setState({
           userinfo:json,
         })
         console.log(json)
    }
     componentDidUpdate(){
      console.log("componentDidUpdate called")
     }
    render(){
        const {name,location,avatar_url} =this.state.userinfo;
        console.log(name+" render")
        return(
            <div className="user-card">
              
                <img src={avatar_url}/>
                <h2>Name:{name}</h2>
                <h2>Location:{location}</h2>
                <h2>Contact:@modiforreal</h2>
            </div>
        )
    }
}
export default Userclass;