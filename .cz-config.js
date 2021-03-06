module.exports = {
  types: [
    { value: ":rocket:", name: "๐ New functionality" },
    {
      value: " :pencil2:",
      name: "โ  Code refactoring",
    },
    {
      value: ":bug:",
      name: "๐ Bug fix",
    },
    { value: ":construction:", name: "๐ง Under construction" },
    {
      value: ":test_tube:",
      name: "๐งช Tests creating/editing/deleting",
    },
    {
      value: ":art:",
      name: "๐จ Code structure / format improvement",
    },
    {
      value: ":fire:",
      name: "๐ฅ Delete code/file",
    },
    { value: ":memo:", name: "๐ Documentation creation/adjustment" },
    {
      value: ":wrench:",
      name: "๐ง Loudspeaker setting/creation",
    },
    {
      value: ":whale:",
      name: "๐ณ Docker configuration",
    },
    { value: ":racehorse:", name: "๐ด Performance improvement" },
    {
      value: ":green_heart:",
      name: "๐ Correction build/continuous integrity (CI)",
    },
    {
      value: ":lock:",
      name: "๐ Security improvement",
    },
    {
      value: ":arrow_up:",
      name: "โฌ  Update of dependencies/modules",
    },
    {
      value: ":arrow_down:",
      name: "โฌ  Downgrade of dependencies/modules",
    },
    { value: ":poop:", name: "๐ฉ Deprecated" },
    { value: ":ghost:", name: "๐ป Work around" },
    { value: ":gift:", name: "๐ New version" },
    { value: ":tada:", name: "๐ Frist project commit" },
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
