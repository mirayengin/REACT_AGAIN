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
            <img src={img} alt="img" />
            <div className={CardStyle["buttons"]} >
              <button className={CardStyle["buttons-small"]}>Small</button>
              <button className={CardStyle["buttons-large"]}>Large</button>
            </div>
            </div>
          )
        })}

    </div>
    
  )
}

export default Card
