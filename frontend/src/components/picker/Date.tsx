import DDInput from '@/components/dropdown/DDInput';
import { days, months, years } from '@/components/picker/dates';
import * as React from 'react';

export type DDVal = {
  id: number;
  name: string;
};

const Date = ({
  dateDay,
  dateMonth,
  dateYear,
  setDateDay,
  setDateMonth,
  setDateYear,
}: {
  dateDay: DDVal,
  dateMonth: DDVal,
  dateYear: DDVal,
  setDateDay: (v: DDVal) => void
  setDateMonth: (v: DDVal) => void
  setDateYear: (v: DDVal) => void
}) => {
  return (
    <div className='flex flex-row rounded-b-md'>
      <DDInput data={days} selected={dateDay} setSelected={setDateDay} />
      <DDInput data={months} selected={dateMonth} setSelected={setDateMonth} />
      <DDInput data={years} selected={dateYear} setSelected={setDateYear} />
    </div>
  );
};

export default Date;
