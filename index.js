class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9'\- ]/g, "");
  }

  static titleize(string) {
    const arr = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from"
    ];
    let res = [];
    string.split(" ").map((item, index) => {
      if (index == 0) {
        res.push(Formatter.capitalize(item));
      } else {
        if (arr.includes(item)) {
          res.push(item);
        } else {
          res.push(Formatter.capitalize(item));
        }
      }
    });
    return res.join(" ");
  }
}
