module.exports = {
  project: {
    android: {},
    ios: {},
  },
  assets: ['./src/assets/fonts/'],
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer');
  },
  getSourceExts() {
    return ['tsx', 'ts'];
  },
};
