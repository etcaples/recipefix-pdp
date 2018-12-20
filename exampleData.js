export default [
  {
    family: 'Shortcrust Pastry', // can only be one
    variations: [
      {
        genus: 'sweet',
        versions: [
          {
            specie: 'v1',
            isStarred: false, // indicates that this is the current favorite
            date: '12/18/2018',
            timeSubmitted: '6:49:28PM', // might combine with date
            image: 'https://images-gmi-pmc.edge-generalmills.com/173da066-c6b4-45dd-9b28-0d459cf6f169.jpg',
            caption: 'Apple Pie',
            tools: ['large bowl', 'food processor', 'small bowl', 'rubber spatula', 'knife', 'measuring cups', 'measuring spoons'],
            ingredients: [
              [2.5, 'cups', 'all purpose flour'],
              [2, 'sticks', 'cold butter'],
              [0.5, 'tsp', 'salt'],
              [1, 'tbsp', 'sugar'],
              [0.5, 'cups', 'ice cold water'],
              [null, null, 'love'],
            ],
            instructions: ['put salt and 1.5 cups of flour in food processor - pulse 5 times', 'cut all cold butter into cubes', 'scatter cubed butter into food processor on top of flour mixture', 'run food processor for about 15 seconds (mixture should look like tiny crumbs and all the butter should be coated in flour)', 'scrape sides of work bowl', 'add remaining flour and pulse 5 more times', 'empty flour mixture into a large bowl', 'add 5 tablespoons of cold water and mix dough together with hands or rubber spatula', 'etc...'],
          },
          {
            specie: 'v2',
            isStarred: false, // indicates that this is the current favorite
            date: '12/18/2018',
            timeSubmitted: '6:49:28PM', // might combine with date
            image: 'https://i.pinimg.com/originals/88/51/cc/8851cc2ff54553ed2185193d31429910.jpg',
            caption: 'Peach Pie',
            tools: ['measuring spoons'],
            ingredients: [
              [null, null, 'love'],
            ],
            instructions: ['version 2 of sweet'],
          },
        ],
      },
      {
        genus: 'savory',
        versions: [
          {
            specie: 'v1',
            isStarred: false, // indicates that this is the current favorite
            date: '12/18/2018',
            timeSubmitted: '6:49:28PM', // might combine with date
            image: 'https://st4.depositphotos.com/8441656/20372/v/600/depositphotos_203729922-stock-video-cold-water-wide-northern-river.jpg',
            caption: 'Apple Pie',
            tools: ['large bowl', 'food processor', 'measuring cups', 'measuring spoons'],
            ingredients: [
              [0.5, 'cups', 'ice cold water'],
            ],
            instructions: ['version 1 of savory'],
          },
          {
            specie: 'v2',
            isStarred: false, // indicates that this is the current favorite
            date: '12/18/2018',
            timeSubmitted: '6:49:28PM', // might combine with date
            image: 'https://images-gmi-pmc.edge-generalmills.com/173da066-c6b4-45dd-9b28-0d459cf6f169.jpg',
            caption: 'Salted Butter',
            tools: ['large bowl', 'food processor', 'small bowl', 'measuring spoons'],
            ingredients: [
              [2, 'sticks', 'cold butter'],
              [0.5, 'tsp', 'salt'],
            ],
            instructions: ['version 2 of savory pie'],
          },
        ],
      },
      {
        genus: 'spiced',
        versions: [
          {
            specie: 'v1',
            isStarred: false, // indicates that this is the current favorite
            date: '12/18/2018',
            timeSubmitted: '6:49:28PM', // might combine with date
            image: 'https://images-na.ssl-images-amazon.com/images/I/915rdH7L5pL._SX700_.jpg',
            caption: 'Apple Pie',
            tools: ['large bowl'],
            ingredients: [
              [2.5, 'cups', 'all purpose flour']
            ],
            instructions: ['version 1 of spiced'],
          },
          {
            specie: 'v4',
            isStarred: false, // indicates that this is the current favorite
            date: '12/18/2018',
            timeSubmitted: '6:49:28PM', // might combine with date
            image: 'https://images-gmi-pmc.edge-generalmills.com/09d8ee42-447e-4974-abc8-26df2a760847.jpg',
            caption: 'Tasty Treat',
            tools: [ 'knife', 'measuring cups'],
            ingredients: [
              [0.5, 'tsp', 'salt'],
              [1, 'tbsp', 'sugar'],
              [0.5, 'cups', 'ice cold water'],
            ],
            instructions: ['version 4 of spiced'],
          },
        ],
      }
    ] // expect to have several
  }
];