import { twMerge } from 'tailwind-merge';

export default function PetInfo({ detailedInfo = {}, className = '' }) {
  return (
    <ul className={twMerge('flex justify-between w-full mt-2', className)}>
      {Object.entries(detailedInfo).map(([item, value], index) => (
        <li key={index}>
          <div className="text-[10px] capitalize text-textMain/50 leading-[1.4] tracking-tight-soft">
            {item}
          </div>
          <div className="text-xs capitalize leading-[1.17] tracking-tight-soft">
            {value || 'Unknown'}
          </div>
        </li>
      ))}
    </ul>
  );
}
