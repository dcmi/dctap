//config file for adding timestamp to cookbook Markdown File

function getCurrentDateUTC() {
  options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };
  const date = new Date();
  const dateString = new Intl.DateTimeFormat("en-US", options).format(date);
  return dateString;
}

const replaceDateString =
  `<!-- date -->${getCurrentDateUTC()}<!-- datestop -->`;

module.exports = {
  from: /<!-- date -->(.*)<!-- datestop -->/g,
  to: replaceDateString,
};
