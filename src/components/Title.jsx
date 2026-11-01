export default function Title({ children, ...props }) {
  return (
    <h2
      className="font-bold text-[28px] leading-none tracking-tight-custom"
      {...props}
    >
      {children}
    </h2>
  );
}
