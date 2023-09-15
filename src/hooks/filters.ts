import {useMemo} from 'react';
import {RadioButtonProps} from 'react-native-radio-buttons-group';
import {AGE_FILTERS, SORT_ORDER} from '../types/Patient';

export const usePatientFilters = () => {
  const genderFilter: RadioButtonProps[] = useMemo(
    () => [
      {
        id: '0',
        label: 'Female',
        value: 'Female',
      },
      {
        id: '1',
        label: 'Male',
        value: 'Male',
      },
    ],
    [],
  );

  const sortFilter: RadioButtonProps[] = useMemo(
    () => [
      {
        id: '0',
        label: 'Ascending',
        value: SORT_ORDER.ASC,
      },
      {
        id: '1',
        label: 'Descending',
        value: SORT_ORDER.DESC,
      },
    ],
    [],
  );

  const ageFilter: RadioButtonProps[] = useMemo(
    () => [
      {
        id: '0',
        label: '18 to 30',
        value: AGE_FILTERS.FROM_18_TO_30,
      },
      {
        id: '1',
        label: '31 to 45',
        value: AGE_FILTERS.FROM_31_TO_45,
      },
      {
        id: '2',
        label: '> 45',
        value: AGE_FILTERS.GREATER_THAN_45,
      },
    ],
    [],
  );

  return {genderFilter, ageFilter, sortFilter};
};
