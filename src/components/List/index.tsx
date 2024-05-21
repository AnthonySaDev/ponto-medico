import React from 'react';
import { FlatList, View } from 'react-native';

import { REGISTERS } from '@/utils/registers';
import { ListItem } from '../ListItem';
import { theme } from '@/theme';

export function List() {
  return (
    <FlatList
    data={REGISTERS}
    keyExtractor={(item) => String(item.id)}
    renderItem={({ item }) => (
      <ListItem
        local={item.endereco}
        atividade={item.atividade}
        hospital={item.hospital}
        data={item.data}
        horario={item.horario}
        saldo={item.saldo}
        devedor={item.devedor}
      />
    )}
    showsVerticalScrollIndicator={false}
    ItemSeparatorComponent={() => <View style={{ height: 12, borderBottomWidth: .5, borderColor: theme.colors.gray[600] }} />} // Ajuste a altura conforme necessário
  />
  

  );
}
