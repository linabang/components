import './body.css'

const Body = () => {
  return (
    
    <main className="main">
      <div className="container">
        <h1 className="main__title">Lorem, ipsum dolor sit</h1>
        <p className="main__text1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. EaВue,
          veritatis ad.
        </p>
        <div className="main__input">
         <label className="main__input__title">Почта:</label>
         <input type="email" className="main__input__email" placeholder="Введите почту"></input>
        </div>
        <p className="main__text2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Eaque, veritatis ad. Ullam asperiores eligendi minima 
          totam ratione sit molestias amet veritatis sed ut? 
          Voluptatibus tempore sed voluptate perspiciatis, magnam 
          molestias.
        </p>
        <button className="main__btn">Сохранить</button>
      </div>
    </main>
  )
}


export default Body