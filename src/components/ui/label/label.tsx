import { ReactNode, memo } from "react";

export const Label = memo(({ children }: { children: ReactNode }) => (
  <span className={"absolute -top-4 left-2 text-xs opacity-60"}>{children}</span>
));
