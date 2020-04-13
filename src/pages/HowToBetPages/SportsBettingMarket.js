import React from 'react';
import { ArticleLayout, ArticleBottom } from '../../layout';
import { Heading, Paragraph, PageNavLink, ScrollUp } from '../../components';

const Page = () => (
  <>
    <ArticleLayout>
      <Heading fontSize="28" lineHeight="32">
        Viewing Sports Betting
        <br/>
        as a Market
      </Heading>
      <Paragraph top="21" align="justify">
        {`Imagine, if you will, a farmers market.`}
      </Paragraph>
      <Paragraph top="26" align="justify">
        {`On one side of the table, you've got a tomato seller, right next to an apple seller, right next to a mushroom seller, and so on. On the other side, you've got the public purchasing these freshly-grown yummies. The farmers grow the food, then sell it to the public, then the public eats it.`}
      </Paragraph>
      <Paragraph top="26" align="justify">
        {`Now imagine, if you will, a sports betting market. It has little in common with a farmers market, and not just because the betting market lacks organic food.`}
      </Paragraph>
      <Paragraph top="26" align="justify">
        {`For that matter, a betting market has little in common with any market -- okay, it's kinda similar to the stock market -- because when it comes to betting markets, the buyer is the seller, and the seller is the buyer.`}
      </Paragraph>
      <Heading top="50" fontSize="24" lineHeight="28">
        {`Wait, what?`}
      </Heading>
      <Paragraph top="26" align="justify">
        {`Let's use the oldest NFL rivalry to illustrate.`}
      </Paragraph>
      <Paragraph top="26" align="justify">
        {`Say the Green Bay Packers are hosting the Chicago Bears, and the odds are -150 on the Pack and +120 on the Bears. Over at your favorite online betting site or brick-and-mortar sportsbook, each bet placed on the Pack is a bet against the Bears, and each bet placed on the Bears is a bet against the Pack.`}
      </Paragraph>
      <Paragraph top="26" align="justify">
        {`When it comes to placing the bet, the bettors are giving the sportsbook their money, but they're not betting against the sportsbook -- they're betting against each other, thus they're buying a bet on their team, and selling a bet against the other.`}
      </Paragraph>
      <Heading top="50" fontSize="24" lineHeight="28">
        {`But what about the sportsbook?`}
      </Heading>
      <Paragraph top="26" align="justify">
        {`The sportsbook facilitates.`}
      </Paragraph>
      <Paragraph top="26" align="justify">
        {`The bookmaker acts as an intermediary, taking the action for himself and reselling it to the other side at a better price. They provide the liquidity -- i.e., the amount of money that can be bet on the market -- the pricing, and, most importantly, a guarantee that all the winners get their winnings.`}
      </Paragraph>
      <Paragraph top="26" align="justify">
        {`In order to keep their business afloat, the bookmaker tries to make the odds such that Packers and Bears bettors drop juice to place their bet, playing both sides for a guaranteed profit.`}
      </Paragraph>
      <Paragraph top="26" align="justify">
        {`The sportsbook, it should be noted, only makes money if their bookmaker's odds are on point. Bad odds lead to sportsbooks selling their product at a lower-than-necessary price, thus messing with their bottom line.`}
      </Paragraph>
      <Paragraph top="26" align="justify">
        {`This isn't particularly good for the betting market, who looks for reliability in their bookmakers. A consumer won't go back to the apple stand if they find worms in the apple core, and a bettor won't go back to a sportsbook if their odds are, um, wormy.`}
      </Paragraph>
      <Heading top="50" fontSize="24" lineHeight="28">
        {`Discover this`}
      </Heading>
      <Paragraph top="26" align="justify">
        {`Right about now, it's time to talk price discovery.`}
      </Paragraph>
      <Paragraph top="26" align="justify">
        {`Not all money in a betting market is considered equal. Sharp money, for instance, is notably good money.`}
      </Paragraph>
      <Paragraph top="26" align="justify">
        {`While determining the outcome of a moneyline bet is extremely straightforward - you win the bet if your chosen team wins - moneyline odds, or payouts, require some further explanation.`}
      </Paragraph>
      <Paragraph top="26" align="justify">
        {`Oddsmakers will look to see how sharp bettors -- those professional bettors who know as much, or more than anybody -- are placing their wagers, then they'll adjust their odds accordingly.`}
      </Paragraph>
      <Paragraph top="26" align="justify">
        {`Leading up to the event in question, a bookmaker's initial odds will be refined utilizing a variety of external factors (sharp money, player injuries, and inclement weather, to name a few). As it gets closer to game time, the final odds will be revealed to the betting market.`}
      </Paragraph>
      <Paragraph top="26" align="justify">
        {`The more money bet on the event, the more liquid the market, thus the more accurate that price will be in relation to a game's true probability, so don't be afraid to jump into a crowded betting market.`}
      </Paragraph>
      <Paragraph top="26" align="justify">
        {`But don't jump into a crowded farmers market. That could get messy.`}
      </Paragraph>
    </ArticleLayout>
    <ArticleBottom>
      <PageNavLink to="/how-to-bet/advanced-betting-concepts/implied-probability">next: Implied Probability</PageNavLink>
      <ScrollUp />
    </ArticleBottom>
  </>
);

export default Page;
