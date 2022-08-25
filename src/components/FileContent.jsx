import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FileContent = ({ userName, repoName, filePath }) => {
  const [fileData, setfileData] = useState([]);
  useEffect(() => {
    axios({
      method: 'get',
      //repos/:owner/:repo/contents/:path
      url: `https://api.github.com/repos/${userName}/${repoName}/contents/${filePath}`,
    }).then((res) => {
      setfileData(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <br />
      <div>File: {}</div>
    </div>
  );
};

export default FileContent;
