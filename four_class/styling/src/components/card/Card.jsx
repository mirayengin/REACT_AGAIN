import React from 'react'
import "./card.css"
import Buton from '../buton/Buton'


const Card = ({language, id,btnName}) => {
// const Card = (props) => {
  // let { id, language, btnName } = props;
  console.log(language)
  return (
    <div>Card
      <Buton/>
    </div>
  )
}

export default Card