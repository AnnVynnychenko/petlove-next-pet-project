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
    <div>
      <PetBlock key={type} type={type} />
      <div className="mt-[10px] mb-5 py-[27px] px-5 bg-white rounded-30">
        {children}
      </div>
    </div>
  );
}
