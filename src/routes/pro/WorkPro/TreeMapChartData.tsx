const calibrateTreeMapData: any = {
  "children": [
    {
      "name": "LMD",
      "children": [
        {
          "name": "React (hooks)",
          "group": "A",
          "value": 50,
          "colname": "level3"
        },
        {
          "name": "Enigma.js",
          "group": "A",
          "value": 10,
          "colname": "level3"
        },
        {
          "name": "Nebula.js",
          "group": "C",
          "value": 25,
          "colname": "level3"
        },
        {
          "name": "d3.js",
          "group": "C",
          "value": 5,
          "colname": "level3"
        },
        {
          "name": "Node.js",
          "group": "C",
          "value": 10,
          "colname": "level3"
        }
      ],
      "colname": "level2"
    },
    {
      "name": "LDS",
      "children": [
        {
          "name": "Python",
          "group": "C",
          "value": 100,
          "colname": "level3"
        },
      ],
      "colname": "level2"
    },
    {
      "name": "OMNIA",
      "children": [
        {
          "name": "React (hooks)",
          "group": "A",
          "value": 50,
          "colname": "level3"
        },
        {
          "name": "Enigma.js",
          "group": "A",
          "value": 35,
          "colname": "level3"
        },
        {
          "name": "d3.js",
          "group": "C",
          "value": 15,
          "colname": "level3"
        },
      ],
      "colname": "level2"
    },
    {
      "name": "CSP",
      "children": [
        {
          "name": "React (hooks)",
          "group": "A",
          "value": 100,
          "colname": "level3"
        },
      ],
      "colname": "level2"
    },
  ],
  "name": "% allocation per stack per project"
}

const calibrateDomain = [
  'LMD',
  'LDS',
  'OMNIA',
  'CSP',
]
const calibrateRangeColours = ['#1f3876', '#b01514', '#006408', '#fbdf00']

const arkeraTreeMapData: any = {
  "children": [
    {
      "name": "RepoUpdater",
      "children": [
        {
          "name": "Python",
          "group": "C",
          "value": 100,
          "colname": "level3"
        },
      ],
      "colname": "level2"
    },
    {
      "name": "Frontend Web App",
      "children": [
        {
          "name": "React (hooks)",
          "group": "A",
          "value": 35,
          "colname": "level3"
        },
        {
          "name": "React (class-based)",
          "group": "A",
          "value": 35,
          "colname": "level3"
        },
        {
          "name": "Typescript",
          "group": "A",
          "value": 30,
          "colname": "level3"
        },
      ],
      "colname": "level2"
    },
    {
      "name": "Host Control",
      "children": [
        {
          "name": "Python",
          "group": "A",
          "value": 60,
          "colname": "level3"
        },
        {
          "name": "Typescript",
          "group": "A",
          "value": 20,
          "colname": "level3"
        },
        {
          "name": "React (class-based)",
          "group": "A",
          "value": 20,
          "colname": "level3"
        },
      ],
      "colname": "level2"
    },
  ],
  "name": "% allocation per stack per project"
}

const arkeraDomain = [
  'RepoUpdater',
  'Frontend Web App',
  'Host Control',
]

const arkeraRangeColours = ['#b01514', '#1f3876', '#fbdf00']


export default {
  calibrate: {
    data: calibrateTreeMapData,
    domain: calibrateDomain,
    rangeColours: calibrateRangeColours
  },
  arkera: {
    data: arkeraTreeMapData,
    domain: arkeraDomain,
    rangeColours: arkeraRangeColours
  },
}