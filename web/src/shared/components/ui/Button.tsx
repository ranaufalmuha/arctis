import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      style={{
        backgroundImage:
          "radial-gradient(129% 99% at 120% 10%, var(--foreground) 10%, var(--accent) 100%), url('/assets/noise.png')",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover, 200px 200px",
        backgroundRepeat: "no-repeat, repeat",
      }}
      className="text-background py-4 px-6 rounded-lg max-md:text-sm lg:text-lg duration-300 cursor-pointer"
    >
      {children}
    </button>
  );
};
