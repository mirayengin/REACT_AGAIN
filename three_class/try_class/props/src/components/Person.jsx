import Msg from "./Msg";
import "./person.css"

const Person = ({props}) => {
  console.log(props);
  let { name, img, tel } = props;
  console.log(name)
  return (
    <>
      <div className="person-1">
        <p>I'm {props.name} </p>
        <div>
          <img className="person-img" src={img} alt="img" />
        </div>
      </div>
      <Msg tel={tel} />
    </>
  )
};

export default Person;