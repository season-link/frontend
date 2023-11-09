import { getDocumentAsync } from 'expo-document-picker';
import { useState } from 'react';
import { ToastAndroid, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { DefaultStyle } from 'src/styles/default-style';

export const ResumeFragment = () => {
  const [hasResume, setResume] = useState(false);

  return (
    <View style={DefaultStyle.container}>
      <Text style={{ textAlign: 'center' }} variant='titleLarge'>
        Resume
      </Text>
      {!hasResume ? (
        <Button
          onPress={() => {
            ToastAndroid.show(` hello there !`, ToastAndroid.SHORT);

            getDocumentAsync({ multiple: false, type: 'application/pdf' }).then((value) => {
              ToastAndroid.show(`${Object.getOwnPropertyNames(value)}`, ToastAndroid.LONG);
              ToastAndroid.show(value.assets![0].name, ToastAndroid.LONG);
              setResume(true);
            });
          }}
        >
          Add Resume
        </Button>
      ) : null}

      {hasResume ? (
        <>
          <Button
            onPress={() => {
              ToastAndroid.show('Imagine it is downloading the CV', ToastAndroid.LONG);
            }}
          >
            View current resume
          </Button>
          <Button
            onPress={() => {
              setResume(false);
            }}
          >
            Delete Resume
          </Button>
        </>
      ) : null}

      <View style={{ backgroundColor: 'orange', display: 'flex', flexDirection: 'row' }}>
        <Button style={{ flexGrow: 1 }} onPress={() => {}}>
          {hasResume ? 'Cancel' : 'Previous'}
        </Button>
        <Button style={{ flexGrow: 1 }} onPress={() => {}}>
          {hasResume ? 'Done' : 'Skip'}
        </Button>
      </View>
    </View>
  );
};
