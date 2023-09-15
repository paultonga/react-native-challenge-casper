import React from 'react';
import ScreenView from '../../components/ScreenView';
import Header from '../../components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackProps} from '../../navigation/AppNavigation';
import Container from '../../components/Container';
import {Image, TouchableOpacity} from 'react-native';
import TextView from '../../components/TextView';
import {styles} from './detail.styles';
import {usePatientData} from '../../hooks/patient';

type DetailProps = NativeStackScreenProps<AppStackProps, 'Detail'>;

const Detail: React.FC<DetailProps> = ({route}) => {
  const {item} = route.params;
  const {deleteRecord} = usePatientData();
  return (
    <ScreenView>
      <Header headerTitle="Patient Detail" hasBack />
      <Container customStyle={styles.mainContainer}>
        <Image
          source={{uri: item.avatar}}
          style={styles.avatar}
          resizeMode="cover"
        />
        <Container>
          <TextView
            customStyle={
              styles.fullName
            }>{`${item.first_name} ${item.last_name}`}</TextView>
          <TextView
            customStyle={
              styles.text
            }>{`Patient ID ${item.patient_id}`}</TextView>
          <TextView customStyle={styles.text}>{item.email}</TextView>
          <TextView
            customStyle={styles.text}>{`${item.age} years old`}</TextView>
          <TextView customStyle={styles.text}>{item.gender}</TextView>

          <TouchableOpacity
            style={styles.button}
            onPress={() => deleteRecord(item.patient_id)}>
            <TextView customStyle={styles.buttonText}>Delete Record</TextView>
          </TouchableOpacity>
        </Container>
      </Container>
    </ScreenView>
  );
};

export default Detail;
