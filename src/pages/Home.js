import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

const Home = ({navigation}) => {
  const [border, setBorder] = useState('#E9E9E9');
  const [value, setValue] = useState('');
  const onFocusForm = () => {
    setBorder('#52BF90');
  };
  const onBlurForm = () => {
    setBorder('#E9E9E9');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input(border)}
        placeholder="Input link pdf file"
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        value={value}
        onChangeText={text => setValue(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ViewPDF', {link: value})}>
        <Text style={styles.textButton}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '5%',
    backgroundColor: 'white',
  },
  input: border => ({
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: border,
    marginBottom: '8%',
  }),
  button: {
    borderRadius: 10,
    borderColor: '#52BF90',
    borderWidth: 1,
    paddingVertical: '4%',
    backgroundColor: '#52BF90',
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});
