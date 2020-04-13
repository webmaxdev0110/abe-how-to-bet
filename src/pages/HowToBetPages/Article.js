import React, { useEffect } from 'react';
import Landing from './Landing';
import Betting101 from './Betting101';
import AdvancedBettingConcept from './AdvancedBettingConcept';
import SportsBettingBasics from './SportsBettingBasics';
import SportsBettingMarket from './SportsBettingMarket';

const Article = ({ match, location }) => {
  const { topic, article } = match.params;
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])

  if (topic === 'betting-101') {
    if (article === 'sports-betting-basics') {
      return <SportsBettingBasics />;
    }
    return <Betting101 />;
  }
  if (topic === 'advanced-betting-concepts') {
    if (article === 'sports-betting-market') {
      return <SportsBettingMarket />;
    }
    return <AdvancedBettingConcept />;
  }
  return <Landing />;
};

export default Article;
