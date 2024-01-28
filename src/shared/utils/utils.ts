export const dateTimeToLocaleString = (datetime: Date) => {
  return datetime.toLocaleString("en-US", {
    hour12: true,
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
};
