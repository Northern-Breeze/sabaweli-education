import * as React from 'react';

type result = {
    score: number;
    text: string;
}

type Props = {
    results: result[]
}

const FormatAnswers = (props: Props): JSX.Element => {
    const { results } = props
    if (results.length === 0) {
      return <div className='no-results'>No Answers found</div>;
    } else if (results.length !== 0) {
      return (
        <>
          {results.map((item, index: number) => {
            return (
              <div key={item.toString()}>
                <b>Answer {index + 1} - </b> {item.text}
                 - {Math.floor(item.score * 100) / 100} %
              </div>
            );
          })}
        </>
      );
    }
    return <></>;
  };

  export default FormatAnswers;