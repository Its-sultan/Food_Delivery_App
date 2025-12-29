export const MOCK_RESTAURANTS = [
    {
    id: '1',
    name: 'Burger King',
    rating: 4.8,
    reviewCount: 1240,
    deliveryTime: '25-35 min',
    deliveryFee: 0,
    minOrder: 15,
    tags: ['American', 'Fast Food', 'Burgers'],
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add',
    banner: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
    address: '123 Main St, New York, NY',
    menu: [
      {
        id: '101',
        name: 'Whopper Burger',
        description: 'Flame-grilled beef burger with lettuce, tomato, onions, pickles, and mayo.',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
        category: 'Burgers',
        popular: true
      },
      {
        id: '102',
        name: 'Cheeseburger',
        description: 'Juicy beef patty topped with melted cheese in a soft bun.',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349',
        category: 'Burgers'
      },
      {
        id: '103',
        name: 'Chicken Burger',
        description: 'Crispy chicken fillet with lettuce and mayo.',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1606756790138-261d2b21cd75',
        category: 'Chicken'
      },
      {
        id: '104',
        name: 'French Fries',
        description: 'Golden crispy fries.',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5',
        category: 'Sides'
      },
      {
        id: '105',
        name: 'Onion Rings',
        description: 'Crispy battered onion rings.',
        price: 4.49,
        image: 'https://images.unsplash.com/photo-1639024471283-03518883512d',
        category: 'Sides'
      }
    ]
  },

  {
    id: '2',
    name: 'Pizza Hut',
    rating: 4.6,
    reviewCount: 980,
    deliveryTime: '30-45 min',
    deliveryFee: 2.99,
    minOrder: 20,
    tags: ['Italian', 'Pizza'],
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3',
    banner: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
    address: '456 Elm St, New York, NY',
    menu: [
      {
        id: '201',
        name: 'Pepperoni Pizza',
        description: 'Classic pizza topped with pepperoni and mozzarella.',
        price: 18.99,
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e',
        category: 'Pizza',
        popular: true
      },
      {
        id: '202',
        name: 'Margherita Pizza',
        description: 'Fresh tomato sauce, mozzarella, and basil.',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca',
        category: 'Pizza'
      },
      {
        id: '203',
        name: 'BBQ Chicken Pizza',
        description: 'Grilled chicken, BBQ sauce, onions, and cheese.',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65',
        category: 'Pizza'
      },
      {
        id: '204',
        name: 'Garlic Bread',
        description: 'Toasted bread with garlic butter.',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1585238342028-4bbc98fcd9b5',
        category: 'Sides'
      },
      {
        id: '205',
        name: 'Chicken Wings',
        description: 'Spicy baked chicken wings.',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
        category: 'Chicken'
      }
    ]
  },

  {
    id: '3',
    name: 'Sushi Master',
    rating: 4.9,
    reviewCount: 620,
    deliveryTime: '40-55 min',
    deliveryFee: 5.99,
    minOrder: 25,
    tags: ['Japanese', 'Sushi'],
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    banner: 'https://images.unsplash.com/photo-1553621042-f6e147245754',
    address: '789 Sushi Way, New York, NY',
    menu: [
      {
        id: '301',
        name: 'California Roll',
        description: 'Crab, avocado, cucumber, and sesame seeds.',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce',
        category: 'Sushi',
        popular: true
      },
      {
        id: '302',
        name: 'Dragon Roll',
        description: 'Shrimp tempura topped with avocado and eel sauce.',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1617196034421-24e74e119117',
        category: 'Sushi'
      },
      {
        id: '303',
        name: 'Salmon Nigiri',
        description: 'Fresh salmon over seasoned rice.',
        price: 6.50,
        image: 'https://images.unsplash.com/photo-1617196233065-22e6cf4a4ce9',
        category: 'Nigiri'
      },
      {
        id: '304',
        name: 'Tuna Sashimi',
        description: 'Thinly sliced raw tuna.',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10',
        category: 'Sashimi'
      },
      {
        id: '305',
        name: 'Miso Soup',
        description: 'Traditional Japanese soup with tofu and seaweed.',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1617191514001-38fcd36c9d6c',
        category: 'Soup'
      }
    ]
  },

  {
    id: '4',
    name: 'Taco Bell',
    rating: 4.3,
    reviewCount: 2100,
    deliveryTime: '20-30 min',
    deliveryFee: 1.99,
    minOrder: 10,
    tags: ['Mexican', 'Tacos'],
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47',
    banner: 'https://images.unsplash.com/photo-1624300626372-50d4b1a454d6',
    address: '101 Taco Lane, NY',
    menu: [
      {
        id: '401',
        name: 'Beef Taco',
        description: 'Seasoned beef in a crunchy taco shell.',
        price: 2.49,
        image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b',
        category: 'Tacos',
        popular: true
      },
      {
        id: '402',
        name: 'Chicken Burrito',
        description: 'Grilled chicken with rice and beans.',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1625944521390-77c8b1fdb7f6',
        category: 'Burritos'
      },
      {
        id: '403',
        name: 'Nachos Supreme',
        description: 'Tortilla chips with cheese, beef, and jalapeños.',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1604909053198-2b8f67d6a8a5',
        category: 'Sides'
      },
      {
        id: '404',
        name: 'Quesadilla',
        description: 'Cheesy grilled tortilla with chicken.',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
        category: 'Quesadilla'
      },
      {
        id: '405',
        name: 'Churros',
        description: 'Fried dough pastry with cinnamon sugar.',
        price: 3.49,
        image: 'https://images.unsplash.com/photo-1601315379734-3c1d78edb8e8',
        category: 'Dessert'
      }
    ]
    },

  // 👉 You can continue this same pattern for restaurants 5–12
    {
    id: '5',
    name: 'Starbucks',
    rating: 4.7,
    reviewCount: 3200,
    deliveryTime: '15-25 min',
    deliveryFee: 0,
    minOrder: 5,
    tags: ['Coffee', 'Breakfast', 'Bakery'],
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8',
    banner: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247',
    address: '202 Coffee Ave, New York, NY',
    menu: [
      {
        id: '501',
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and foam.',
        price: 4.25,
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
        category: 'Coffee',
        popular: true
      },
      {
        id: '502',
        name: 'Latte',
        description: 'Smooth espresso with steamed milk.',
        price: 4.75,
        image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348',
        category: 'Coffee'
      },
      {
        id: '503',
        name: 'Blueberry Muffin',
        description: 'Soft muffin filled with blueberries.',
        price: 3.25,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
        category: 'Bakery'
      },
      {
        id: '504',
        name: 'Croissant',
        description: 'Flaky buttery French pastry.',
        price: 3.75,
        image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73',
        category: 'Bakery'
      },
      {
        id: '505',
        name: 'Iced Coffee',
        description: 'Chilled brewed coffee over ice.',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096',
        category: 'Coffee'
      }
    ]
  },

  {
    id: '6',
    name: 'KFC',
    rating: 4.4,
    reviewCount: 2800,
    deliveryTime: '25-35 min',
    deliveryFee: 1.99,
    minOrder: 12,
    tags: ['Chicken', 'Fast Food'],
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec',
    banner: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
    address: '88 Fried Chicken Rd, NY',
    menu: [
      {
        id: '601',
        name: 'Fried Chicken Bucket',
        description: 'Crispy seasoned fried chicken pieces.',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec',
        category: 'Chicken',
        popular: true
      },
      {
        id: '602',
        name: 'Chicken Sandwich',
        description: 'Crispy chicken fillet in soft bun.',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1606756790138-261d2b21cd75',
        category: 'Sandwich'
      },
      {
        id: '603',
        name: 'Mashed Potatoes',
        description: 'Creamy mashed potatoes with gravy.',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1604908177522-402a1c5b81f9',
        category: 'Sides'
      },
      {
        id: '604',
        name: 'Coleslaw',
        description: 'Fresh cabbage salad with creamy dressing.',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1599021456807-25db0f974333',
        category: 'Sides'
      },
      {
        id: '605',
        name: 'Chicken Wings',
        description: 'Spicy fried chicken wings.',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
        category: 'Chicken'
      }
    ]
  },

  {
    id: '7',
    name: 'Pasta Palace',
    rating: 4.6,
    reviewCount: 740,
    deliveryTime: '30-40 min',
    deliveryFee: 3.99,
    minOrder: 18,
    tags: ['Italian', 'Pasta'],
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e',
    banner: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb',
    address: '321 Roma St, NY',
    menu: [
      {
        id: '701',
        name: 'Spaghetti Bolognese',
        description: 'Classic pasta with beef tomato sauce.',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b',
        category: 'Pasta',
        popular: true
      },
      {
        id: '702',
        name: 'Fettuccine Alfredo',
        description: 'Creamy Alfredo sauce with pasta.',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1608756687911-aa1599ab3c3b',
        category: 'Pasta'
      },
      {
        id: '703',
        name: 'Lasagna',
        description: 'Layered pasta with meat and cheese.',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b',
        category: 'Pasta'
      },
      {
        id: '704',
        name: 'Garlic Bread',
        description: 'Toasted bread with garlic butter.',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1585238342028-4bbc98fcd9b5',
        category: 'Sides'
      },
      {
        id: '705',
        name: 'Tiramisu',
        description: 'Italian coffee-flavored dessert.',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1614707267537-2c7f7f6b16b2',
        category: 'Dessert'
      }
    ]
  },

  {
    id: '8',
    name: 'Healthy Bowl',
    rating: 4.8,
    reviewCount: 510,
    deliveryTime: '20-30 min',
    deliveryFee: 2.49,
    minOrder: 15,
    tags: ['Healthy', 'Salads'],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    banner: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    address: '77 Green Ave, NY',
    menu: [
      {
        id: '801',
        name: 'Chicken Caesar Salad',
        description: 'Grilled chicken with romaine lettuce.',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9',
        category: 'Salad',
        popular: true
      },
      {
        id: '802',
        name: 'Quinoa Bowl',
        description: 'Quinoa with roasted vegetables.',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
        category: 'Bowls'
      },
      {
        id: '803',
        name: 'Avocado Toast',
        description: 'Smashed avocado on toasted bread.',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141',
        category: 'Breakfast'
      },
      {
        id: '804',
        name: 'Fruit Smoothie',
        description: 'Mixed fruit blended smoothie.',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e',
        category: 'Drinks'
      },
      {
        id: '805',
        name: 'Greek Salad',
        description: 'Fresh vegetables with feta cheese.',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
        category: 'Salad'
      }
    ]
  },

  {
    id: '9',
    name: 'BBQ House',
    rating: 4.7,
    reviewCount: 980,
    deliveryTime: '35-50 min',
    deliveryFee: 4.99,
    minOrder: 22,
    tags: ['BBQ', 'Grill'],
    image: 'https://images.unsplash.com/photo-1558030006-450675393462',
    banner: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    address: '44 Smoke St, NY',
    menu: [
      {
        id: '901',
        name: 'BBQ Ribs',
        description: 'Slow-cooked pork ribs with BBQ sauce.',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
        category: 'BBQ',
        popular: true
      },
      {
        id: '902',
        name: 'Grilled Steak',
        description: 'Juicy grilled beef steak.',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1558030006-450675393462',
        category: 'Grill'
      },
      {
        id: '903',
        name: 'BBQ Chicken',
        description: 'Grilled chicken with BBQ glaze.',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
        category: 'Chicken'
      },
      {
        id: '904',
        name: 'Corn on the Cob',
        description: 'Grilled corn with butter.',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1604908177522-402a1c5b81f9',
        category: 'Sides'
      },
      {
        id: '905',
        name: 'Coleslaw',
        description: 'Creamy cabbage slaw.',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1599021456807-25db0f974333',
        category: 'Sides'
      }
    ]
  },

  {
    id: '10',
    name: 'Indian Spice',
    rating: 4.8,
    reviewCount: 670,
    deliveryTime: '40-55 min',
    deliveryFee: 3.99,
    minOrder: 20,
    tags: ['Indian', 'Curry'],
    image: 'https://images.unsplash.com/photo-1604908554161-6f1c1b7c08e7',
    banner: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0',
    address: '55 Curry Rd, NY',
    menu: [
      {
        id: '1001',
        name: 'Butter Chicken',
        description: 'Creamy tomato-based chicken curry.',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1604908554161-6f1c1b7c08e7',
        category: 'Curry',
        popular: true
      },
      {
        id: '1002',
        name: 'Chicken Biryani',
        description: 'Spiced rice with chicken.',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1631515242808-497c3fbd3972',
        category: 'Rice'
      },
      {
        id: '1003',
        name: 'Paneer Tikka',
        description: 'Grilled spiced cottage cheese.',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1628294896516-344152572ee8',
        category: 'Vegetarian'
      },
      {
        id: '1004',
        name: 'Naan Bread',
        description: 'Soft Indian flatbread.',
        price: 2.99,
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
        category: 'Bread'
      },
      {
        id: '1005',
        name: 'Samosa',
        description: 'Fried pastry with potato filling.',
        price: 3.99,
        image: 'https://images.unsplash.com/photo-1604908554161-6f1c1b7c08e7',
        category: 'Snack'
      }
    ]
  },

  {
    id: '11',
    name: 'Chinese Wok',
    rating: 4.5,
    reviewCount: 890,
    deliveryTime: '30-40 min',
    deliveryFee: 2.99,
    minOrder: 18,
    tags: ['Chinese', 'Asian'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
    banner: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90',
    address: '88 Dragon St, NY',
    menu: [
      {
        id: '1101',
        name: 'Kung Pao Chicken',
        description: 'Spicy stir-fried chicken with peanuts.',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90',
        category: 'Main',
        popular: true
      },
      {
        id: '1102',
        name: 'Sweet and Sour Chicken',
        description: 'Crispy chicken in sweet sauce.',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb36',
        category: 'Main'
      },
      {
        id: '1103',
        name: 'Fried Rice',
        description: 'Rice stir-fried with vegetables.',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1604908177522-402a1c5b81f9',
        category: 'Rice'
      },
      {
        id: '1104',
        name: 'Spring Rolls',
        description: 'Crispy vegetable spring rolls.',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1625944521390-77c8b1fdb7f6',
        category: 'Appetizer'
      },
      {
        id: '1105',
        name: 'Chow Mein',
        description: 'Stir-fried noodles with vegetables.',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90',
        category: 'Noodles'
      }
    ]
  },

  {
    id: '12',
    name: 'Dessert Heaven',
    rating: 4.9,
    reviewCount: 430,
    deliveryTime: '20-30 min',
    deliveryFee: 1.99,
    minOrder: 10,
    tags: ['Desserts', 'Bakery'],
    image: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94',
    banner: 'https://images.unsplash.com/photo-1505253216365-4fbe1b6b09e3',
    address: '12 Sweet St, NY',
    menu: [
      {
        id: '1201',
        name: 'Chocolate Cake',
        description: 'Rich chocolate layered cake.',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1605475128009-5d9c5c30cc6a',
        category: 'Dessert',
        popular: true
      },
      {
        id: '1202',
        name: 'Cheesecake',
        description: 'Creamy classic cheesecake.',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1505253216365-4fbe1b6b09e3',
        category: 'Dessert'
      },
      {
        id: '1203',
        name: 'Ice Cream Sundae',
        description: 'Vanilla ice cream with toppings.',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f',
        category: 'Dessert'
      },
      {
        id: '1204',
        name: 'Donuts',
        description: 'Fresh glazed donuts.',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0',
        category: 'Bakery'
      },
      {
        id: '1205',
        name: 'Cupcakes',
        description: 'Assorted frosted cupcakes.',
        price: 5.49,
        image: 'https://images.unsplash.com/photo-1519869325930-281384150729',
        category: 'Bakery'
      }
    ]
  }

];


export const CATEGORIES = [
    { id: 1, name: 'Burger', icon: '🍔' },
    { id: 2, name: 'Pizza', icon: '🍕' },
    { id: 3, name: 'Sushi', icon: '🍣' },
    { id: 4, name: 'Healthy', icon: '🥗' },
    { id: 5, name: 'Drinks', icon: '🥤' }
];
