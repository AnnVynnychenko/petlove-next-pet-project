export default function Icon({ name, className = 'w-6 h-6', ...props }) {
  return (
    <svg className={className} {...props}>
      <use href={`sprite.svg#${name}`} />
    </svg>
  );
}
