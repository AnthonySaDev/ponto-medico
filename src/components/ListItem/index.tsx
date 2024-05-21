import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { ListItemProps } from './listItem';

export function ListItem({
  hospital,
  data,
  horario,
  saldo,
  devedor,
  local,
  atividade}: ListItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.data}>{data}</Text>
      <Text style={styles.data}>{horario}</Text>
      <Text style={[styles.data, devedor && { color: 'red' } ]}>{saldo? `${saldo}` : `00:00`}</Text>
    </View>
  );
}