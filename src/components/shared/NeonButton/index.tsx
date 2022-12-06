import "./styles.css";

interface NeonButtonProps {
  title: string;
  icon?: JSX.Element;
  className?: string;
}

function NeonButton(props: NeonButtonProps) {
  return (
    <a
      className={"neon-button font-poppins font-light px-5 " + props.className}
      href="https://wa.me/+5561981466888"
      target="_blank"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span className="text-white mx-3 flex justify-center items-center gap-3">
        {props.title} {props.icon}
      </span>
    </a>
  );
}

export default NeonButton;
