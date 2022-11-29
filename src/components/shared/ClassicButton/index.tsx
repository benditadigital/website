import "./styles.css";

interface ClassicButtonProps {
  title: string;
  icon?: JSX.Element;
  className?: string;
}

export default function ClassicButton(props: ClassicButtonProps) {
  return (
    <button
      className={
        "classic-button font-poppins font-medium py-3 px-3 pr-2 " +
        props.className
      }
    >
      <span className="mx-3 flex justify-center items-center gap-2">
        {props.title} {props.icon}
      </span>
    </button>
  );
}
