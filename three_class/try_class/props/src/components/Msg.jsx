const Msg = (props) => {
  console.log(props)
  let  tel  = props.tel;
  return (
    <>
      <p>Tel No {tel}</p>
    </>
  )
};

export default Msg;