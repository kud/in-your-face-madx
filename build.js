const fs = require("fs")
const errors = require("./errors.json")

function buildPage({ code, title, text, svg }) {
  return `
<!doctype html>
<html>
  <title>${title}</title>
</html>
<body style="background-image: url('data:image/svg.xml;utf8,${svg.replace(
    '"',
    "&quot;",
  )})">
  <h1>${title}</h1>
  <p>
    ${text}
  </p>
</body>
`.trim()
}

for (const error of errors) {
  fs.writeFileSync(`dist/${error.code}.html`, buildPage(error))
}
