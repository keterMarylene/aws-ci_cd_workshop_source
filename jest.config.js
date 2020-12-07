module.exports = {
    preset: '@shelf/jest-dynamodb',
    reporters: [
        'default',
        [ 'jest-junit', {
          outputDirectory: 'testing-reports',
          outputName: 'jest-report',
        } ]
    ]
};