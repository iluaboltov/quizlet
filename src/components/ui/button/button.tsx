import React, { ReactNode } from "react";

type ButtonProps = {
  action: () => void,
  children?: ReactNode,
}
type Ref = HTMLButtonElement;
export const Button = React.forwardRef<Ref, ButtonProps>((props, forwardRef) => {
  return (
    <button onClick={props.action} type={'button'} ref={forwardRef}>

    </button>
  );
})

Button.displayName = 'Button';