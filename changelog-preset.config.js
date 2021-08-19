const config = require('conventional-changelog-conventionalcommits')

const commit = `
*{{#if scope}} **{{scope}}:**
{{~/if}} {{#if subject}}
  {{~subject}}
{{~else}}
  {{~header}}
{{~/if}}

{{~!-- commit link --}}{{~#if hash}} {{#if @root.linkReferences~}}
  ([{{shortHash}}]({{commitUrlFormat}}))
{{~else}}
  {{~shortHash}}
{{~/if}}{{~/if}}

{{~!-- commit references --}}
{{~#if references~}}
  , closes
  {{~#each references}} {{#if @root.linkReferences~}}
    [
    {{~#if this.owner}}
      {{~this.owner}}/
    {{~/if}}
    {{~this.repository}}{{this.prefix}}{{this.issue}}]({{issueUrlFormat}})
  {{~else}}
    {{~#if this.owner}}
      {{~this.owner}}/
    {{~/if}}
    {{~this.repository}}{{this.prefix}}{{this.issue}}
  {{~/if}}{{/each}}
{{~/if}}
<br />
{{#if body}}
  {{body}}
{{~/if}}
`
module.exports = config({
  issuePrefixes: ["ch", "CH"],
  issueUrlFormat: "https://app.clubhouse.io/curbee/story/{{id}}",
  commitPartial: commit
})