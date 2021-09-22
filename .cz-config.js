module.exports = {
  types: [
    { value: ":rocket:", name: "🚀 New functionality" },
    {
      value: " :pencil2:",
      name: "✏  Code refactoring",
    },
    {
      value: ":bug:",
      name: "🐛 Bug fix",
    },
    { value: ":construction:", name: "🚧 Under construction" },
    {
      value: ":test_tube:",
      name: "🧪 Tests creating/editing/deleting",
    },
    {
      value: ":art:",
      name: "🎨 Code structure / format improvement",
    },
    {
      value: ":fire:",
      name: "🔥 Delete code/file",
    },
    { value: ":memo:", name: "📝 Documentation creation/adjustment" },
    {
      value: ":wrench:",
      name: "🔧 Loudspeaker setting/creation",
    },
    {
      value: ":whale:",
      name: "🐳 Docker configuration",
    },
    { value: ":racehorse:", name: "🐴 Performance improvement" },
    {
      value: ":green_heart:",
      name: "💚 Correction build/continuous integrity (CI)",
    },
    {
      value: ":lock:",
      name: "🔒 Security improvement",
    },
    {
      value: ":arrow_up:",
      name: "⬆  Update of dependencies/modules",
    },
    {
      value: ":arrow_down:",
      name: "⬇  Downgrade of dependencies/modules",
    },
    { value: ":poop:", name: "💩 Deprecated" },
    { value: ":ghost:", name: "👻 Work around" },
    { value: ":gift:", name: "🎁 New version" },
    { value: ":tada:", name: "🎉 Frist project commit" },
  ],

  scopes: [
    { name: "feat" },
    { name: "refactor" },
    { name: "fix" },
    { name: "bugs" },
    { name: "test" },
    { name: "web" },
    { name: "mobile" },
    { name: "desktop" },
    { name: "api" },
    { name: "docs" },
    { name: "eslint" },
    { name: "prettier" },
    { name: "commitlint" },
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: "TICKET-",
  ticketNumberRegExp: "\\d{1,5}",

  messages: {
    type: "Select the type of change you are submitting:",
    scope: "\nIndicate the scope of this change (optional):",
    customScope: "Specify the scope of this change:",
    subject: "Write a brife and imperative description of the change:\n",
    body: 'Provide a more detailed description of the change (optional). Use ">" to break a new line:\n',
    breaking: "List any break changes (optional):\n",
    footer:
      "List any problems (issues) closed for this change (optional). For example: #31, #34:\n",
    confirmCommit: "Are you sure you want to proceed with the above commit?",
  },

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],

  subjectLimit: 80,
  breaklineChar: ">",
};
