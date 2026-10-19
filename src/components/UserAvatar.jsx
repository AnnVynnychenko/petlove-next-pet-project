import Icon from '@/components/Icon';

export default function UserAvatar() {
  return (
    <div className="flex items-center justify-center w-10 h-10 bg-lightAccent rounded-full text-accent">
      <Icon name="user" className="w-5 h-5" />
    </div>
  );
}
