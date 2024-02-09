import React from 'react'
import CardStyle from "./card.module.scss";

const Card = ({ data }) => {
  console.log(data);
  
  return (
    <div className={CardStyle.container} >
      {data.map((item) => {
        let { name, id, comment, img, job } = item;
        return (
        <div className={CardStyle.Cardcontainer} key={id} >
          <h1>{name} </h1>
          <p>{comment} </p>
          <img src={img} alt="img" />
          <h2>{job} </h2>          
          <div >
            <button className ={CardStyle.seviyorumButton}>Az</button>
            <button className={CardStyle.seviyorumButton}>Çok</button>
          </div>
        </div>
          
        )
      })}

    </div>
  )
}

export default Card