import React, {useState, useContext, Suspense, lazy} from "react";
import "./Project.css";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../loading/Loading";
import profileData from "../../data/profile.json";
export default function Projects() {
  const GithubRepoCard = lazy(
    () => import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo] = useState(profileData.data.user.pinnedItems.edges);
  // todo: remove useContex because is not supported
  const {isDark} = useContext<any>(StyleContext);

  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              return (
                <GithubRepoCard
                  repo={v}
                  key={v.node.id}
                  isDark={isDark}
                  repoLogo={openSource.repoLogo}
                  repoFork={openSource.repoFork}
                  repoStar={openSource.repoStar}
                />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
