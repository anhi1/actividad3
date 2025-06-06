const BASE_URL = 'http://127.0.0.1:3658/m1/914149-896526-default';

export async function fetchUsers() {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) throw new Error('Error fetching users');
  return await response.json();
}

export async function fetchActivities() {
  const response = await fetch(`${BASE_URL}/activities`);
  if (!response.ok) throw new Error('Error fetching activities');
  return await response.json();
}

export async function fetchReservations() {
  const response = await fetch(`${BASE_URL}/reservations`);
  if (!response.ok) throw new Error('Error fetching reservations');
  return await response.json();
}

export async function fetchStore() {
  const response = await fetch(`${BASE_URL}/store`);
  if (!response.ok) throw new Error('Error fetching reservations');
  return await response.json();
}

// Y puedes añadir más funciones para POST, PUT, DELETE...
