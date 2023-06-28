import React, { FC } from "react";
import { BsListCheck } from "react-icons/bs";
import s from './Progress.module.scss'

export interface IProgress {
  done: number,
  amount: number,
}

interface ProgressProps {
  progress: IProgress
}

export const Progress: FC<ProgressProps> = ({progress}) => {
  return (
    <div className={s.progress}>
      <BsListCheck size={16}/>
      <div>
        <span>{progress.done}</span>
        /
        <span>{progress.amount}</span>
      </div>
    </div>
  );
};
