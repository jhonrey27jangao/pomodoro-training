export type InputProps = {
  type?: "text";
  width?: number;
  height?: "small" | "big";
  placeholder?: string;
  onBlur?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  onChange?: (e: any) => void | undefined;
  value?: number | any;
  onFocus?: () => void;
  id?: string;
  center?: boolean;
  name?: string;
};
