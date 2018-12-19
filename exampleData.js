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
            isStarred: true,
            date: '12/18/2018',
            timeSubmitted: '8:49:28PM',
            tools: [],

          }
        ],
      },
      {
        genus: 'savory',
        versions: [],
      },
      {
        genus: 'spiced',
        versions: [],
      }
    ] // expect to have several
  }
];