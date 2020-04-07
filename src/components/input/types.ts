export type InputProps = {
  type?: "text";
  width?: number;
  placeholder?: string;
  onBlur?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  onChange?: (e: any) => void | undefined;
  value?: number | any;
  onFocus?: () => void;
};
