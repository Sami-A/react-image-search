export type SVGProps = {
  size?: number;
  onPress?: () => void;
};

const Close = ({ onPress }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    height={24}
    width={24}
    onClick={onPress}
    style={{ cursor: onPress && "pointer" }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default Close;
