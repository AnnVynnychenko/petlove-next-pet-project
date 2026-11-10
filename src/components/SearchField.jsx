'use client';

import { useForm } from 'react-hook-form';
import Input from '@/components/Input';
import { SEARCH_FIELD } from '@/constants/searchField';
import Icon from './Icon';

export default function SearchField() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { search: '' },
  });

  const { name, placeholder, type } = SEARCH_FIELD;

  async function submitData(data) {}

  return (
    <form className="w-full mt-5" onSubmit={handleSubmit(submitData)}>
      <div className="relative flex items-center">
        <Input
          register={register}
          name={name}
          placeholder={placeholder}
          type={type}
          className="pr-10"
        />
        <button
          type="submit"
          aria-label="Start search news"
          className="absolute right-1 top-1/2 -translate-y-1/2 grid place-items-center size-8.5"
        >
          <Icon name="search" className="size-4.5" />
        </button>
      </div>
    </form>
  );
}
