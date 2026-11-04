export default function Icon({ name, className = 'size-6', ...props }) {
  return (
    <svg className={className} {...props}>
      <use href={`sprite.svg#${name}`} />
    </svg>
  );
}
