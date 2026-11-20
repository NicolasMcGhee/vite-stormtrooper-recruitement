import "./index.css";
export default function Card(props) {
  return (
    <div className="Card_Flex">
      <img src={props.Image} alt="" width={800} />
      <h2>{props.Name}</h2>
      <h3>{props.Title}</h3>
    </div>
  );
}
