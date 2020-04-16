export type CovidInfoProps = {
  info: any;
};

export type CountryInfoProps = {
  countries?: any;
  worldInfo: {
    cases: number;
    deaths: number;
    recovered: number;
  };
};

export type ItemProps = {
  background?: "blue" | "green" | "red" | "yellow" | "dark";
  flexAs?: "40md" | "30md" | "25md" | "60md" | "50md" | "70md" | "full";
  unPadd?: boolean;
};

export type MapProps = {
  toBeMap?: string;
};

export type SignUpProps = {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  userName: string;
  password: any;
  confirmPassword: any;
};
