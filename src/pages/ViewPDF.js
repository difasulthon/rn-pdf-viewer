import React, {useState} from 'react';
import {StyleSheet, Alert} from 'react-native';
import PDFView from 'react-native-view-pdf';
import Loading from '../components/Loading';

const ViewPDF = ({route}) => {
  const [loading, setLoading] = useState(true);
  const link = route.params.link;

  const alertError = message => {
    Alert.alert('Error', `${message}`, [
      {
        text: 'OK',
        onPress: () => {
          return;
        },
      },
    ]);
  };

  const setLoadingFalse = () => {
    setLoading(false);
  };

  return (
    <>
      <PDFView
        style={styles.pdf}
        onError={error => alertError(error.message)}
        onLoad={setLoadingFalse}
        resource={link}
        resourceType="url"
      />
      {loading && <Loading />}
    </>
  );
};

export default ViewPDF;

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
  },
});
