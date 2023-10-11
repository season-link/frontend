import { StyleSheet } from 'react-native';

export const DefaultRootStyle = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    flexDirection: 'column',
    marginHorizontal: 5,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
});

export const DefaultStyle = StyleSheet.create({
  container: {
    flex: 0,
    gap: 10,
    flexDirection: 'column',
    marginHorizontal: 5,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
});
