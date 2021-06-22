// const canvas = document.querySelector('canvas')
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;


// attack variables
attackName = '';
curAttack = {};
randInt = 0;
enemyAttack = {};
defendProgressInt = null;
defendProgressComplete = 0;
progressInt = null;
progressComplete = 0;

// characters

characters = [
    {
      name: "warrior",
      resistance: ['steel'],
      img: "../images/warrior back.png",
      hp: {
        current: 100,
        total: 100
      },
      attacks: [
        {
          name: "Attack",
          hp: randomNum(12,4),
          avail: {
            total: 30,
            remaining: 30
          }
        },
        {
          name: "Spell",
          hp: randomNum(60,45),
          avail: {
            total: 10,
            remaining: 10
          }
        },
        {
          name: "Defense",
          hp: randomNum(75,60),
          avail: {
            total: 5,
            remaining: 5
          }
        },
        {
          name: "Physical",
          hp: randomNum(160, 130),
          avail: {
            total: 2,
            remaining: 2
          }
        }
      ]
    },
    {
        name: "queen",
        resistance: ['ghost'],
        img: "../images/Mage Face.jpeg",
        hp: {
          current: 80,
          total: 80
        },
        attacks: [
          {
            name: "Attack",
            hp: randomNum(12,4),
            avail: {
              total: 30,
              remaining: 30
            }
          },
          {
            name: "Spell",
            hp: randomNum(60,45),
            avail: {
              total: 10,
              remaining: 10
            }
          },
          {
            name: "Defense",
            hp: randomNum(75,60),
            avail: {
              total: 5,
              remaining: 5
            }
          },
          {
            name: "Physical",
            hp: randomNum(160, 130),
            avail: {
              total: 2,
              remaining: 2
            }
          }
        ]
      },
]