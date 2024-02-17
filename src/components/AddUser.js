import React from "react";
import { IoCheckbox } from "react-icons/io5";


class Adduser extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        users: [
            {
              firstsname: "",
              lastname: "",
              bio: "",
              age: 1,
              isHappy: false,

            }
            
        ]
    }
}
  render(){
    return (
      <form ref={(elem) => this.myForm = elem}>
        <input placeholder="Имя"  onChange={(e) =>this.setState({firstsname: e.target.value})}/>
        <input placeholder="Фамилия" onChange={(e) =>this.setState({lastname: e.target.value})}/>
        <textarea placeholder="Биография" onChange={(e) =>this.setState({bio: e.target.value})}/>
        <input placeholder="Возраст" onChange={(e) =>this.setState({age: e.target.value})}/>
        <label htmlFor="isHappy">Счастлив?</label>
        <input type="checkbox" id="isHappy" onChange={(e) =>this.setState({isHappy: e.target.checked})}/>
        <button type="button" onClick={() =>{
        this.myForm.reset()
        this.props.onAdd({
          firstsname:this.state.firstsname,
          lastname:this.state.lastname,
          bio:this.state.bio,
          age:this.state.age,
          isHappy:this.state.isHappy,
        })}
        }>Добавить</button>
      </form>
    )
  }

  
}

export default Adduser