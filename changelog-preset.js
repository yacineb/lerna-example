const config = require('conventional-changelog-conventionalcommits');
const { resolve } = require('path')

module.exports =  Promise.resolve()
.then(() => require('conventional-changelog-angular'))
.then(preset => {
    preset.issuePrefixes = ["ch", "CH"]
    preset.writerOpts.headerPartial = resolve("./header.hbs")
    preset.issueUrlFormat = "https://app.clubhouse.io/curbee/story/{{id}}"
    return preset
})