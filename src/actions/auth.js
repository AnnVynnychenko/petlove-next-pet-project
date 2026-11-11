'use server';

import { handleApiRequest } from '@/helpers/handleApiRequest';

const API_URL = process.env.API_URL;

async function sendAuthRequest(endpoint, payload) {
  const fetchPromise = fetch(`${API_URL}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return handleApiRequest(fetchPromise);
}

export async function registerUserAction(formData) {
  const payload = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const endpoint = '/users/signup';

  return sendAuthRequest(endpoint, payload);
}

export async function loginUserAction(formData) {
  const payload = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const endpoint = '/users/signin';

  return sendAuthRequest(endpoint, payload);
}
