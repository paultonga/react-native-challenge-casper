import React, {createContext, useEffect, useState} from 'react';
import _patientsJson from '../data/mock_data.json';
import {AGE_FILTERS, Patient, SORT_ORDER} from '../types/Patient';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DataContextProps, DataProviderProps} from '../types/context';

// Create Data Context
export const DataContext = createContext<DataContextProps | undefined>(
  undefined,
);

// Data Context Provider
export function DataProvider({children}: DataProviderProps) {
  const navigation = useNavigation();
  const [backup, setBackup] = useState<Patient[]>();
  const [patients, setPatients] = useState<Patient[]>();
  const [filtered, setFiltered] = useState<Patient[]>([]);

  useEffect(() => {
    const _patients = _patientsJson as Patient[];
    setPatients(_patients);
    setBackup(_patients);
  }, []);

  const restoreData = () => {
    setPatients(backup);
    setFiltered([]);
  };

  const filterByGender = (filter: string) => {
    let result: Patient[] = [];
    backup?.forEach(p => {
      if (p.gender === filter) {
        result.push(p);
      }
    });
    setFiltered(result);
    return;
  };

  const filterByAge = (filter: string) => {
    let result: Patient[] = [];
    if (filter === AGE_FILTERS.FROM_18_TO_30) {
      backup?.forEach(p => {
        if (p.age >= 18 && p?.age <= 30) {
          result.push(p);
        }
      });
      setFiltered(result);
      return;
    }

    if (filter === AGE_FILTERS.FROM_31_TO_45) {
      backup?.forEach(p => {
        if (p.age >= 31 && p?.age <= 45) {
          result.push(p);
        }
      });
      setFiltered(result);
      return;
    }

    if (filter === AGE_FILTERS.GREATER_THAN_45) {
      backup?.forEach(p => {
        if (p.age > 45) {
          result.push(p);
        }
      });
      setFiltered(result);
      return;
    }
  };

  const filter = (age?: string, gender?: string) => {
    if (age || gender) {
      if (age) {
        filterByAge(age);
      }

      if (gender) {
        filterByGender(gender);
      }
      setPatients(filtered);
    }
  };

  const searchRecords = (q: string) => {
    let result: Patient[] = [];
    if (q.length >= 1) {
      const currentData = filtered.length > 0 ? filtered : backup;
      currentData?.forEach(p => {
        if (
          p.first_name?.includes(q) ||
          p.last_name?.includes(q) ||
          p.patient_id?.toString() === q ||
          p.email?.includes(q)
        ) {
          result.push(p);
        }
      });

      setPatients(result);
      setFiltered(result);
    } else {
      setPatients(backup);
    }
  };

  const processDelete = (id: number) => {
    const _p = patients?.filter(p => p.patient_id !== id);
    const _b = backup?.filter(p => p.patient_id !== id);
    const _f = filtered?.filter(p => p.patient_id !== id);

    setPatients(_p);
    setBackup(_b);
    setFiltered(_f);

    navigation.goBack();
  };

  const deleteRecord = (id: number) => {
    Alert.alert(
      'Confirm Delete',
      `Are you sure you want to delete ${id}?`,
      [
        {text: 'Confirm Delete', onPress: () => processDelete(id)},
        {text: 'Cancel', onPress: () => console.log('alert dismissed')},
      ],
      {cancelable: true},
    );
  };

  const sortRecords = (order: string) => {
    const currentData = filtered.length > 0 ? filtered : backup;
    function compare(a: Patient, b: Patient) {
      const a_fullName = `${a.first_name} ${a.last_name}`;
      const b_fullName = `${b.first_name} ${b.last_name}`;

      if (a_fullName < b_fullName) {
        return order === SORT_ORDER.ASC ? -1 : 1;
      }
      if (a_fullName > b_fullName) {
        return order === SORT_ORDER.ASC ? 1 : -1;
      }
      return 0;
    }
    currentData?.sort(compare);

    setPatients(currentData);
    setFiltered(currentData);
  };

  const contextValue: DataContextProps = {
    patients,
    searchRecords,
    deleteRecord,
    clearFilter: restoreData,
    filter,
    sortRecords,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}
