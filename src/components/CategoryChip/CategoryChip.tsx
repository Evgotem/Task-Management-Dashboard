import React, {FC} from "react";
import s from './CategoryChip.module.scss'
import clsx from "clsx";

interface CategoryChipProps {
  color: string;
  title: string;
}

export const CategoryChip: FC<CategoryChipProps> = ({color, title}) => {

  return (
    <div className={clsx(
      s.chip,
      s[color],
    )}>
      <span className={s.text}>
        {title}
      </span>
    </div>
  );
};
