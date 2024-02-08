import React from 'react'
import CardStyle from "../sass/card.module.scss";

const Card = ({ data }) => {
  console.log(data)
  return (
    <div className={CardStyle.container}>
      {data.map((item) => {
        let { name, id, job, comment, img } = item;
        return (
          <div key={id} className={CardStyle.cardContainer} >
            <h1>{ name}</h1>
            <h2>{job} </h2>
            <p>{comment} </p>
            <img className={CardStyle.imgContainer} src={img} alt="img" />
            <div>
              <button>Small</button>
              <button>Large</button>
            </div>
            </div>
          )
        })}

    </div>
    
  )
}

export default Card
