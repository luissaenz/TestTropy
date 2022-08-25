import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const User404 = ({ Message, ButtonText, Path }) => {
  const navigate = useNavigate();

  function newSearch() {
    navigate(Path);
  }
  return (
    <div>
      <div>{Message}</div>
      {ButtonText !== '' ? (
        <Button onClick={newSearch} variant="primary">
          {ButtonText}
        </Button>
      ) : (
        ''
      )}
    </div>
  );
};

export default User404;
