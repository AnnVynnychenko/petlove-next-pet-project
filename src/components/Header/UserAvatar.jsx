import Icon from '@/components/Icon';

export default function UserAvatar() {
  return (
    <div className="flex items-center justify-center size-10 bg-lightAccent rounded-full text-accent">
      <Icon name="user" className="size-5 shrink-0" />
    </div>
  );
}
