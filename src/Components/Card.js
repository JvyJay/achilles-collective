const Card = (props) => {
  return (
    <div>
      <div id='card'>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Card;
