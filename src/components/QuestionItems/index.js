import React, { useState} from 'react';

const QuestionItems = (props) => {
  const{item} = props
  const [show, setShow] = useState(false);

  return (
    <div style={{ marginBottom: '20px' }}>
      <p dangerouslySetInnerHTML={{ __html: item.question }} />    

      <button onClick={() => setShow(!show)}>
        <strong>{show ? '-' : '+'}</strong>
      </button>
     
      {show && (
        <p style={{ color: 'green' }}>
          <strong>Answer: </strong>
          <span dangerouslySetInnerHTML={{ __html: item.correct_answer }} />
        </p>
      )}
      <hr />
    </div>
  );
};
export default QuestionItems