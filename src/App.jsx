
import './App.css'
import Header from './componets/header/Header';
function App() {
  const getName = (isAdmin) =>{
    if(isAdmin === true){
      return'Привет Админ'
    }else{
      return 'Ты не Админ'
    }
  }
  const arrayNames = [{name: 'Lina'},{name: 'Christipher'}];
  const onHandleClick = (id) =>{
    console.log(id);
    
  }
  const isGetAdmin = true
  return (
    <div>
      <Header/>
      <h2>{getName(true)}</h2>
      {isGetAdmin && <h1>Hallo Admin</h1>}
      {!isGetAdmin && <h1>Hallo user</h1>}
      <div>
        {
          arrayNames.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))
        }
      </div>
      <button onClick= {() => onHandleClick(123)}>click</button>
    </div>
  )
}

export default App
