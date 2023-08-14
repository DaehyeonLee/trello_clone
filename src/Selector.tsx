import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function Selector() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChangeHanlder = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };
  return (
    <div>
      <input value={minutes} onChange={onMinutesChangeHanlder} type="number" placeholder="Minutes" />
      <input value={hours} onChange={onHoursChangeHandler} type="number" placeholder="Hours" />
    </div>
  );
}

export default Selector;
