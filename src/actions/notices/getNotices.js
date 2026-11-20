'use server';

import { handleApiRequest } from '@/helpers/handleApiRequest';

const API_URL = process.env.API_URL;

export async function getNotices(
  searchQuery = '',
  filters = {},
  currentPage = 1,
  perPage = 6
) {
  const params = new URLSearchParams();

  if (searchQuery) params.append('keyword', searchQuery);

  Object.entries(filters).forEach(([filter, value]) => {
    if (value !== undefined && value !== '' && value !== null) {
      params.append(filter, value);
    }
  });

  params.append('page', currentPage);
  params.append('limit', perPage);

  const fetchPromise = fetch(`${API_URL}/notices?${params.toString()}`);

  return handleApiRequest(fetchPromise);
}
