import React from "react";
interface Props {
  children: string;
}
const Label = ({ children }: Props) => {
  return <label className="block my-2">{children}</label>;
};

export default Label;
