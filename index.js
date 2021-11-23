const lodash = require('lodash');
const data1 = [
  {
  "age": 3,
  "name": "Curtis Greene",
  "email": "curtis.greene@zaj.ca",
  },
  {
  "age": 23,
  "name": "Nikki Lowe",
  "email": "nikki.lowe@darwinium.tv",
  },
  {
  "age": 39,
  "name": "Barr Copeland",
  "email": "barr.copeland@nipaz.me",
  },
  ];
  const data2 = [
  {
  "age": 29,
  "name": "Calhoun Woodward",
  "email": "calhoun.woodward@medmex.info",
  },
  {
  "age": 21,
  "name": "Leta Lee",
  "email": "leta.lee@qnekt.com",
  },
  {
  "age": 40,
  "name": "James Dinh",
  "email": "j.dink@erw.com",
  }
  ];
  //task 1
  const firstAnswer = lodash.findIndex(data1, (user)=> user.age === 23)

  //task 2 
  
  const secondAnswer = lodash.concat(data1,data2);
  //task 3
  const thirdAswer = lodash.omit(data1[1],['age']);

  //task 4
  const forthAnswer = {}
  for (let key in data1[1]){ if (key !== "age") forthAnswer[key] = data1[1][key]}