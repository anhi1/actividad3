import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import { useUsers } from '../../hooks/useUsers';

export default function LoginScreen() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { users, loading, error } = useUsers();

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Ingresa tu email y contraseña');
      return;
    }

    if (loading) return;

    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      login(foundUser);
      Alert.alert('Bienvenido', `Hola ${foundUser.name || 'usuario'}`);
    } else {
      Alert.alert('Error', 'Email o contraseña incorrectos');
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-2xl font-bold mb-6">Iniciar sesión</Text>
      <TextInput
        placeholder="Correo electrónico"
        className="border border-gray-300 rounded-xl px-4 py-2 w-full mb-4"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        className="border border-gray-300 rounded-xl px-4 py-2 w-full mb-4"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity
        className="bg-blue-500 rounded-xl px-6 py-3 w-full"
        onPress={handleLogin}
      >
        <Text className="text-white text-center font-bold">
          {loading ? 'Cargando...' : 'Ingresar'}
        </Text>
      </TouchableOpacity>
      {error && <Text className="text-red-500 mt-2">{error}</Text>}
    </View>
  );
}
