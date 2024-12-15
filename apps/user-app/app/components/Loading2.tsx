export default function () {
  const circles = [
    { delay: 0 },
    { delay: 0.1 },
    { delay: 0.2 },
    { delay: 0.3 },
  ];

  return (
    <div className="flex w-full items-center justify-center gap-2">
      {circles.map((circle, index) => (
        <div
          key={index}
          aria-hidden="true"
          className={`h-2 w-2 rounded-full animate-sequential opacity-0 bg-white`}
          style={{ animationDelay: `${circle.delay}s` }}
        ></div>
      ))}
    </div>
  );
}
