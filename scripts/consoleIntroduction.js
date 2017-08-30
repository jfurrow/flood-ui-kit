const chalk = require('chalk');
const pkgInfo = require('../package.json');

const centerText = (string = '', stringLength, referenceLength) => {
  if (stringLength > referenceLength) {
    return string;
  }

  const diff = referenceLength - stringLength;
  let paddingLeft = Math.floor(diff / 2);
  let paddingRight = paddingLeft;


  if (diff % 2 > 0) {
    paddingRight += diff % 2;
  }

  return ` ${Array(paddingLeft).join(' ')}${string}${Array(paddingRight).join(' ')} `;
}

const introString = `Building ${pkgInfo.name} for distribution...`;
const introStringStyled = `Building ${chalk.underline(pkgInfo.name)} for distribution...`;
const padding = 5;

module.exports = function () {
  const version = `v${pkgInfo.version}`;
  const headerWidth = introString.length + padding * 2;

  console.log(chalk.dim(Array(headerWidth + 1).join('-')));
  console.log(chalk.dim(centerText(chalk.bold(chalk.white(' ')), ' '.length, headerWidth)));
  console.log(chalk.dim(centerText(chalk.bold(chalk.white(introStringStyled)), introString.length, headerWidth)));
  console.log(chalk.dim(centerText(chalk.bold(chalk.dim(version)), version.length, headerWidth)));
  console.log(chalk.dim(centerText(chalk.bold(chalk.white(' ')), ' '.length, headerWidth)));
  console.log(chalk.dim(`${Array(headerWidth + 1).join('-')}\n`));
}
