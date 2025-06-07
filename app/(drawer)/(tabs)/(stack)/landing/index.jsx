import React from 'react';
import { View, ScrollView, Text, ActivityIndicator } from 'react-native';
import { useActivities } from '../../../../../../hooks/useActivities';
import ActivityCard from '../../../../../../components/ActivityCard';

export default function LandingScreen() {
  const { activities, loading, error } = useActivities();

  if (loading) return <ActivityIndicator size="large" className="mt-10" />;
  if (error) return <Text className="text-red-500 mt-4">{error}</Text>;

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">Actividades disponibles</Text>
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </ScrollView>
  );
}
