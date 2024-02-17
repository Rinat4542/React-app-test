import React from "react";
import Header from "./components/Header";
import Users from "./components/Users"
import Adduser from "./components/AddUser";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        users: [
            {
                id: 1,
                firstname: 'Bob',
                lastname: 'Marley',
                bio: 'Lorem',
                age: 40,
                isHappy: true
            },
            {
                id: 2,
                firstname: 'john',
                lastname: 'Dae',
                bio: 'Lorem',
                age: 25,
                isHappy: false
            }
        ]
    }
    this.Adduser = this.Adduser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
  }
  
  render(){
    return (<div>
      <Header title="Список пользователей" />
      <main>
        <Users users={this.state.users} onDelete={this.deleteUser}/>
      </main>
      <aside>
        <Adduser onAdd={this.Adduser}/>
      </aside>
    </div>);
  }

  Adduser(user){
    const id = this.state.users.length + 1
    this.setState({users: [...this.state.users, {id, ...user}] })
  }

  deleteUser(id){
    this.setState({
      users: this.state.users.filter((elem) => elem.id !== id)
    })
  }


  
}

export default App