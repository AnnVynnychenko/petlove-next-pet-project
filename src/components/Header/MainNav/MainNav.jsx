import LinkMainNav from '@/components/Header/MainNav/LinkMainNav';

export default function MainNav({ className = '', onClose = () => {} }) {
  return (
    <nav className={`w-[119px] ${className}`}>
      <ul className="flex flex-col gap-[10px]">
        <LinkMainNav href="/news" onClose={onClose}>
          News
        </LinkMainNav>
        <LinkMainNav href="/notices" onClose={onClose}>
          Find pet
        </LinkMainNav>
        <LinkMainNav href="/friends" onClose={onClose}>
          Our friends
        </LinkMainNav>
      </ul>
    </nav>
  );
}
