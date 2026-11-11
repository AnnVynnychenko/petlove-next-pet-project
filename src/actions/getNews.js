'use server';

import { handleApiRequest } from '@/helpers/handleApiRequest';

const API_URL = process.env.API_URL;

export async function getNews(searchQuery = '') {
  const endpoint = searchQuery
    ? `/news?search=${encodeURIComponent(searchQuery)}`
    : '/news';

  const fetchPromise = fetch(`${API_URL}${endpoint}`);

  return handleApiRequest(fetchPromise);
}
