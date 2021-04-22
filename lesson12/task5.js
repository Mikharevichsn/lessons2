// Выполнить рефакторинг используя цепочку методов flatMap и filter.

const courses = [
  {
    name: 'Basic HTML+CSS',
    topics: ['VSCode', 'HTML', 'CSS', 'GitHub Desktop', 'GitHub'],
  },
  {
    name: 'Intermediate HTML+CSS',
    topics: ['VSCode', 'Terminal', 'Git', 'GitHub', 'HTML', 'CSS'],
  },
  {
    name: 'Basic JavaScript',
    topics: [
      'VSCode',
      'Type system',
      'Loops',
      'Functions',
      'Conditions',
      'Classes',
      'DOM',
      'Git',
      'GitHub',
    ],
  },
  {
    name: 'Intermediate JavaScript',
    topics: [
      'VSCode',
      'NPM',
      'Bundlers',
      'Transpiling',
      'Promises',
      'AJAX',
      'Git',
      'GitHub',
    ],
  },
];

const uniqueTopics = courses
  .flatMap((el) => el.topics)
  .filter((el, index, arr) => arr.indexOf(el) === index);

console.log(uniqueTopics);
