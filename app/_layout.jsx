import "../global.css";
import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';

export default function RootLayout({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}