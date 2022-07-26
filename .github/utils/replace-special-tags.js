//config file for replacing sepcial tags in cookbook Markdown File

function csvToMarkdown(csvContent, delimiter, hasHeader) {
  if (delimiter === void 0) {
    delimiter = "\t";
  }
  if (hasHeader === void 0) {
    hasHeader = false;
  }
  if (delimiter != "\t") {
    csvContent = csvContent.replace(/\t/g, "    ");
  }
  var columns = csvContent.split(/\r?\n/);
  var tabularData = [];
  var maxRowLen = [];
  columns.forEach(function (e, i) {
    if (typeof tabularData[i] == "undefined") {
      tabularData[i] = [];
    }
    var regex = new RegExp(delimiter + '(?![^"]*"\\B)');
    var row = e.split(regex);
    row.forEach(function (ee, ii) {
      if (typeof maxRowLen[ii] == "undefined") {
        maxRowLen[ii] = 0;
      }
      // escape pipes and backslashes
      ee = ee.replace(/(\||\\)/g, "\\$1");
      maxRowLen[ii] = Math.max(maxRowLen[ii], ee.length);
      tabularData[i][ii] = ee;
    });
  });
  var headerOutput = "";
  var seperatorOutput = "";
  maxRowLen.forEach(function (len) {
    var sizer = Array(len + 1 + 2);
    seperatorOutput += "|" + sizer.join("-");
    headerOutput += "|" + sizer.join(" ");
  });
  headerOutput += "| \n";
  seperatorOutput += "| \n";
  if (hasHeader) {
    headerOutput = "";
  }
  var rowOutput = "";
  tabularData.forEach(function (col, i) {
    maxRowLen.forEach(function (len, y) {
      var row = typeof col[y] == "undefined" ? "" : col[y];
      var spacing = Array(len - row.length + 1).join(" ");
      var out = "| " + row + spacing + " ";
      if (hasHeader && i === 0) {
        headerOutput += out;
      } else {
        rowOutput += out;
      }
    });
    if (hasHeader && i === 0) {
      headerOutput += "| \n";
    } else {
      rowOutput += "| \n";
    }
  });
  return "" + headerOutput + seperatorOutput + rowOutput;
}

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

function csvToMarkdownforCookbook(match) {
  const tableSCV = match
    .replace(/(?:<!-- csvtable(?:\s*stop)? -->)/gs, "")
    .trim();
  console.log(`Converting CSV to Markdown:\n${tableSCV}`);
  let markdownTable = csvToMarkdown(tableSCV, ",", true);
  console.log(`Generated:\n${markdownTable}`);
  return markdownTable;
}

const replaceDateString = `<!-- date -->${getCurrentDateUTC()}<!-- datestop -->`;

module.exports = {
  from: [
    /<!-- date -->(.*)<!-- datestop -->/g,
    /<!-- csvtable -->(.*?)<!-- csvtablestop -->/gs,
  ],
  to: [replaceDateString, (match) => csvToMarkdownforCookbook(match)],
};
