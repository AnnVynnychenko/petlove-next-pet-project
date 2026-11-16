'use client';

import PetBlock from '@/components/PetBlock';
import { useFindPath } from '@/hooks/useFindPath';

export default function AuthLayout({ children }) {
  const { isLogin, isRegister } = useFindPath();

  const typeMap = [
    { check: isLogin, value: 'login' },
    { check: isRegister, value: 'register' },
  ];

  const currentPath = typeMap.find(item => item.check);
  const type = currentPath ? currentPath.value : 'login';

  return (
    <div className="min-h-screen flex flex-col justify-center items-center pb-5">
      <PetBlock key={type} type={type} />
      <div className="flex flex-col items-center justify-center w-full min-h-105.5 mt-[10px] p-5 bg-white rounded-30">
        <div>{children}</div>
      </div>
    </div>
  );
}
