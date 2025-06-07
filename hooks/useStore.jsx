import { useState, useEffect } from 'react';
import { fetchStoreItems } from '../services/api';

export function useStore() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStoreItems()
      .then(setItems)
      .catch((err) => setError(err.message || 'Error'))
      .finally(() => setLoading(false));
  }, []);

  return { items, loading, error };
}
