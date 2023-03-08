// Kulacaoglu, F., & Kose, S. (2018). Borderline personality disorder (BPD): In the midst of vulnerability, chaos, and awe. Brain sciences, 8(11), 201. doi:10.3390/brainsci8110201

// Helpers

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function capitalizeFirstLetters(words) {
  words = words.match(/[^\s]+/g);
  let output = "";
  for (let i = 0; i < words.length; i++) {
    output += capitalizeFirstLetter(words[i])[0] + words[i].slice(1) + " ";
  }
  return output.trim();
}

function makeShort(words) {
  words = words.match(/[^\s]+/g);
  let output = "";
  for (let i = 0; i < words.length; i++) {
    output += capitalizeFirstLetter(words[i])[0] + ". ";
  }
  return output.trim();
}

// Authors

function setAuthors(firstnames, surnames) {
  let output = "";
  const length = firstnames.length;
  for (let i = 0; i < length; i++) {
    output += `${capitalizeFirstLetters(surnames[i])}, ${makeShort(firstnames[i])}, `;
    // Two Authors
    if (length == 2 && i == 0) {
      output += "& ";
    }
    // More than 20 authors
    else if (length > 0 && i == 19) {
      output += `... ${capitalizeFirstLetters(surnames[length - 1])}, ${makeShort(firstnames[length - 1])}, `;
      return output;
    }
  }
  return output;
}

function setYear(year) {
  return `(${year}). `;
}

function setTitle(title) {
  return `${capitalizeFirstLetter(title)}. `;
}
function setJournal(journal) {
  return `${capitalizeFirstLetter(journal)}, `;
}

function setVolume(volume, issueNumber) {
  return `${volume}(${issueNumber}), `;
}

function setPages(start, end) {
  if (end) return `${start}-${end}. `;

  return `${start}. `;
}

function setDoi(doi) {
  return doi;
}

function setBiblio(firstnames, surnames, year, title, journal, volume, issueNumber, sPage, ePage, doi) {
  return `${setAuthors(firstnames, surnames)}${setYear(year)}${setTitle(title)}${setJournal(journal)}${setVolume(
    volume,
    issueNumber
  )}${setPages(sPage, ePage)}${setDoi(doi)}}`;
}

console.log(
  setBiblio(
    ["fatih", "sema"],
    ["kulac", "kose"],
    2018,
    "Borderline personality disorder (BPD): In the midst of vulnerability, chaos, and awe",
    "Brain sciences",
    8,
    11,
    201,
    null,
    "doi:10.3390/brainsci8110201"
  )
);
