require('babel-core/register');

var GitHubApi = require('github');

var github = new GitHubApi({
  version: '3.0.0',
  debug: false
});

github.repos.getCommits({
  user: 'rumpl',
  repo: 'naudio',
  per_page: 1
}, function (err, res) {
  console.log(JSON.stringify(res, null, 2));
});
