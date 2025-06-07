import { useState, useEffect } from 'react';
import { fetchActivities } from '../services/api';

export function useActivities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadActivities = async () => {
    try {
      const data = await fetchActivities(); // asegúrate que exista en `api.js`
      setActivities(data);
    } catch (err) {
      setError(err.message || 'Error al cargar actividades');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadActivities();
  }, []);

  return { activities, loading, error, reload: loadActivities };
}
