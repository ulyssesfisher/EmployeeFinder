const employees = require('../data/employees.js');

module.exports = function (app) {

  app.get('/api/employees', function (req, res) {
    res.json(employees);
  });

  app.post('/api/employees', function (req, res) {
    let match = {
      name: "",
      photo: "",
      employeeDifference: 40
    };

    const user = req.body;
    const userScores = user.scores;

    let diffSum;

    for (let i = 0; i < employees.length; i++) {
      let employee = employees[i];
      diffSum = 0;

      for (let j = 0; j < employee.scores.length; j++) {
        const employeeScore = employee.scores[j];
        const userScore = userScores[j];

        diffSum += Math.abs(
          parseInt(employeeScore) - parseInt(userScore)
        );
      }

      if (diffSum <= match.employeeDifference) {
        match.name = employee.name;
        match.photo = employee.photo;
        match.employeeDifference = diffSum;
      }
    }

    employees.push(user);
    res.json(match);
  });
}