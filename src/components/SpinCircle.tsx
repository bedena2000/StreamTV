export default function SpinCircle() {
  return (
    <svg width="24" height="24" viewBox="0 0 100 100">
      {/* Gray border (static) */}
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="#808080"
        strokeWidth="4"
        fill="none"
      />

      {/* Animated white border */}
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="white"
        strokeWidth="4"
        fill="none"
        strokeDasharray="251"
        strokeDashoffset="251"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="251"
          to="0"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
