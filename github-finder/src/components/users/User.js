import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from '../repos/Repos';
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, getUserRepos, repos } = githubContext;
  
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  // Empty bracket allows for conditional stops, but as an empty array it acts
  // as if it were componentDidMount()
  // The eslint disable line removes error where dependencies are being asked for 
  // that normally go within the empty array. In this case, it is asking for getUser
  // and getUserRepos, which if added will break the application in an endless loop
  
  // componentDidMount() {
  //   this.props.getUser(match.params.login);
  //   this.props.getUserRepos(match.params.login);
  // }

    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
			hireable,
      company,
    } = user;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to search
        </Link>
        Hireable:{" "}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt=""
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit GitHub Profile
            </a>
						<ul>
							<li>
								{login && (<Fragment>
									<strong>Username: </strong> {login}
								</Fragment>)}
							</li>
							<li>
								{company && (<Fragment>
									<strong>Company: </strong> {company}
								</Fragment>)}
							</li>
							<li>
								{blog && (<Fragment>
									<strong>Website: </strong> {blog}
								</Fragment>)}
							</li>
						</ul>
          </div>
        </div>
				<div className="card text-center">
					<div className="badge badge-primary">Followers: {followers}</div>
					<div className="badge badge-success">Following: {following}</div>
					<div className="badge badge-light">Public Repos: {public_repos}</div>
					<div className="badge badge-dark">Public Gists: {public_gists}</div>
				</div>
        <Repos repos={repos} />
      </Fragment>
    );
  }

export default User;


