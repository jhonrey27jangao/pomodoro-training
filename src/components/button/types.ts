export type ButtonProps = {
  theme?: "success" | "warning";
  width?: number;
  center?: boolean;
  children?: any;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  disabled?: boolean
};
