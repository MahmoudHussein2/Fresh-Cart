export function calcTimeLeft(targetDate) {
  if (!targetDate) targetDate = new Date().setHours(23, 59, 59, 999);
  const timeLeft = targetDate - new Date().getTime();
  const OneHourMS = 60 * 60 * 1000;
  const OneMinMS = 60 * 1000;
  const OneSecMS = 1000;

  if (timeLeft > 0) {
    const hours = Math.trunc(timeLeft / OneHourMS);
    const Minutes = Math.trunc((timeLeft % OneHourMS) / OneMinMS);
    const seconds = Math.trunc(((timeLeft % OneHourMS) % OneMinMS) / OneSecMS);
    return { hours, Minutes, seconds };
  } else {
    return { hours: 0, Minutes: 0, seconds: 0 };
  }
}
