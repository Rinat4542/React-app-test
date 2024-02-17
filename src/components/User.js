import React from "react";
import Adduser from "./AddUser";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

class User extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      editForm: false
    }
    this.Adduser = this.Adduser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
  }
  user = this.props.user;
  render(){
    return (
        <div className="user">
            <IoHammerSharp onClick={()=> {
              this.setState({
                editForm: !this.state.editForm
              })
            }} className="change-icon" />
            <IoCloseCircleSharp onClick={()=> this.props.onDelete(this.user.id)} className="delete-icon" />
            <h3>{this.user.firstname}{this.user.lastname}</h3>
            <p>{this.user.bio}</p>
            <b>{this.user.isHappy ? 'Счастлив :)': 'Не особо :('}</b>
            {this.state.editForm && <Adduser/> }
        </div>
    )
  }

  
}

export default User