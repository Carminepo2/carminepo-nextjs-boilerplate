export type ActionType = "primary" | "secondary" | "tertiary";
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  actionType?: ActionType;
  loading?: boolean;
}
