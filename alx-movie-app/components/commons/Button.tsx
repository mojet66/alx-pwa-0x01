import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, action }) => {
  return (
    <button
      onClick={action}
      className="hover:bg-[#E2D609] px-8 py-2 border-[#E2D609] border-2 rounded-full hover:text-black transition-colors duration-300"
    >
      {title}
    </button>
  );
};

export default Button;
