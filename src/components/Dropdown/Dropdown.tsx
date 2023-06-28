import React, { FC } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi'
import s from './Dropdown.module.scss'

interface DropdownProps {

}

export const Dropdown: FC<DropdownProps> = () => {
  return (
    <div className={s.dropdown}>
      <BiDotsVerticalRounded/>
    </div>
  );
};
