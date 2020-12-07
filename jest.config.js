module.exports = {
    preset: '@shelf/jest-dynamodb',
    testResultsProcessor: 'jest-junit',
    reporters: [
        'default',
        [ 'jest-junit', {
          'outputDirectory': 'testing-reports',
          'outputName': 'jest-junit.xml',
        } ]
    ]
};