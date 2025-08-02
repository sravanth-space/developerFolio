import React from "react";
import "./GithubRepoCard.css";
import {Fade} from "react-awesome-reveal";

export default function GithubRepoCard({
  repo,
  isDark,
  repoLogo,
  repoFork,
  repoStar
}) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win!.focus();
  }
  // const {repoLogo, repoFork, repoStar} = openSource;
  return (
    <Fade duration={1000}>
      <div>
        <div
          className={isDark ? "dark-card-mode repo-card-div" : "repo-card-div"}
          key={repo.node.id}
          onClick={() => openRepoinNewTab(repo.node.homepageUrl)}
        >
          <div className="repo-name-div">
            <img src={repoLogo} alt={"repoLogo"} />
            <p className="repo-name">{repo.node.name}</p>
          </div>
          <p className="repo-description">{repo.node.description}</p>
          <div className="repo-stats">
            <div className="repo-left-stat">
              {repo.node.primaryLanguage !== null && (
                <span>
                  <div
                    className="language-color"
                    style={{backgroundColor: repo.node.primaryLanguage.color}}
                  ></div>
                  <p>{repo.node.primaryLanguage.name}</p>
                </span>
              )}
              <span>
                {/* <RepoFork /> */}
                <img src={repoFork} alt={"repoFork"} />
                <p>{repo.node.forkCount}</p>
              </span>
              <span>
                {/* <RepoStar /> */}
                <img src={repoStar} alt={"repoStar"} />
                <p>{repo.node.stargazers.totalCount}</p>
              </span>
            </div>
            <div className="repo-right-stat">
              <p>{repo.node.diskUsage} KB</p>
            </div>
          </div>
          <div className="repo-card-topic">
            {repo.node.repositoryTopics.edges.map((v, i) => {
              return (
                <span
                  key={i}
                  className={isDark ? "dark-mode repo-topic" : "repo-topic"}
                >
                  {v.node.topic.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
