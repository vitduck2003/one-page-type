interface ButtonProps {
    buttonText: string;
    href?: string;
  }
  
  const ButtonMemberShip: React.FC<ButtonProps> = ({ buttonText, href }) => {
    return (
      <div className="mt-[64px]">
        <button className="text-white bg-[#F1900E] hover:bg-[#ce964c] mb-8 lg:w-[230px] p-3 rounded-[50px] uppercase"><a href={href}>{buttonText}</a></button>
      </div>
    );
  };
  export default ButtonMemberShip;