interface NestedCirclesProps {
  sizes: number[];
  borderColor?: string;
}

export const NestedCircles: React.FC<NestedCirclesProps> = ({
  sizes,
  borderColor = "border-primary",
}) => {
  if (sizes.length === 0) return null;

  const [current, ...rest] = sizes;

  return (
    <div
      className={`w-[${current}px] aspect-square border-4 ${borderColor} rounded-full flex items-center justify-center`}
    >
      <NestedCircles sizes={rest} borderColor={borderColor} />
    </div>
  );
};
