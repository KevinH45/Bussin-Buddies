import DDInput from '@/components/dropdown/DDInput';
import {hours, minutes} from "@/components/picker/time";
import * as React from 'react';

export type DDVal = {
  id: number;
  name: string;
};

const Date = ({
  timeHour,
  timeMinute,
  setTimeHour,
  setTimeMinute,
}: {
  timeHour: DDVal,
  timeMinute: DDVal,
  setTimeHour: (v: DDVal) => void
  setTimeMinute: (v: DDVal) => void
}) => {
  return (
    <div className='flex flex-row rounded-b-md'>
      <DDInput data={hours} selected={timeHour} setSelected={setTimeHour} />
      <DDInput data={minutes} selected={timeMinute} setSelected={setTimeMinute} />
    </div>
  );
};

export default Date;
