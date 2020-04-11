export type ButtonProps = {
  rounded?: boolean;
  theme?: "success" | "warning" | "default" | "dark";
  width?: number;
  center?: boolean;
  children?: any;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  disabled?: boolean;
};
