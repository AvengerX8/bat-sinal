import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  formContainer: {
    alignItems: 'center',
  },
  inputs: {
    borderWidth: 5,
    backgroundColor: 'yellow',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    width: 350,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  formBtn: {
    backgroundColor: '#39382a',
    color: 'yellow',
    textAlign: 'center',
    width: 190,
    fontSize: 20,
    paddingVertical: 10,
    margin: 10
  },
  img: {
    alignSelf: 'flex-start',
    width: 100,
    height: 100,
  },
  label: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'flex-start'
  }
});