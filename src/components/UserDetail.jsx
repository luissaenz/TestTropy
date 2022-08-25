import React, { useEffect, useState } from 'react';
import axios from 'axios';
//----
import RepositorieList from './RepositorieList';
import Card from 'react-bootstrap/Card';
import Loading from './Loading';

const UserDetail = ({ userData }) => {
  const [Repos, setRepos] = useState([]);
  const [LoadingRepo, setLoadingRepo] = useState(true);

  useEffect(() => {
    getRepo();
  }, [userData]);

  function getRepo() {
    if (userData.id !== undefined) {
      axios({
        method: 'get',
        url: userData.repos_url,
      }).then((res) => {
        setRepos(res.data);
        setLoadingRepo(false);
      });
    }
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 10fr' }}>
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={userData.avatar_url} />
          <Card.Body>
            <Card.Title>{userData.login}</Card.Title>
            <Card.Text>
              {userData.bio}
              <br />
              Followers: {userData.followers}
              <br />
              Following: {userData.following}
              <br />
              Url: {userData.blog}
              <br />
              Twitter: {userData.twitter_username}
              <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        {!LoadingRepo ? <RepositorieList Repos={Repos} /> : <Loading />}
      </div>{' '}
    </div>
  );
};

export default UserDetail;
