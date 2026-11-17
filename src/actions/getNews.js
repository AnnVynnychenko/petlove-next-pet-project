'use server';

import { handleApiRequest } from '@/helpers/handleApiRequest';

const API_URL = process.env.API_URL;

export async function getNews(searchQuery = '', page = 1, perPage = 6) {
  const params = new URLSearchParams();

  if (searchQuery) params.append('keyword', searchQuery);
  params.append('page', page);
  params.append('limit', perPage);

  const fetchPromise = fetch(`${API_URL}/news?${params.toString()}`, {
    next: { revalidate: 300 },
  });

  return handleApiRequest(fetchPromise);
}
