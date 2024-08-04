import React, { useEffect, useState } from 'react';

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const githubApiKey = import.meta.env.VITE_GITHUB_API_KEY;
  const githubApiUrl = import.meta.env.VITE_GITHUB_API_URL;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch( githubApiUrl, { // Replace 'URL key' with your GitHub personal access token
          headers: {
            Authorization: `token ${githubApiKey}`, // Replace 'API key' with your GitHub personal access token
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [githubApiKey]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section id="github-repos">
      <h2>My GitHub Repositories</h2>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GitHubRepos;