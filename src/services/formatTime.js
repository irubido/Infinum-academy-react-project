export default function formatTime(time) {
  const hour = time.slice(11,19);
  const date = {
    day: time.slice(8,10),
    month: time.slice(8,10),
    year: time.slice(0,4)
  }
  return(
    `${hour} | ${date.day}.${date.month}.${date.year}`
    );
}