import React from 'react';
import styled from 'styled-components';
import { PageLayout } from '../../layout';
import { Heading, Paragraph, Anchor, Banner } from '../../components';
import FoxBet from './bets/FoxBet';
import PointsBet from './bets/PointsBet';
import InsightsShoe from './bets/InsightsShoe';
import Reviews from './bets/Reviews';
import InsightsTom from './bets/InsightsTom';
import Youtube from './bets/Youtube';

const StyledWrapper = styled.div`
  max-width: 100%;
  width: 620px;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
`;

const Page = () => (
  <PageLayout>
    <h1>
      Advanced
      <br />
      Betting Concepts
    </h1>
    <Paragraph top="45" fontSize="18" lineHeight="26" align="justify">
      {`Aliquet phasellus scelerisque mi turpis amet elit, pharetra sit ut magna augue diam natoque sit placerat non semper nascetur in mattis habitant faucibus feugiat ultrices dignissim lectus at felis neque, risus, sed gravida quam facilisi congue semper ornare faucibus platea mauris volutpat sed accumsan ullamcorper mollis gravida tincidunt quam quam donec nec scelerisque lectus sed consectetur sollicitudin vel sit vulputate elementum ac felis, vivamus nec accumsan sagittis, lectus tempus sed feugiat cursus lectus est quis suspendisse est duis facilisi a ut vitae egestas morbi nunc elementum aliquam eget feugiat ut aliquam vitae semper sit nunc pharetra ac nunc nulla.`}
    </Paragraph>
    <Banner top="40" />
    <Heading top="50" fontSize="24" lineHeight="28">
      {`Want to learn how to bet?`}
    </Heading>
    <Paragraph top="26" align="justify">
      {`abe’s fun and fast sports betting tutorial course helps users learn all they need to know to place their first bet. Check out our How to Bet module above to brush up on the basic and get ready to make your first wager.`}
    </Paragraph>
    <Heading top="26" fontSize="24" lineHeight="28">
      {`Why do people bet on sports?`}
    </Heading>
    <Paragraph top="26" align="justify">
      {`Betting makes watching sports more exciting, gives you something new to debate with friends and lets you prove your sports-brain superiority to the world.`}
    </Paragraph>
    <Paragraph top="26" align="justify">
      {`In a `}
      <Anchor href="#url">
        2019 interview on NPR's Fresh Air
      </Anchor>
      {`, actor/comedian Adam Sandler described the sheer excitement of sports betting to host Terry Gross.`}
    </Paragraph>
    <Paragraph top="26" align="justify">
      {`"When you bet on a game, [and] I do bet sometimes," Sandler said, "you watch so close when you have money on a game, and it means something to you. [But] it's not only the money. You made this decision in your head. You told everyone on the planet, this is going to happen."`}
    </Paragraph>
    <Paragraph top="26" align="justify">
      {`Sandler continued, "So you're watching the game with a different energy. And honest to God, when you make a bet on something and the game starts at 7:05, your body is shaking at two in the afternoon going, it's coming. It's coming. When you get to that actual game, there is so much excitement, you can't contain it."`}
    </Paragraph>
    <Paragraph top="26" align="justify">
      {`Sounds awesome, right?`}
    </Paragraph>
    <Paragraph top="26" align="justify">
      {`Well, it is.`}
    </Paragraph>
    <Paragraph top="26" align="justify">
      {`As we get ready to dive into the world of wagering, it's critical to understand the three basic types of bets you'll encounter in the sports betting world: moneyline, point spread (often just referred to as a "spread" or "spread betting") and total (sometimes called the over/under).`}
    </Paragraph>
    <Paragraph top="26" align="justify">
      {`Once you master the three main bet types, you'll be one step closer to becoming a sports betting samurai, armed with the knowledge you need to take on the competition.`}
    </Paragraph>
    <StyledWrapper>
      <FoxBet />
      <PointsBet />
    </StyledWrapper>
    <Heading top="50" fontSize="24" lineHeight="28">
      {`What is a moneyline?`}
    </Heading>
    <Paragraph top="26" align="justify">
      {`When you make a moneyline bet (some spell it "money line"), you're making an outright call on which team will win in a head-to-head contest (except in the rare case of European Football, in which you can also bet on a tie). Betting terminology can be confusing, so it may be helpful to remember that in a moneyline bet, you're putting your money on the line in anticipation of your chosen team winning the game.`}
    </Paragraph>
    <Paragraph top="26" align="justify">
      {`While determining the outcome of a moneyline bet is extremely straightforward - you win the bet if your chosen team wins - moneyline odds, or payouts, require some further explanation. Check out our detailed explanation of moneyline bets `}
      <Anchor href="#url">
        here
      </Anchor>
      {` to learn more.`}
    </Paragraph>
    <Heading top="26" fontSize="24" lineHeight="28">
      {`How do I read a point spread?`}
    </Heading>
    <Paragraph top="26" align="justify">
      {`A great equalizer, point spreads add even more intrigue to the betting proceedings, often turning a lopsided game into a thrill ride. If you're familiar with golf handicaps, this is a similar concept. The spread aims to level out the playing field by adding or subtracting points from a team's actual score in order to determine their score for betting purposes. When you look at a spread bet, you’ll see a plus or minus with a number next to it - the spread - alongside the “price” of the bet - typically 100 to 110. Simply take the actual score in the game and add or subtract the spread (depending on whether the number is positive or negative) in order to arrive at the game’s score for betting purposes. Whichever team has the highest spread-adjusted score wins the game for the purposes of the bet. `}
      <Anchor href="#url">
        Click here
      </Anchor>
      {` to learn more about spread bets`}
    </Paragraph>
    <Heading top="26" fontSize="24" lineHeight="28">
      {`What is an over/under bet?`}
    </Heading>
    <Paragraph top="26" align="justify">
      {`An over/under bet is a wager on the total amounts scored by both teams combined. If the over/under on an NBA game is 200, for example, and you bet the over, you win if the score of both teams added together is greater than 200. If you bet the under, you win if the combined scores sum to less than 200.`}
    </Paragraph>
    <StyledWrapper>
      <InsightsTom />
      <Reviews />
    </StyledWrapper>
    <Heading top="50" fontSize="24" lineHeight="28">
      {`What is a total bet?`}
    </Heading>
    <Paragraph top="26" align="justify">
      {`A total is another term for an over/under bet since you’re betting on the total score of the game.`}
    </Paragraph>
    <Heading top="26" fontSize="24" lineHeight="28">
      {`What is a parlay?`}
    </Heading>
    <Paragraph top="26" align="justify">
      {`A parlay is a single wager with multiple bets, all of which must be fulfilled to win. For instance, your parlay from a Houston Rockets/San Antonio Spurs game might include the Spurs winning the tipoff, then the Rockets leading at halftime, then James Harden scoring more than 25 points. While parlays typically have large payouts, they're also inherently lower probability bets given the math behind `}
      <Anchor href="#url">
        conditional probability.
      </Anchor>
    </Paragraph>
    <Heading top="26" fontSize="24" lineHeight="28">
      {`How do I learn about advanced betting strategies?`}
    </Heading>
    <Paragraph top="26" align="justify">
      {`In addition to the how to bet tutorials above, you can also delve into more complex betting concepts like `}
      <Anchor href="#url">
        implied probability
      </Anchor>
      {`, synthetic yield and viewing sports betting as market.`}
    </Paragraph>
    <Heading top="26" fontSize="24" lineHeight="28">
      {`How can I suggest a sports betting topic for abe to cover?`}
    </Heading>
    <Paragraph top="26" align="justify">
      {`Shoot an e-mail to `}
      <Anchor href="mailto:crew@abebets.com">
        crew@abebets.com
      </Anchor>
      {` with any questions, suggestions or concerns, and we’ll make sure to address them.`}
    </Paragraph>
    <StyledWrapper>
      <InsightsShoe />
      <Youtube />
    </StyledWrapper>
  </PageLayout>
);

export default Page;
