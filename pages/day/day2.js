import {useState} from "react";

export default function Day2() {

  const [strategyGuide, setStrategyGuide] = useState(undefined);
  const [score, setScore] = useState(undefined);

  const versusLegend =
    {
      'A Z': 0,
      'B X': 0,
      'C Y': 0,
      'A X': 3,
      'B Y': 3,
      'C Z': 3,
      'A Y': 6,
      'B Z': 6,
      'C X': 6
    };
  const scoreLegend = {'X': 1, 'Y': 2, 'Z': 3};

  const calculateScore = strategyGuide => {
    strategyGuide = strategyGuide.split('\n');

    let total = 0;
    for (let i in strategyGuide){
      total = total + scoreLegend[strategyGuide[i].substring(2,3)] + versusLegend[strategyGuide[i]];
    }
    setScore(total);
  }

  const handleChange = (e) => {
    setStrategyGuide(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateScore(strategyGuide);
  }

  return (
    <>
      <div className='puzzle'>
        <h3>--- Day 2: Rock Paper Scissors ---</h3>
        <p>
          The Elves begin to set up camp on the beach. To decide whose tent gets to be closest to the snack storage, a
          giant Rock Paper Scissors tournament is already in progress. Rock Paper Scissors is a game between two players.
          Each game contains many rounds; in each round, the players each simultaneously choose one of Rock, Paper, or
          Scissors using a hand shape. Then, a winner for that round is selected: Rock defeats Scissors, Scissors defeats
          Paper, and Paper defeats Rock. If both players choose the same shape, the round instead ends in a draw.
        </p>
        <p>
          Appreciative of your help yesterday, one Elf gives you an encrypted strategy guide (your puzzle input) that they
          say will be sure to help you win.
        </p>
        "The first column is what your opponent is going to play: A for Rock, B for Paper, and C for Scissors. The
        second column--" Suddenly, the Elf is called away to help with someone's tent.
        <p>
          The second column, you reason, must be what you should play in response: X for Rock, Y for Paper, and Z for
          Scissors. Winning every time would be suspicious, so the responses must have been carefully chosen.
        </p>
        The winner of the whole tournament is the player with the highest score. Your total score is the sum of your
        scores for each round. The score for a single round is the score for the shape you selected (1 for Rock, 2 for
        Paper, and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a
        draw, and 6 if you won).
        <p>
          Since you can't be sure if the Elf is trying to help you or trick you, you should calculate the score you would
          get if you were to follow the strategy guide.
        </p>
        <p>
          For example, suppose you were given the following strategy guide:
          <ul>
            <li>A Y</li>
            <li>B X</li>
            <li>C Z</li>
          </ul>
        </p>
        This strategy guide predicts and recommends the following:
        <p>
          In the first round, your opponent will choose Rock (A), and you should choose Paper (Y).<br/>
          This ends in a win for you with a score of 8 (2 because you chose Paper + 6 because you won).<br/>
          In the second round, your opponent will choose Paper (B), and you should choose Rock (X).<br/>
          This ends in a loss for you with a score of 1 (1 + 0).<br/>
          The third round is a draw with both players choosing Scissors, giving you a score of 3 + 3 = 6.
        </p >
        In this example, if you were to follow the strategy guide, you would get a total score of 15 (8 + 1 + 6).
        <br/><br/>
        <b>What would your total score be if everything goes exactly according to your strategy guide?</b>
      </div>
      <div className='solution'>
        <form onSubmit={handleSubmit}>
          <label>
            Submit your strategy guide:<br/>
            <textarea
              value={strategyGuide}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <input type='submit' value='Submit'  />
        </form>
        { (score !== 0 && score !== undefined)  && `The total score would be ${score}.`}
      </div>
    </>
  )
}