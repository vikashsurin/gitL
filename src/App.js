import React from "react";

import "./style/app.scss";

function App() {
  return (
    <div className="App">
      <div className="start">
        <h1>Guide to git</h1>
        <p>by <a href="https://github.com/vikashsurin">vikashsurin</a></p>
        <p></p>
        <img />
      </div>

      --------xx-------
      <div className="init">
        <h1>initialize project</h1>
        <p>
          Create new github repository in an existing project directory or new
          project directory.
        </p>
        <code>git init</code>
        <br />

        <small>
          {" "}
          a file with .git extension is created, and is hidden by default.
        </small>
      </div>
      -------------x------------
      <div className="add">
        <h2>stage file</h2>
        <p>
          Now scan for new or existing modified files.Add them to stage, to be
          commited permanently.
        </p>
        <code>
          git add &#10094;<b>filename</b>&#10095;
        </code>
        <br />
        <small>adds a single file , ex:- file.txt</small>

        <p>
          Files can be added one by one like shown above or all at one time like
          shown below.
        </p>
        <code>git add.</code>
        <br />

        <small>
          the . after add means, all the files in current directory .
        </small>
      </div>
      ---------------x---------------
      <div>
        <h2>Commitment</h2>
        <p>
          Now permanently record the files, say commit files. Final task before
          pushing.It will commit to the files which were being added in the
          staging process.
        </p>
        <code>git commit -m 'commit message'</code>
        <br />

        <small>
          commit the file or make it ready to be pushed.
          <br />
          <icode>-m</icode> stands for message.
        </small>
      </div>
      -------------------xx------------------
      <div>
        <h2>Where to push?</h2>
        <p>
          Now the files are ready but where to push.Lets connect to a link,the
          repository url or the server.
        </p>
        <code>git remote add origin https://github.com/username/repo.git</code>
        <br />

        <small>
          the file will be sent via this url to the github repo
          <br />
          <icode>origin</icode>
          is an alias , it is storing the url.
        </small>
      </div>
      ---------------xxx-----------
      <div>
        <h2>Now push.</h2>
        <p>Now push all the files to the repository.</p>
        <code>git push -u origin master</code>
        <br />
        <small>
          the file would be uploaded to the github repo, where the url points
          to.
          <br />
          <icode>-u</icode> stands for untracked
          <br />
          <icode>origin</icode> means the current repo url.it is used as an
          alias for url.
          <br />
          master is the default branch , Lets see branches next.
        </small>
      </div>
      ----------------------xx-----------------------
      <div id="branch-story">
        <h2>branch story</h2>
        <div id="branch-img">
          <img src="https://images.pexels.com/photos/5158869/pexels-photo-5158869.png?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
          <p className="left">
            Have a look at the diagram and try to understand step by step.
            Master is the default branch and main branch of any github repo.
            Every app whether android, ios or web app, has a version.Yes the
            actual verion like version 00.1. With the release of each version
            bugs are fixed or features are added. But to fix bugs or work on new
            features,one should not do in the master branch itself,rather
            several branches can be created. This branches are just the copy of
            the master,so that the developer can work on the copy and modify it
            in isolation, without affecting the original code.
          </p>
          <div>
            <h4>create a new branch</h4>
            <code>
              git branch &#10094;<b>branchname</b>&#10095;
            </code>
            <br />
            <small>a new branch is created with</small>

            <h5>---List all the branches---</h5>
            <code>git branch</code>
            <br />
            <small>*master, branchX ,branchY</small>

            <h5>---switch to a different branch---</h5>
            <code>
              git checkout &#10094;<b>branchname</b>&#10095;
            </code>
            <br />
            <small>for ex:- git checkout branchX</small>
          </div>
          <img src="https://images.pexels.com/photos/5158367/pexels-photo-5158367.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <img
            src="https://images.pexels.com/photos/5158375/pexels-photo-5158375.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="image"
          />
          <div>
            <p className="left">
              A branch is only available to you, unless you push it to repo so
              that other can access it. By now we know how to stage(add), commit
              and push. -Let`s push..
            </p>

            <code>
              git push origin &#10094;<b>branchname</b>&#10095;
            </code>
            <br />
            <small>pushed to custom branch not master</small>

            <h4>Let`s see how to delete a branch</h4>

            <p className="left">
              When the purpose of the branch is met, it can be deleted.
            </p>
            <h5>---switch to master---</h5>
            <code>git checkout master</code>
            <br />
            <h5>
              <s>---now delete branch---</s>
              <br />
            </h5>
            <code>
              git branch -d &#10094;<b>branchname</b>&#10095;
            </code>
            <br />
            <small>
              in order to delete a branch you must switch to other branch first
              <br />
              <icode>-d</icode>
              stands for delete
            </small>
            <p className="left">
              But it does not end here, there are more concepts like{" "}
              <small>merge</small>, <small>pull</small> and many more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
