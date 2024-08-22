import {useState} from "react"
const User =(props) =>{
    const {name} =props
    const [count,setcount] = useState(0);
    const [count2,setcount2] = useState(1);
    return(
        <div className="user-card">
            <h1>Count:{count}</h1>
            <h1>Count2:{count2}</h1>
            <h2>Name:{name}</h2>
            <h2>Location:Jaipur</h2>
            <h2>Contact:@modiforreal</h2>
        </div>
    )
}
export default User;