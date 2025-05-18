import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const SectionHeader = ({
  title,
  subtitle,
  icon,
  className,
  ...props
}: Props) => {
  return (
    <div {...props} className={`m-auto ${className}`}>
      <h1 className="text-3xl font-bold mb-2 text-center flex justify-center items-center">
        <div className="w-8 text-secondary mr-2">{icon}</div>
        {title}
      </h1>
      <p className="text-base  text-center opacity-80">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
