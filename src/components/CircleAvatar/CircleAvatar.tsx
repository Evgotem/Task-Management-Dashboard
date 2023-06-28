import React, {FC} from 'react';
import s from './CircleAvatar.module.scss'

interface CircleAvatarProps {
  imageUrl: string
}

export const CircleAvatar: FC<CircleAvatarProps> = ({imageUrl}) => {
  return (
    <img
      className={s.avatar}
      src={imageUrl}
      alt="avatar"
    />
  );
};
