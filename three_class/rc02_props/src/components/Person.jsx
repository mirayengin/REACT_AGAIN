const Person = (props) => {
  const { name, img, tel } = props;
  return (
    <div style = {{textAlign : "center"}}>
      <p>Merhaba {name}</p>
      <img style = {{width : "200px"}} src={img} alt="img1" />
      <p>{tel}</p>
    </div>
  )
}

export default Person