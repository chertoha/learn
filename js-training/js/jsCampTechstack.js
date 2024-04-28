//-----------------------------Constants-----------------------------------------------------------

const MIN_SPECIALIZATIONS_AMOUNT = 1;
const MAX_SPECIALIZATIONS_AMOUNT = 10;
const MIN_TEAM_SIZE = 1;
const MAX_TEAM_SIZE = 100;
const MIN_AFTER_TAX_SALARY = 100;
const MAX_AFTER_TAX_SALARY = 100000;

//-----------------------------Notifications--------------------------------------------------------
const notification = {
  SPECIALIZATIONS_AMOUNT_ERROR(value) {
    console.error(
      `'${value}' is not valid specializations amount. Minimum specializations amount is 1, maximum up to 10`,
    );
  },
  TEAM_SIZE_ERROR(value) {
    console.error(
      `'${value}' is not valid team members amount. Minimum team members amount is 1, maximum up to 100`,
    );
  },
  TAX_ERROR(value) {
    console.error(`'${value}' tax value is not valid. Tax has to be presented as string with template '{tax}%' where
'tax' is integer; min: "0%", max: "99%"`);
  },
  SALARY_ERROR(value) {
    console.error(
      `'${value}' salary after tax is not valid. Should be integer; min: 100, max: 100000`,
    );
  },
};

//----------------------------------------Main Report Function-------------------------------------
function calculateTeamFinanceReport(salaries, team) {
  if (!salariesValidation(salaries) || !teamValidation(team)) {
    return;
  }

  //Report generation
  let report = {};

  team.forEach(({ specialization }) => {
    if (!salaries[specialization]) {
      return;
    }

    const { salary, tax } = salaries[specialization];

    //Tax validation
    if (!taxValidation(tax) || !salaryValidation(salary)) {
      return;
    }

    const salaryBeforeTax = (salary / (100 - parseInt(tax))) * 100;
    report.totalBudgetTeam = (report.totalBudgetTeam || 0) + salaryBeforeTax;
    const reportSpecializationName = `totalBudget${specialization}`;
    report[reportSpecializationName] = (report[reportSpecializationName] || 0) + salaryBeforeTax;
  });

  //Report properties fractional part truncation
  Object.keys(report).forEach(key => (report[key] = Math.trunc(report[key])));

  return report;
}

//---------------------------Validation functions---------------------------------------------------

function salariesValidation(salaries) {
  const specializationsAmount = Object.keys(salaries).length;
  if (
    specializationsAmount < MIN_SPECIALIZATIONS_AMOUNT ||
    specializationsAmount > MAX_SPECIALIZATIONS_AMOUNT
  ) {
    notification.SPECIALIZATIONS_AMOUNT_ERROR(specializationsAmount);
    return false;
  }
  return true;
}

function teamValidation(team) {
  const teamMembersAmount = team.length;
  if (teamMembersAmount < MIN_TEAM_SIZE || teamMembersAmount > MAX_TEAM_SIZE) {
    notification.TEAM_SIZE_ERROR(teamMembersAmount);
    return false;
  }
  return true;
}

function taxValidation(tax) {
  if (!tax || typeof tax !== 'string' || !tax.match(/^[1-9][0-9]{0,1}%$/)) {
    notification.TAX_ERROR(tax);
    return false;
  }
  return true;
}

function salaryValidation(salary) {
  //   console.log(salary);
  if (
    !salary ||
    !Number.isInteger(salary) ||
    salary < MIN_AFTER_TAX_SALARY ||
    salary > MAX_AFTER_TAX_SALARY
  ) {
    notification.SALARY_ERROR(salary);
    return false;
  }
  return true;
}

//------------------------------Tests--------------------------------------------------------------

const salaries = {
  Progger: { salary: 1000, tax: '15%' },
  Tester: { salary: 1000, tax: '10%' },
};

const team = [
  { name: 'Masha', specialization: 'Progger' },
  { name: 'Vasya', specialization: 'Tester' },
  { name: 'Taras', specialization: 'Tester' },
];
const financeReport = calculateTeamFinanceReport(salaries, team);
console.log(JSON.stringify(financeReport));

const salaries1 = {
  Manager: { salary: 1000, tax: '10%' },
  Designer: { salary: 600, tax: '30%' },
  Artist: { salary: 1500, tax: '15%' },
};
const team1 = [
  { name: 'Misha', specialization: 'Manager' },
  { name: 'Max', specialization: 'Designer' },
  { name: 'Vova', specialization: 'Designer' },
  { name: 'Leo', specialization: 'Artist' },
];
const financeReport1 = calculateTeamFinanceReport(salaries1, team1);
console.log(JSON.stringify(financeReport1));

const salaries2 = {
  TeamLead: { salary: 1000, tax: '99%' },
  Architect: { salary: 9000, tax: '34%' },
};
const team2 = [
  { name: 'Alexander', specialization: 'TeamLead' },
  { name: 'Gaudi', specialization: 'Architect' },
  { name: 'Koolhas', specialization: 'Architect' },
  { name: 'Foster', specialization: 'Architect' },
  { name: 'Napoleon', specialization: 'General' },
];
const financeReport2 = calculateTeamFinanceReport(salaries2, team2);
console.log(JSON.stringify(financeReport2));

//------------------------------Results in console-----------------------------------
/*
{"totalBudgetTeam":3398,"totalBudgetProgger":1176,"totalBudgetTester":2222}
{"totalBudgetTeam":4590,"totalBudgetManager":1111,"totalBudgetDesigner":1714,"totalBudgetArtist":1764}
{"totalBudgetTeam":140909,"totalBudgetTeamLead":100000,"totalBudgetArchitect":40909}

*/
