export default function Input({ register, name = '', error = '', ...props }) {
  return (
    <div>
      <input
        {...register(name)}
        className="w-full py-3 pl-3 pr-9 text-textMain text-sm tracking-tight-custom leading-[1.28] placeholder:text-textMain/50 border border-textMain/15 rounded-30 hover:border-accent focus-visible:border-accent"
        {...props}
      />
      {error && <p>error.massage</p>}
    </div>
  );
}
