import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function ActivityCard({ activity }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push(`/landing/${activity.id}`)}
      className="mb-4 rounded-xl border border-gray-200 overflow-hidden"
    >
      <Image
        source={{ uri: activity.image }}
        className="w-full h-40"
        resizeMode="cover"
      />
      <View className="p-4">
        <Text className="text-lg font-bold">{activity.title}</Text>
        <Text className="text-gray-600 mt-1">{activity.description}</Text>
      </View>
    </TouchableOpacity>
  );
}
