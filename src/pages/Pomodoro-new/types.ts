export type PomodoroStyledProps = {
  position?: "left" | "right";
  percentWidth?: number | any;
  height?: number | any;
  float?: "left" | "right";
};

export type PomdoroProps = {
  setTitle: (e: any) => void;
};
