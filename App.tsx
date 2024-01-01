import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import Home from './app/Home';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Home />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

