function PlayIcon({ ...props }) {
  return (
    <svg
      className="group fill-amethyst cursor-pointer transition-all duration-200"
      width="75"
      height="75"
      viewBox="0 0 75 75"
    >
      <g>
        <circle
          className="opacity-25 transition-all duration-200 group-hover:opacity-100"
          cx="37.5"
          cy="37.5"
          r="37.5"
        />
        <path
          className="transition-all duration-200 group-hover:fill-white"
          d="M29 27v21l21-10.5z"
        />
      </g>
    </svg>
  );
}

export default PlayIcon;
