import "./styles.css";

interface NeonButtonProps {
  title: string;
}

function NeonButton(props: NeonButtonProps) {
  return (
    <button className="neon-button font-poppins font-light px-5">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span className="text-white mx-3"> {props.title}</span>
    </button>
  );
}

export default NeonButton;
