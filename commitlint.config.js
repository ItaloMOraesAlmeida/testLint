module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(.*\w*)\((\w*)\): (.*)$/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 80],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        ':tada:',
        ':art:',
        ':pencil2:',
        ':racehorse:',
        ':memo:',
        ':wrench:',
        ':bug:',
        ':wrench:',
        ':fire:',
        ':whale:',
        ':green_heart:',
        ':white_check_mark:',
        ':warning:',
        ':lock:',
        ':arrow_up:',
        ':arrow_down:',
        ':poop:',
        ':construction:',
        ':rocket:',
        ':see_no_evil:',
        ':gift:',
      ],
    ],
  },
};
