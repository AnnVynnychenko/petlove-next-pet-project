'use client';

import { useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
import Input from '@/components/Input';
import { SEARCH_FIELD } from '@/constants/searchField';
import Icon from './Icon';
import toast from 'react-hot-toast';

export default function SearchField() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const defaultQuery = searchParams.get('search') || '';

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { search: defaultQuery },
  });

  const { name, placeholder, type } = SEARCH_FIELD;

  async function submitData(data) {
    const query = data.search?.trim();

    const params = new URLSearchParams(searchParams);

    if (!query) {
      params.delete('search');
      router.push(`?${params.toString()}`);
      toast.error('Enter search request, please!');
      return;
    }

    params.set('search', query);
    router.push(`?${params.toString()}`);
  }

  return (
    <form
      className="w-full mt-5"
      onSubmit={handleSubmit(submitData)}
      role="search"
    >
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
