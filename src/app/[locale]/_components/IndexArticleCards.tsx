'use client'

import React from 'react';
import { Card } from '@chakra-ui/react';

interface IndexArticleProps {
  author: string,
  title: string,
  contentAbbr: string,
  likeCounts: number,
  commentCounts: number,
  date: Date
}

const IndexArticleCard: React.FC<IndexArticleProps[]> = ( indexArticles ) => {
  return(
    <Card></Card>
  );
}

export default IndexArticleCard