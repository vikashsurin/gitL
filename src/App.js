import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="start">
        <h1>Guide to git</h1>
        <p></p>
        <img />
      </div>
      --------xx-------
      <div className="init">
        <h1>initialize project</h1>
        <p>initialize a new project in a new or present working directory.</p>
        <code>git init</code>
        <p>
          <small>invisible git file is created.</small>
        </p>
      </div>
      -------------x------------
      <div className="add">
        <h2>stage file</h2>
        <p>Now scan for files and add them to queue.</p>
        <code>git add file.txt</code>
        <p>
          <small>add single file</small>
        </p>
        <p>All the files can be added at once.</p>
        <code>git add.</code>
        <p>
          <small>adds all the untracked files.</small>
        </p>
      </div>
      ---------------x---------------
      <div>
        <h2>Commitment</h2>
        <p>Now permanently record the files, also known as commit.</p>
        <code>git commit -m 'commit message'</code>
        <p>
          <small>
            commit the file or make it ready to be pushed
            <br />
            <code>-m</code> stands for message.
          </small>
        </p>
      </div>
      -------------------xx------------------
      <div>
        <h2>Where to push?</h2>
        <p>
          Now the files are ready but where to push.Lets connect to a link,so
          called repository Url.
        </p>
        <code>git remote add origin https://github.com/username/repo.git</code>
        <p>
          <small>the file will be sent via this url to the github repo</small>
        </p>
      </div>
      ---------------xxx-----------
      <div>
        <h2>Now push.</h2>
        <p>Now push all the files to the repository.</p>
        <code>git push -u origin master</code>
        <p>
          <small>
            the file would be uploaded to the github repo, where the url points
            to.
            <br />
            <code>-u</code> means untracked files
            <br />
            <code>origin</code> means the current repo url.it is used as an
            alias for url.
            <br />
            master is the default branch , Lets see branches next.
          </small>
        </p>
      </div>
      ----------------------xx-----------------------
      <div>
        <h2>branch story</h2>
        <img width="50%"src="https://images.pexels.com/photos/5158367/pexels-photo-5158367.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
        <img width="50%"src="https://images.pexels.com/photos/5158375/pexels-photo-5158375.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"alt="image"/>
      </div>
    </div>
  );
}

export default App;
