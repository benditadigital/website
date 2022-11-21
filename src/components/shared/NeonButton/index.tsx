import "./styles.css";

interface NeonButtonProps {
  title: string;
  icon?: JSX.Element;
  className?: string;
}

function NeonButton(props: NeonButtonProps) {
  return (
    <button
      className={"neon-button font-poppins font-light px-5 " + props.className}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span className="text-white mx-3 flex justify-center items-center gap-3">
        {" "}
        {props.title} {props.icon}
      </span>
    </button>
  );
}

export default NeonButton;
