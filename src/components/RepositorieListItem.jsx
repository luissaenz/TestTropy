import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const RepositorieListItem = ({ reposData }) => {
  return (
    <ListGroup.Item
      key={reposData.id}
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          <Link to={reposData.name}>{reposData.name}</Link>
        </div>
        {reposData.description}
        <div>
          forks: {reposData.forks} | starts: {reposData.stargazers_count} |
          language: {reposData.language}
        </div>
      </div>
      <Badge bg="primary" pill>
        {reposData.private === false ? 'Public' : 'Private'}
      </Badge>
    </ListGroup.Item>
  );
};

export default RepositorieListItem;
