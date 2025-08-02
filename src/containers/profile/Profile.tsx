import React, {useState, lazy, Suspense} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";
import profileData from "../../data/profile.json";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(
  () => import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  const [prof] = useState(profileData.data.user);
  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
