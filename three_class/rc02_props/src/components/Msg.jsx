const Msg = (props) => {
// const Mgs = ({name,age}) => { yolda destruc yöntemi
  console.log(props)
  const {name,age} = props
  return (
    <div>
      {/* bu yazım şekili destruct etmeden önce oluyor */}
      <h3>Merhanba {props.name}</h3>
      {/* bu yazım şekili destruct edince , ayrıca yolda decstruct yaptığımızdada bu şekilde kullanabiliriz*/}
      <h2>Merhaba {name} yaşın { age}</h2>
    </div>
  )
}

export default Msg