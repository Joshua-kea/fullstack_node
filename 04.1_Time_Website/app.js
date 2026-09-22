const express = require("express");
const app = express();

app.use(express.json());

let hourlyPay = null;
let shiftStart = null;
const visitLog = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/shifts", (req, res) => {
  if (shiftStart !== null) {
    const earningProgress = calculateEarningProgress();
    res.send({ data: earningProgress });
  } else {
    res.status(404).send({ message: "No shift has been started yet." });
  }
});

app.get("/api/visits", (req, res) => {
  res.send({ data: visitLog });
});

app.post("/api/shifts", (req, res) => {
  const salaryType = req.body.salaryType;
  const salary = req.body.salary;

  if (salaryType === "monthly") {
    hourlyPay = convertToHourlyPay(salary);
  } else {
    hourlyPay = salary;
  }

  shiftStart = new Date();

  res.send({ data: shiftStart });
});

app.post("/api/visits", (req, res) => {
  const currentVisitTime = new Date();
  const lastVisit = new Date(visitLog.at(-1));

  let timeDifference = 0;
  let firstVisitorMessage = null;

  if (visitLog.length !== 0) {
    timeDifference = currentVisitTime.getTime() - lastVisit.getTime();
  } else {
    firstVisitorMessage = "No one has visited this page before you.";
  }

  visitLog.push(currentVisitTime);

  const formattedVisitLog = visitLog.map((visitTimestamp) =>
    visitTimestamp.toLocaleString("en-uk"),
  );
  const formattedTimeDifference = formatTimeDifference(timeDifference);

  res.send({
    data: formattedVisitLog,
    formattedTimeDifference,
    firstVisitorMessage,
  });
});

app.delete("/api/shifts", (req, res) => {
  if (shiftStart !== null) {
    const earningProgress = calculateEarningProgress();

    res.send({ data: earningProgress });

    shiftStart = null;
    hourlyPay = null;
  } else {
    res.status(404).send({ message: "No shift has been started yet." });
  }
});

function calculateMoneyEarned(hourlyWage, timeDifference) {
  const salaryPerMinute = hourlyWage / 60;
  const salaryPerSecond = salaryPerMinute / 60;

  return (salaryPerSecond * timeDifference) / 1000;
}

function convertToHourlyPay(monthlySalary) {
  const hoursPerMonth = 37 * 4.5;
  const salaryPerHour = monthlySalary / hoursPerMonth;

  return salaryPerHour;
}

function calculateEarningProgress() {
  const timeDifference = Date.now() - shiftStart.getTime();

  const moneyEarned = calculateMoneyEarned(hourlyPay, timeDifference);

  return moneyEarned;
}

function formatTimeDifference(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);

  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;
  const seconds = totalSeconds % 60;

  return `${days} Days, ${hours} Hours, ${minutes} Minutes, and ${seconds} Seconds since the last visit.`;
}

app.listen(8080, (error) => {
  if (error) {
    console.log("There was an issue with running the server", error);
    return;
  }
  console.log("Server is running on port", 8080);
});
