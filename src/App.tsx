import React from 'react';
import './global.scss';
import s from './App.module.scss'
import { Card } from 'components';
import { ICardInfo } from 'components/Card/Card';

const mockData: ICardInfo = {
  title: 'Competitor research',
  category: {
    title: 'UX Stages',
    color: 'orange',
  },
  description: 'Research competitors and identify weakness and strengths each of them. Comparing their product features, quality...',
  progress: {
    done: 3,
    amount: 8,
  },
  members: [
    {
      id: 1,
      imageUrl: 'ava1.png',
    },
    {
      id: 2,
      imageUrl: 'ava2.png'
    },
    {
      id: 3,
      imageUrl: 'ava3.png'
    }
  ],
  views: 7,
  comments: [
    {
      author: 'Tommy',
      text: 'Good job'
    },
    {
      author: 'Jimmy',
      text: 'Thanks'
    }
  ]
}

function App() {
  return (
    <div className={s.app}>
      <div className={s.cards}>
        <Card cardInfo={mockData}/>
      </div>
    </div>
  );
}

export default App;
