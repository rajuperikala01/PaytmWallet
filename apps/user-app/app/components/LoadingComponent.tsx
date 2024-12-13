export default function () {
  const circles = [
    { delay: 0, bgColor: "bg-blue-500" },
    { delay: 0.1, bgColor: "bg-blue-500" },
    { delay: 0.2, bgColor: "bg-blue-500" },
    { delay: 0.3, bgColor: "bg-blue-900" },
    { delay: 0.4, bgColor: "bg-blue-950" },
  ];

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {circles.map((circle, index) => (
        <div
          key={index}
          aria-hidden="true"
          className={`${circle.bgColor} h-4 w-4 rounded-full animate-sequential opacity-0`}
          style={{ animationDelay: `${circle.delay}s` }}
        ></div>
      ))}
    </div>
  );
}
