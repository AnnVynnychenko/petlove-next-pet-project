export const DisplayError = ({ children, ...props }) => {
  return (
    <p className="w-full my-5 text-center text-accent" {...props}>
      {children}
    </p>
  );
};
