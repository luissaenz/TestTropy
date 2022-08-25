import React from 'react';
import RepositorieListItem from './RepositorieListItem';
//--
import ListGroup from 'react-bootstrap/ListGroup';

const RepositorieList = ({ Repos }) => {
  return (
    <div>
      <ListGroup as="ul">
        {Repos.map((r) => (
          <RepositorieListItem key={r.id} reposData={r} />
        ))}
      </ListGroup>
    </div>
  );
};

export default RepositorieList;
