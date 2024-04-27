import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";


// const Language = (lang) => {
  const Language = ({name,img,options}) => {
  // console.log(lang);
  return (
    <Container>
      <Container>
        <Image src={img} width="60%"></Image>
      </Container>
    </Container>
  )
}

export default Language