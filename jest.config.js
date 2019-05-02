/**
 * https://dl2.dev - DL2 IT Services Ltd
 * Owlsome solutions. Owltstanding results.
 */

/* eslint-disable max-len */
module.exports = {
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'test-file-stub',
    '^./style$': 'identity-obj-proxy',
    '^create-react-class$': 'preact-compat/lib/create-react-class',
    '^preact$': '<rootDir>/node_modules/preact/dist/preact.min.js',
    '^react-addons-css-transition-group$': 'preact-css-transition-group',
    '^react-dom$': 'preact-compat',
    '^react$': 'preact-compat',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '(/(__tests__|tests)/.*|(\\.|/)(test|spec))\\.tsx?$',
  testURL: 'http://localhost:8080',
  verbose: true,
};
