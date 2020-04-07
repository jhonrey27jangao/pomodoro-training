export type LabelProps = {
  theme?: "light" | "dark";
  weight?: "bold" | "light";
  center?: boolean;
  type: "h1" | "h2" | "h3" | "h4" | "p";
  children?: any;
  strike?: boolean;
  pointer?: boolean;
  onClick?: () => void;
};
