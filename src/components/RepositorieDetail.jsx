import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';
import FileContent from './FileContent';

const RepositorieDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const repoName = params.repoName;
  const userName = params.userName;
  const [repoData, setRepoData] = useState([]);
  const [repoCont, setRepoCont] = useState([]);
  const [repoFolder, setRepoFolder] = useState([]);
  const [LoadingRepoContent, setLoadingRepoContent] = useState(true);
  const [filePath, setFilePath] = useState('');

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://api.github.com/repos/${userName}/${repoName}`,
    }).then((res) => {
      setRepoData(res.data);
      //console.log(res.data);
    });
  }, []);
  useEffect(() => {
    setLoadingRepoContent(true);
    axios({
      method: 'get',
      url: `https://api.github.com/repos/${userName}/${repoName}/contents/${repoFolder.join(
        '/'
      )}`,
    }).then((res) => {
      setRepoCont(res.data);
      setLoadingRepoContent(false);
      console.log(res.data);
    });
  }, [repoFolder]);

  return (
    <div>
      {!LoadingRepoContent ? (
        <div>
          <div>
            <b> Profile:</b>{' '}
            <a href="#" onClick={() => navigate(`/users/${userName}`)}>
              {userName}
            </a>
            <b> Repositorie:</b>{' '}
            <a href="#" onClick={() => setRepoFolder([])}>
              {repoData.name}
            </a>
            /
            {repoFolder.map((item, i) => (
              <span key={i}>
                <a
                  href="#"
                  onClick={() => setRepoFolder(repoFolder.slice(0, i + 1))}
                >
                  {item}
                </a>
                /
              </span>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '9fr 3fr' }}>
            <div>
              {repoCont.map((content, i) => (
                <div key={i}>
                  {content.type === 'dir' ? (
                    <a
                      href="#"
                      onClick={() =>
                        setRepoFolder((repoFolder) => [
                          ...repoFolder,
                          content.name,
                        ])
                      }
                    >
                      [{content.type}] {content.name}
                    </a>
                  ) : (
                    <a href="#" onClick={() => setFilePath(content.path)}>
                      [{content.type}] | {content.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div>
              {' '}
              <div>
                <b>About: </b>
                {repoData.description}
              </div>
              <div>
                <b>Link: </b>
                {repoData.homepage}
              </div>
              <div>
                <b>Stars: </b>
                {repoData.stargazers_count}
              </div>
              <div>
                <b>Watching: </b>
                {repoData.watchers}
              </div>
              <div>
                <b>Forks: </b>
                {repoData.forks_count}
              </div>
            </div>
          </div>
          {filePath != '' ? (
            <FileContent
              userName={userName}
              repoName={repoName}
              filePath={filePath}
            />
          ) : (
            ''
          )}
        </div>
      ) : (
        <Loading />
      )}{' '}
    </div>
  );
};

export default RepositorieDetail;
