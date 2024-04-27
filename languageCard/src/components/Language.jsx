import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";


// const Language = (lang) => {
  const Language = ({name,img,options}) => {
  // console.log(lang);
  return (
    <Container className="p-4 rounded-2" style= {{backgroundColor : "peachpuff"}}>
      <Container>
        <Image src={img} width="60%"></Image>
        <h3 className="display-6">{name}</h3>
        <h4>İkinci ders bitti</h4>
      </Container>
    </Container>
  )
}

export default Language