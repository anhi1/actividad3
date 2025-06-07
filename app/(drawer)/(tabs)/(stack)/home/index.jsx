import React from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator, Linking } from 'react-native';
import { useStore } from '../../hooks/useStore'; // Asegúrate de tener este hook para obtener la tienda

export default function HomeScreen() {
  const { store, loading, error } = useStore();

  if (loading) return <ActivityIndicator size="large" className="mt-10" />;
  if (error) return <Text className="text-red-500 mt-4">{error}</Text>;

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-4">{store.name}</Text>
      <Image source={{ uri: store.image }} className="w-full h-56 rounded-xl mb-4" />
      
      {/* Dirección */}
      <Text className="font-semibold">Dirección:</Text>
      <Text className="mb-2 text-gray-700">
        {store.address.street}, {store.address.number}, {store.address.city}, {store.address.postal_code}, {store.address.country}
      </Text>

      {/* Contacto */}
      <Text className="font-semibold">Contacto:</Text>
      <Text className="text-blue-500" onPress={() => Linking.openURL(`tel:${store.contact.phone}`)}>{store.contact.phone}</Text>
      <Text className="text-blue-500" onPress={() => Linking.openURL(`mailto:${store.contact.email}`)}>{store.contact.email}</Text>
      <Text className="text-blue-500 mb-2" onPress={() => Linking.openURL(store.contact.website)}>{store.contact.website}</Text>

      {/* Horarios */}
      <Text className="font-semibold mb-1">Horario:</Text>
      {Object.entries(store.hours).map(([day, hours]) => (
        <Text key={day} className="text-gray-600">{day.charAt(0).toUpperCase() + day.slice(1)}: {hours}</Text>
      ))}

      {/* Info adicional */}
      <Text className="font-semibold mt-4">Descripción:</Text>
      <Text className="text-gray-700">{store.additional_info.description}</Text>

      <Text className="font-semibold mt-4">Métodos de pago:</Text>
      {store.additional_info.payment_methods.map((method) => (
        <Text key={method} className="text-gray-700">• {method}</Text>
      ))}

      <Text className="font-semibold mt-4">Política de cancelación:</Text>
      <Text className="text-gray-700 mb-10">{store.additional_info.cancellation_policy}</Text>
    </ScrollView>
  );
}
