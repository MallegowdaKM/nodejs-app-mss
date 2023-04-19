const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'http://15.206.124.62:9000',
    token : "squ_1200e181937f34b25069b4460b4dce32a36b0e42",
    options: {
      'sonar.projectName': 'My App',
      'sonar.projectDescription': 'Description for "My App" project...',
      'sonar.sources': 'src',
      'sonar.tests': 'test'
    }
  },
  () => process.exit()
)

