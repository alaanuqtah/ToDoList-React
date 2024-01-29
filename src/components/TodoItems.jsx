import './css/todoItems.css'
import checked from './assests/check.png'
import unchecked from './assests/unchecked.png'
import icon from './assests/icon.png'

const TodoItems = ({no,display,text,setTodos}) => {

  const deleteItem =()=>{
      let data=JSON.parse(localStorage.getItem("todos"));
      data=data.filter((todo)=>todo.no!==no)
      setTodos(data);
    }

  const toggle=(no)=>{
    let data=JSON.parse(localStorage.getItem("todos"));

    for(let i=0;i<data.length;i++){
      if(data[i].no===no){
        if(data[i].display===""){
          data[i].display='line-through';
        }else{
          data[i].display="";
        }
        break;
      }
    }

    setTodos(data);

  }
  return (
    <div className='todoitems'>
      <div className={`todoitems-cont ${display}`} onClick={()=>{toggle(no)}}>
        {display===""?<img src={unchecked} alt="" />:<img src={checked} alt="" />}
        <div className="todoitems-text">{text}</div>
      </div>
      <img onClick={()=>{deleteItem(no)}} className='todoitem-cross-icon' src={icon} alt="" />
      
    </div>
  )
}

export default TodoItems
