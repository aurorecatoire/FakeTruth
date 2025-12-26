export function Button({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  const base =
    "rounded-2xl px-6 py-3 font-semibold text-white transition-colors duration-200";
  const variants = {
    default: "bg-purple-500 hover:bg-purple-600",
    outline: "border border-purple-500 text-purple-500 hover:bg-purple-700/20",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
