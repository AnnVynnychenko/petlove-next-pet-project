'use server';

const API_URL = process.env.API_URL;

async function sendAuthRequest(endpoint, payload) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.message || 'Operation failed',
      };
    }

    return { success: true, data };
  } catch (err) {
    console.error(err.message);
    return { success: false, error: 'server connection failed' };
  }
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
