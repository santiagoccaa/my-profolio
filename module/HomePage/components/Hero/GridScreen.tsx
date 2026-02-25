const COLS = 8;
const ROWS = 5;

const GridScreen = () => {
  return (
    <div className="h-screen w-full absolute top-0 left-0 opacity-30 overflow-hidden">
      <div
        className="h-full w-full grid"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        }}
      >
        {Array.from({ length: COLS * ROWS }).map((_, i) => (
          <div
            key={i}
            className="border border-white/20"
          />
        ))}
      </div>
    </div>
  );
};

export default GridScreen;
