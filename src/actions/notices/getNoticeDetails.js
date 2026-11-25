'use server';

import { handleApiRequest } from '@/helpers/handleApiRequest';

const API_URL = process.env.API_URL;

export async function getNoticeDetails(noticeId = '', token = '') {
  const headers = {};

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const fetchPromise = fetch(`${API_URL}/notices/${noticeId.toString()}`, {
    headers,
    cache: 'no-store',
  });

  return handleApiRequest(fetchPromise);
}
