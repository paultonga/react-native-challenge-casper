import React, {useCallback, useMemo, useState} from 'react';
import ScreenView from '../../components/ScreenView';
import Header from '../../components/Header';
import {Button, FlatList, Text, TextInput, TouchableOpacity} from 'react-native';
import {usePatientData} from '../../hooks/patient';
import Container from '../../components/Container';
import TextView from '../../components/TextView';
import {Patient} from '../../types/Patient';
import {styles} from './list.styles';
import { RadioGroup } from 'react-native-radio-buttons-group';
import { usePatientFilters } from '../../hooks/filters';
import { useNavigation } from '@react-navigation/native';
import { debounce } from '../../utils';

const List = () => {
  const navigation = useNavigation();
    const {clearFilter, filter, sortRecords, patients, searchRecords} = usePatientData();
  const {ageFilter, sortFilter, genderFilter } = usePatientFilters();
  const [query, setQuery] = useState<string | undefined>();
  const [gender, setGender] = useState('-1');
  const [age, setAge] = useState('-1');
  const [sortOrder, setSortOrder] = useState<string | undefined>();
const debouncedSearchRecords = debounce(searchRecords, 500);
  


  const onQueryChanged = (q: string) => {
    setQuery(q);
    
    debouncedSearchRecords(q);
  };

  const onClearFilter= () => {
    setAge('-1');
    setGender('-1');
    setQuery(undefined);
    setSortOrder(undefined);

    clearFilter();
  };

  const handleFilter = ()  => {
    const _gender = genderFilter[gender]?.value;
    const _age = ageFilter[age]?.value;
    filter(_age, _gender);
  };

  const onSelectGender = (g: string) => {
    setGender(g);
    handleFilter();
  };

  const onSelectAge = (a: string) => {
    setAge(a);
    handleFilter();
  };

  const onSelectSortOrder = (o: string) => {
    setSortOrder(o);
    const order = sortFilter[o]?.value;

    sortRecords(order);
  };

  
  return (
    <ScreenView>
      <Header headerTitle="Patients" />
      <TextInput style={styles.input} onChangeText={onQueryChanged} value={query} placeholder='Enter a search query'/>
      {patients?.length > 0 ? (
        <FlatList
        style={{flex: 1}}
        data={patients}
        contentContainerStyle={styles.contentContainer}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', {item})} style={styles.item}>
            <Container>
              <TextView customStyle={styles.name}> {`${item.first_name} ${item.last_name}`}</TextView>
              <TextView>{`Patient ID: ${item.patient_id}`}</TextView>
            </Container>
            <TextView customStyle={styles.caret}>></TextView>
          </TouchableOpacity>
        )}
      />
      ) : (
        <Container customStyle={styles.errorContainer}>
          <TextView customStyle={styles.name}>No records found.</TextView>
          <TextView>Please clear filter or search query</TextView>
        </Container>
      )}
      <Container customStyle={styles.filderContainer}>
      <TextView customStyle={styles.label}>
            Filter by gender
        </TextView>
        <RadioGroup 
            radioButtons={genderFilter} 
            onPress={onSelectGender}
            selectedId={gender}
            layout='row'/>
        <TextView customStyle={styles.label}>
            Filter by age
        </TextView>
        <RadioGroup 
            radioButtons={ageFilter} 
            onPress={onSelectAge}
            selectedId={age}
            layout='row'
        />
        <TextView customStyle={styles.label}>
            Sort record
        </TextView>
        <RadioGroup 
            radioButtons={sortFilter} 
            onPress={onSelectSortOrder}
            selectedId={sortOrder}
            layout='row'
        />
        <Container customStyle={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onClearFilter}>
            <TextView customStyle={styles.buttonLabel}>Clear Filters</TextView>
        </TouchableOpacity>
        </Container>
        
      </Container>
    </ScreenView>
  );
};

export default List;
