{/* Add Colour */}
{/* Add stock */}

export const jumpers = [
    {
        id: 1,
        name: 'PanelledJumper',
        price: 60,
        description: 'Stylish panelled jumper',
        image: '/panelledJumper.PNG',
        quantity: 0
    },
    {
        id: 2,
        name: 'GreyJumper',
        price: 55,
        description: 'Comfortable grey jumper',
        image: '/greyJumper.PNG',
        quantity: 0
    },
    {
        id: 3,
        name: 'BeigeJumper',
        price: 65,
        description: 'Elegant beige jumper',
        image: '/beigeJumper.PNG',
        quantity: 0
    },
];

export const blazers = [
    {
        id: 4,
        name: 'WhiteBlazer',
        price: 70,
        description: 'Elegant white blazer',
        image: '/whiteBlazer.PNG',
        quantity: 0
    },
    {
        id: 5,
        name: 'StripedBlazer',
        price: 80,
        description: 'Stylish striped blazer',
        image: '/stripedBlazer.PNG',
        quantity: 0
    },
    {
        id: 6,
        name: 'NavyBlazer',
        price: 75,
        description: 'Classic navy blazer',
        image: '/navyBlazer.PNG',
        quantity: 0
    },
];

export const trousers = [
    {
        id: 7,
        name: 'Pants',
        price: 10,
        description: 'Some very comfy pants',
        image: '/preppies.PNG',
        quantity: 0
    },
    {
        id: 8,
        name: 'chungus',
        price: 20,
        description: "my name big chungus",
        image: '/chinoos.PNG',
        quantity: 0
    },
    {
        id: 9,
        name: 'bungus',
        price: 20,
        description: "my name big chungus",
        image: '/Capture.PNG',
        quantity: 0
    },
]

export const sweaters = [
    {
        id: 10,
        name: 'WhiteSweater',
        price: 50,
        description: 'Cozy white sweater',
        image: '/whiteSweater.PNG',
        quantity: 0
    },
    {
        id: 11,
        name: 'NavySweater',
        price: 55,
        description: 'Stylish navy sweater',
        image: '/navySweater.PNG',
        quantity: 0
    },
    {
        id: 12,
        name: 'BlueSweater',
        price: 45,
        description: 'Casual blue sweater',
        image: '/blueSweater.PNG',
        quantity: 0
    },
];

export const polos = [
    {
        id: 13,
        name: 'BluePolo',
        price: 40,
        description: 'Sexy blue polo',
        image: '/bluePolo.PNG',
        quantity: 0
    },
    {
        id: 14,
        name: 'BlackPolo',
        price: 35,
        description: 'Classic black polo',
        image: '/blackPolo.PNG',
        quantity: 0
    },
    {
        id: 15,
        name: 'WhitePolo',
        price: 45,
        description: 'Elegant white polo',
        image: '/whitePolo.PNG',
        quantity: 0
    },
];

export const allProducts = [
    ...polos,
    ...sweaters,
    ...trousers,
    ...blazers,
    ...jumpers
];

