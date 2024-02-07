import React from 'react'
// import "./card.css"
import CardStyle from "./card.module.css"
import Buton from '../buton/Buton'


const Card = ({language,img, id,btn}) => {
// const Card = (props) => {
  // let { id, language, btnName } = props;
  console.log(language)
  return (
    <div className={CardStyle.title}>
      <h1>{language}</h1>
      <img className={CardStyle.images} src={img} alt="img" />
      <Buton key = {btn} btn = {btn} />
    </div>
  )
}

export default Card