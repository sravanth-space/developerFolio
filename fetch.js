//fetch data from github and save it in public/profile.json and from medium to blogs.json
const fs = require("fs").promises;
const axios = require("axios");
const path = require("path");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.USERNAME_GITHUB;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;
const HASHNODE_USERNAME = process.env.HASHNODE_USERNAME;

// API URLs
const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";
const RSS2JSON_API_URL = "https://api.rss2json.com/v1/api.json";
const MEDIUM_RSS_URL = username => `https://medium.com/feed/@${username}`;
const HASHNODE_RSS_URL = "https://blogs.sravanth.co.uk/rss.xml";

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct.",
  requestFailedHashnode:
    "The request to Hashnode didn't succeed. Check if Hashnode username in your .env file is correct."
};

async function ensureDirectoryExists(filePath) {
  const dir = path.dirname(filePath);
  try {
    await fs.mkdir(dir, {recursive: true});
  } catch (err) {
    if (err.code !== "EEXIST") {
      throw err;
    }
  }
}

async function writeJsonFile(filePath, data) {
  await ensureDirectoryExists(filePath);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  console.log(`saved file to ${filePath}`);
}

async function fetchGitHubData() {
  if (USE_GITHUB_DATA !== "true") {
    return;
  }

  if (!GITHUB_USERNAME) {
    throw new Error(ERR.noUserName);
  }

  if (!GITHUB_TOKEN) {
    throw new Error(
      "GitHub token is required. Please set REACT_APP_GITHUB_TOKEN in your .env file."
    );
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);

  const query = {
    query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              homepageUrl
              repositoryTopics(first: 5) {
                edges {
                  node {
                    topic {
                      name
                    }
                  }
                }
              }
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
  };

  try {
    const response = await axios.post(GITHUB_GRAPHQL_URL, query, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
        "User-Agent": "DeveloperFolio"
      }
    });

    await writeJsonFile("./src/data/profile.json", response.data);
  } catch (error) {
    console.error("GitHub API Error:", error.response?.data || error.message);
    throw new Error(ERR.requestFailed);
  }
}

async function fetchMediumData() {
  if (!MEDIUM_USERNAME) {
    return;
  }

  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);

  try {
    const response = await axios.get(
      `${RSS2JSON_API_URL}?rss_url=${MEDIUM_RSS_URL(MEDIUM_USERNAME)}`
    );
    await writeJsonFile("./src/data/blogs.json", response.data);
  } catch (error) {
    console.error("Medium API Error:", error.response?.data || error.message);
    throw new Error(ERR.requestFailedMedium);
  }
}

async function fetchHashnodeData() {
  if (!HASHNODE_USERNAME) {
    return;
  }

  console.log(`Fetching Hashnode blogs data for ${HASHNODE_USERNAME}`);

  try {
    const response = await axios.get(
      `${RSS2JSON_API_URL}?rss_url=${HASHNODE_RSS_URL}`
    );
    await writeJsonFile("./src/data/hash-blogs.json", response.data);
  } catch (error) {
    console.error("Hashnode API Error:", error.response?.data || error.message);
    throw new Error(ERR.requestFailedHashnode);
  }
}

async function main() {
  console.log("Starting data fetch process...");

  const tasks = [
    {name: "GitHub", fn: fetchGitHubData},
    {name: "Medium", fn: fetchMediumData},
    {name: "Hashnode", fn: fetchHashnodeData}
  ];

  const results = await Promise.allSettled(
    tasks.map(async task => {
      try {
        await task.fn();
        console.log(`✅ ${task.name} data fetched successfully`);
        return {status: "fulfilled", name: task.name};
      } catch (error) {
        console.error(`❌ ${task.name} failed:`, error.message);
        return {status: "rejected", name: task.name, error: error.message};
      }
    })
  );

  const successful = results.filter(r => r.value?.status === "fulfilled");
  const failed = results.filter(r => r.value?.status === "rejected");

  console.log(
    `\n📊 Summary: ${successful.length} successful, ${failed.length} failed`
  );

  if (failed.length > 0) {
    console.log("Failed services:", failed.map(f => f.value.name).join(", "));
    process.exit(1);
  }

  console.log("🎉 All data fetched successfully!");
}

if (require.main === module) {
  main();
}
