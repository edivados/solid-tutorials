import "./style.css";

export default function Canvas(props) {
  return <canvas ref={props.ref} width="256" height="256" />;
}
