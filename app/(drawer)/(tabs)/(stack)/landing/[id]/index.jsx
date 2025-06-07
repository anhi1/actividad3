import React from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import { useRouter, useSearchParams } from 'expo-router';
import { useActivities } from '../../../../../../hooks/useActivities';
import { useAuth } from '../../../../../../hooks/useAuth';
import { useReservations } from '../../../../../../hooks/';

export default function ActivityDetail() {
  const { id } = useSearchParams();  // id de la actividad desde la ruta
  const { activities, loading, error } = useActivities();
  const { user } = useAuth();
  const { addReservation } = useReservations();
  const router = useRouter();

  if (loading) return <Text>Cargando...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  // Buscar la actividad por id
  const activity = activities.find(act => act.id === id);

  if (!activity) return <Text>Actividad no encontrada</Text>;

  // Función para reservar
  const handleReserve = () => {
    if (!user) {
      alert('Debes estar logueado para reservar.');
      router.push('/login');
      return;
    }

    // Crear reserva con datos mínimos (usuario, actividad)
    addReservation({
      userId: user.id,
      activityId: activity.id,
      date: new Date().toISOString(),
    });

    alert('Reserva agregada!');
    router.push('/(drawer)/(tabs)/(stack)/reservas');  // Redirigir a lista reservas
  };

  return (
    <ScrollView className="p-4">
      <Text className="text-2xl font-bold mb-4">{activity.title}</Text>
      <Text className="mb-2">{activity.description}</Text>
      {/* Aquí podrías agregar más detalles de la actividad */}

      <Button title="Reservar" onPress={handleReserve} />
    </ScrollView>
  );
}
