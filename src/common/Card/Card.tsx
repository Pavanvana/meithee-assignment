import React from "react";
import cn from "classnames";
import { cardClass } from "./styles";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Card = (props: Props): React.ReactElement => {
  return <div className={cn(cardClass, props.className)}>{props.children}</div>;
};
export default Card;
