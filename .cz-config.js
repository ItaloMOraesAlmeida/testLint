module.exports = {
  types: [
    { value: ":tada:", name: "🎉 :    Frist project commit" },
    {
      value: ":art:",
      name: "🎨 :    Code structure / format improvement",
    },
    {
      value: " :pencil2:",
      name: "✏ :    Code refactoring",
    },
    { value: ":racehorse:", name: "🐴 :    Performance improvement" },
    { value: ":memo:", name: "📝 :    Documentation creation/adjustment" },
    {
      value: ":bug:",
      name: "🐛 :    Bug fix",
    },
    {
      value: ":wrench:",
      name: "🔧 :    Loudspeaker setting/creation",
    },
    {
      value: ":fire:",
      name: "🔥 :    Delete code/file",
    },
    {
      value: ":whale:",
      name: "🐳 :    Docker configuration",
    },
    {
      value: ":green_heart:",
      name: "💚 :    Correction build/continuous integrity (CI)",
    },
    {
      value: ":warning:",
      name: "⚠ :    Tests creating/editing/deleting",
    },
    {
      value: ":lock:",
      name: "🔒 :    Security improvement",
    },
    {
      value: ":arrow_up:",
      name: "⬆ :    Update of dependencies/modules",
    },
    {
      value: ":arrow_down:",
      name: "⬇ :    Downgrade of dependencies/modules",
    },
    { value: ":poop:", name: "💩 :    Deprecated" },
    { value: ":construction:", name: "🚧 :    Under construction" },
    { value: ":rocket:", name: "🚀 :    New functionality" },
    { value: ":ghost:", name: "👻 :    Work around" },
    { value: ":gift:", name: "🎁 :    New version" },
  ],

  scopes: [
    { name: "refactor" },
    { name: "feat" },
    { name: "fix" },
    { name: "docs" },
    { name: "test" },
    { name: "bugs" },
    { name: "eslint" },
    { name: "prettier" },
    { name: "commitlint" },
    { name: "api" },
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: "TICKET-",
  ticketNumberRegExp: "\\d{1,5}",

  // it needs to match the value for field type. Eg.: 'fix'
  /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change you are submitting:",
    scope: "\nIndicate the scope of this change (optional):",
    customScope: "Specify the scope of this change:",
    subject: "Write a brife and imperative description of the change:\n",
    body: 'Provide a more detailed description of the change (optional). Use "|" to break a new line:\n',
    breaking: "List any break changes (optional):\n",
    footer:
      "List any problems (issues) closed for this change (optional). For example: #31, #34:\n",
    confirmCommit: "Are you sure you want to proceed with the above commit?",
  },

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  // skip any questions you want
  // skipQuestions: ["body"],

  // limit subject length
  subjectLimit: 100,
  breaklineChar: "|", // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
