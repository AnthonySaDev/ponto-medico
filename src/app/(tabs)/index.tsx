import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '@/theme';
import { List } from '@/components/List';
import { Header } from '@/components/Header';

export default function Home() {
  

  return (
    <View style={styles.container}>
     <View style={{ alignItems: 'center'}}>
      <Text style={styles.text}>Seja bem-vindo(a) ao</Text>
      <Text style={styles.text}>Ponto Rápido</Text>
      </View>
      <View style={{paddingTop: 10, alignItems: 'center', marginBottom: 50}}>
        <Text style={styles.subtitle}>Histórico de ponto:</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: "90%", paddingHorizontal:20, marginTop:10 }}>
        <Text>Data</Text>
        <Text>Horário</Text>
        <Text>Saldo</Text>
        </View>
        <List/>
        <Text style={styles.saldo}>Saldo total: - 00:37</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    padding:12,
    paddingTop:20
  },
  text:{
    fontSize: 18,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.black,

  },
  subtitle:{
    fontSize: 16,
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.black,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: theme.colors.gray[600],
    borderBottomWidth: 1,
    width: 200,
    textAlign: 'center'
  },
  saldo:{
    fontSize: 15,
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.black,
    borderBottomColor: theme.colors.gray[600],
    width: 200,
    textAlign: 'center',
    paddingVertical: 5,
    borderBottomWidth: .5
  }
});