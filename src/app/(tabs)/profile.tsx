import { colors } from '@/theme/colors';
import { fontFamily } from '@/theme/fontFamily';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { TextInput as PaperTextInput, Provider as PaperProvider } from 'react-native-paper';
import { launchImageLibrary } from 'react-native-image-picker';
import { FontAwesome } from '@expo/vector-icons';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const handleSave = () => {
    // Lógica de salvar
  };

  const handleSelectImage = () => {

  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Edição de dados</Text>
        
        <TouchableOpacity activeOpacity={0.8} style={styles.imageContainer} onPress={handleSelectImage}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.image} />
          ) : (
          <>
          <View style={styles.imagePlaceholderContainer}>
              <FontAwesome name='user-circle' size={80} color={colors.gray[600]}/>
          </View>
          <Text style={{color: colors.gray[800], fontFamily: fontFamily.bold, marginTop: 10}}>Selecione sua foto </Text>
          </>
          )}
        </TouchableOpacity>
        
        <PaperTextInput
          label="Nome"
          value={name}
          onChangeText={setName}
          style={styles.input}
          mode="outlined"
          theme={{ roundness: 5, colors: { primary: colors.pink } }}
        />

        <PaperTextInput
          label="E-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          mode="outlined"
          keyboardType="email-address"
          theme={{ roundness: 5, colors: { primary: colors.pink } }}
        />

        <PaperTextInput
          label="Idade"
          value={age}
          onChangeText={setAge}
          style={styles.input}
          mode="outlined"
          keyboardType="numeric"
          theme={{ roundness: 5, colors: { primary: colors.pink } }}
        />

        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={handleSave}>
          <Text style={{ color: colors.white, fontFamily: fontFamily.bold }}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    height: 150,
    width: 150,
    borderRadius: 75,
    backgroundColor: '#f0f0f0',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  imagePlaceholder: {
    color: '#a0a0a0',
    textAlign: 'center',
  },
  imagePlaceholderContainer: {
    backgroundColor: colors.black,
    height: 150,
    width: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  input: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.pink,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default Profile;
