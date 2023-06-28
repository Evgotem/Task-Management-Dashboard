import React, { FC } from 'react';
import s from './Card.module.scss';
import { AiOutlineEye } from 'react-icons/ai';
import { TbMessage2 } from 'react-icons/tb';
import { GoPaperclip } from 'react-icons/go';

import { IProgress, } from "../Progress/Progress";
import {
  CategoryChip,
  CircleAvatar,
  Dropdown,
  Progress
} from "../index";

interface IMemberInfo {
  id: number,
  imageUrl: string,
}

interface IChipCategory {
  color: 'orange' | 'pink' | 'purple' | 'green',
  title: string,
}

interface IComments {
  author: string,
  text: string,
}

export interface ICardInfo {
  category: IChipCategory,
  title: string,
  description: string,
  progress: IProgress,
  members: IMemberInfo[],
  views: number,
  comments: IComments[],
}

interface CardProps {
  cardInfo: ICardInfo
}

export const Card: FC<CardProps> = ({cardInfo}) => {
  return (
    <div className={s.card}>
      <div className={s.container}>
        <div className={s.header}>
          <CategoryChip
            color={cardInfo.category.color}
            title={cardInfo.category.title}
          />
          <Dropdown/>
        </div>
        <div className={s.main_content}>
          <h2 className={s.title}>
            {cardInfo.title}
          </h2>
          <p className={s.description}>
            {cardInfo.description}
          </p>
          <Progress progress={cardInfo.progress}/>
        </div>
      </div>
      <div className={s.footer}>
        <div className={s.members}>
          {
            cardInfo.members.map((member, index) => {
              return (
                <span className={s.avatar} style={{zIndex: index, left: `${index * 18}px`}}>
                  <CircleAvatar key={member.id} imageUrl={member.imageUrl}/>
                </span>
              );
            })
          }
        </div>
        <div className={s.options}>
          <div>
            <AiOutlineEye className={s.options_icon}/>
            <span>
               {cardInfo.views}
            </span>
          </div>
          <div>
            <TbMessage2 className={s.options_icon}/>
            <span>
              {cardInfo.comments.length}
            </span>
          </div>
          <div>
            <GoPaperclip className={s.options_icon}/>
            <span>{3}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
