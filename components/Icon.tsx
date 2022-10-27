import React from "react";
import Image from "next/image";
import IconSvg from "./IconSvg";

const icons = {
  wallet:
    "M8 0C3.5817 0 0 3.5817 0 8C0 12.4183 3.5817 16 8 16C12.4183 16 16 12.4183 16 8C15.9951 3.5838 12.4162 0.0049 8 0ZM8 14.2222C4.5636 14.2222 1.77778 11.4364 1.77778 8C1.77778 4.5636 4.5636 1.77778 8 1.77778C11.4364 1.77778 14.2222 4.5636 14.2222 8C14.2183 11.4348 11.4348 14.2183 8 14.2222ZM10.6486 10.0138C10.73 9.703 10.6373 9.3725 10.4062 9.1493L8.8889 7.632V4.4445C8.8889 3.9535 8.4909 3.5556 8 3.5556C7.5091 3.5556 7.1111 3.9535 7.1111 4.4445V8C7.1112 8.2357 7.2048 8.4618 7.3716 8.6285L9.1493 10.4062C9.3725 10.6373 9.703 10.73 10.0138 10.6486C10.3246 10.5673 10.5673 10.3246 10.6486 10.0138Z",
  previous:
    "M6.75592 0.244078C7.08136 0.569515 7.08136 1.09715 6.75592 1.42259L2.34518 5.83333L6.75592 10.2441C7.08136 10.5695 7.08136 11.0972 6.75592 11.4226C6.43048 11.748 5.90285 11.748 5.57741 11.4226L0.577411 6.42259C0.251974 6.09715 0.251974 5.56951 0.577411 5.24408L5.57741 0.244078C5.90285 -0.0813593 6.43049 -0.0813593 6.75592 0.244078Z",
  next: "M0.244078 11.7559C-0.0813592 11.4305 -0.0813592 10.9028 0.244078 10.5774L4.65482 6.16667L0.244078 1.75592C-0.0813588 1.43049 -0.0813588 0.902848 0.244078 0.577412C0.569515 0.251974 1.09715 0.251974 1.42259 0.577412L6.42259 5.57741C6.74803 5.90285 6.74803 6.43049 6.42259 6.75592L1.42259 11.7559C1.09715 12.0814 0.569515 12.0814 0.244078 11.7559Z",
  user: "M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9C48.354,35.818,42.661,30.079,35.64,30.079z",
};

export type IconName = keyof typeof icons;

export const Icon: React.FC<{
  icon: IconName;
  size?: string | number;
  invert?: boolean;
  className?: string;
  color?: string;
}> = ({ icon, size, invert, className, color }) => {
  return (
    <div
      className={className}
      style={{
        height: size ? size : "24px",
        width: size ? size : "24px",
      }}
    >
      <IconSvg name={icons[icon]} color={color} />
    </div>
  );
};

export default Icon;