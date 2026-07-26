const simpleGit = require('simple-git');
const jsonfile = require('jsonfile');
const moment = require('moment');

const path = './data.json';
const date = moment().format('YYYY-MM-DD HH:mm:ss');

const data = {
  date: date,
};

jsonfile.writeFileSync(path, data);

const git = simpleGit();
git.add([path])
  .then(() => git.commit(date))
  .then(() => git.push())
  .catch((err) => console.error('Git operation failed:', err.message));
