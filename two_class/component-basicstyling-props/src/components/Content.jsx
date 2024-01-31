import img1 from "../img/img1.png"
// Eğer dahili olarak proje içinde bir img'yi kullanmak için import etmeliyiz
import './Content.css';
// Eğer biz bir className ile style vereceksek bu css dosyasını import edip o  verilen className adında style objact i oluşturulmalıdır.
const Content = () => {
  // JS ALANI
  // Bir object oluşturduk ve style verdik.
  const imgStyle = {
    display: "block",
    width: "300px",
    margin: "1 rem auto"
  };
  return (
    // JSX ALANI
    <div>
      <h2 style={{color:"red"}}>React JSX</h2>
      <p style={{ backgroundColor: "grey" }}>React bir JS kütüphanesidir</p>
      <img style={imgStyle} src={img1} alt="" />
      <p className = "par-1">
        Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Molestias odio iure dolores inventore ducimus,
        omnis, possimus aut animi eaque cum accusantium labore sapiente commodi rerum, quas fugiat at dignissimos nemo.
      </p>
    </div>
  )
}

export default Content