'use server';

const API_URL = process.env.API_URL;

export async function registerUserAction(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const response = await fetch(`${API_URL}/users/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.message || 'registration failed',
      };
    }

    return { success: true, data };
  } catch (err) {
    console.error(err.message);
    return { success: false, error: 'server connection failed' };
  }
}
