const admin = require('firebase-admin');

const credentials = {
    projectId: "photodeck-f6521",
    clientEmail: "firebase-adminsdk-3x9wd@photodeck-f6521.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDqakvvFtiO+sLh\nM4UnnmqLQpeTNr1RzUaqg9OdbmOFA//zr07CcE7XjPOSa2G+57RUai6f5cwNLIe8\nAdDGFdh9zvBKQ8OnOs0bDpanp29JjORG8aHSJGb527Q3nu9un7tJiKITWfrdJaE3\nzoyTjB74JVjniPCuoP+Vw276quh2Ys34+MK5Ny7+m8Xhwzb1hIPr8c6MR4LUqbWC\n9ouJqJooVj6E5BrmNm/aCPgA8mS0/wsfynjMlK8sHcD68c49h2ScoqNGnSp56FsR\nJKjp+bfsoDqndLEjGiCzdvqvg3hw6U4SNh9HTZWYuf5TQlRm/568b9fxAwrEuDbn\nFtf6qEQdAgMBAAECggEALno46AS9l0u8y+3tHrfYJBhl+ThHPSrYMgLFOFekv8DV\nRLmjggXGfBJkUMmdrb4/EOWkrOthE9OabfpmLIA0Vm1rUy4wYr3T4ON5l3ApLooS\n0MYj8YhqKmwXRVfr3SEqfx/qErAqfyJw3qHDWZXUphqxj+ak4drmEgmXvXeZc68u\nQQhHlDhK3UMqHlDH4lHLZPFwboCgK1bIT7oIg8wBA9dQYQpxxWysXKaBKMAbm5rN\nDmgdINAwCAv+ou/CRpzoLClYLmrVz5+/zpBSBibfFiCjm+AK4Dnu7biMp1ySIjRh\nixZSgP7JH4C4GkZsOb1eSOtzYU3jVKKt8VPCEJp4eQKBgQD6gtWh+S+NQP7a55vV\nPrzIQ2aE+UOtJLqKQxd7x/5sMSPZnnpe9QZXGX9urGwyvJQ04V15QulQaVEw6gVI\nA/kwe1XruLl3aLm+KVY6yzzYPnzo462E1aon/f3eeSGnIlDF95c6lwF3TilqDX0E\n8Hz1eduoRfzALY9DVnMQWI9FnwKBgQDvjS1mZ4idfnMfq0BwHR2Y7hLYaRvlhyIz\n1Et+SOKMiQ8+FNA0cEDOxFed6cHN+MOPGRaY1fd6z6TUzj8gy3DVRDhWySGYxsJE\nNCCItSj4e/vNt0E6Z0UKA3YlygARtx8OyxGuhfQM/N2UfUdomUWMBHw5MEyc5IHp\nXAr82/hEwwKBgDa320gM8OkOuFxCWNSEZqHrrvn+pFyueBx5OSjtb1JcjXMcXahe\nJuthg2c+PEf8zvaZ/1vcVLAewQBJLawkSgrf9c2ORNyjQGccCly/ReQKCiioip9I\nOGmR3iD5HnOuWCxVv2+pykUwCnXCynsIuJK58lPYLbQgf3l66Zk5btoLAoGBAL6i\nQPDvj56WFJOtOth9syISw9iIvPSJ98P7PCDBa9ie8gxbj91LP6fMRFWcwuhhAW+N\nbZgvHoUTXX8kqsQ0YhS194fJA/2Knuqb+RAR6wrjz91D6prJt/1iB9HG0QtICWVC\nYU3bt/3l9YfHst4gq2Hj59+y+iUZC/FjmDLl8sr1AoGBAIro1eekxY7xggswhrIx\nO1Jy+k8LwHR6C2Wfwdgb4QkXKAv8BQvviMvkOUF9Xchuxfx6i75NuN3x6OiEH94p\nJdYVGiUKRxABcQ6Tlh/NJlNqBrpkd0qLawtqbSpfw1V6g7Tr0JQvrFuFBBFvBcEd\nk+HLwJGVqyJ8iTNvDjXVtsq4\n-----END PRIVATE KEY-----\n"
};

if (admin.apps.length === 0) {
  admin.initializeApp({
      credential: admin.credential.cert(credentials),
      databaseURL: "https://photodeck-f6521.firebaseio.com"
  });
}

module.exports = admin;
