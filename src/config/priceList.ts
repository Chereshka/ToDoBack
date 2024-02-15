const RACKET_PRICES = {
    TR_B: 20,
    TR_I: 35,
    TR_A: 50,
};

const RACKET_GAME_PROPERTIES = {
    TR_B: {
        energy: 12,
        max_play_time: 60,
        earn_per_interva: 1,
        recovery_time: 12,
        recovery_points_Interval: 3,
    },
    TR_I: {
        energy: 18,
        max_play_time: 90,
        earn_per_interva: 1.2,
        recovery_time: 18,
        recovery_points_Interval: 3,
    },
    TR_A: {
        energy: 24,
        max_play_time: 120,
        earn_per_interva: 1.3,
        recovery_time: 24,
        recovery_points_Interval: 3,
    },
};

const TR_1000 = {
    type: "racket",
    style: "all_court_player",
    code: "TR 1000",
    model: "Lapis",
    price: 0,
    game_properties: {
        energy: 9,
        max_play_time: 45,
        earn_per_interva: 0.4,
        recovery_time: 12,
        recovery_points_Interval: 2.25,
    },
    specifications: {
        control: 85,
        precision: 78,
        power: 85,
        spin: 85,
        comfort: 78,
        head: 100,
        weight: 310,
    },
};

const TR_B_9 = {
    type: "racket",
    style: "baseline_player",
    code: "TR B-9",
    model: "Hinto",
    price: RACKET_PRICES.TR_B,
    game_properties: RACKET_GAME_PROPERTIES.TR_B,
    specifications: {
        control: 76,
        precision: 75,
        power: 86,
        spin: 86,
        comfort: 74,
        head: 102,
        weight: 315,
    },
};

const TR_B_8 = {
    type: "racket",
    style: "comfortable",
    code: "TR B-8",
    model: "Viorel",
    price: RACKET_PRICES.TR_B,
    game_properties: RACKET_GAME_PROPERTIES.TR_B,
    specifications: {
        control: 86,
        precision: 80,
        power: 72,
        spin: 74,
        comfort: 85,
        head: 108,
        weight: 300,
    },
};

const TR_B_7 = {
    type: "racket",
    style: "baseline_player",
    code: "TR B-7",
    model: "Sini",
    price: RACKET_PRICES.TR_B,
    game_properties: RACKET_GAME_PROPERTIES.TR_B,
    specifications: {
        control: 77,
        precision: 74,
        power: 85,
        spin: 86,
        comfort: 75,
        head: 100,
        weight: 280,
    },
};

const TR_B_6 = {
    type: "racket",
    style: "comfortable",
    code: "TR B-6",
    model: "Ruka",
    price: RACKET_PRICES.TR_B,
    game_properties: RACKET_GAME_PROPERTIES.TR_B,
    specifications: {
        control: 78,
        precision: 73,
        power: 86,
        spin: 76,
        comfort: 85,
        head: 115,
        weight: 300,
    },
};

const TR_I_50 = {
    type: "racket",
    style: "all_pleer_types",
    code: "TR I-50",
    model: "Okko",
    price: RACKET_PRICES.TR_I,
    game_properties: RACKET_GAME_PROPERTIES.TR_I,
    specifications: {
        control: 86,
        precision: 80,
        power: 75,
        spin: 76,
        comfort: 86,
        head: 100,
        weight: 310,
    },
};

const TR_I_40 = {
    type: "racket",
    style: "all_court_types",
    code: "TR I-40",
    model: "Neelan",
    price: RACKET_PRICES.TR_I,
    game_properties: RACKET_GAME_PROPERTIES.TR_I,
    specifications: {
        control: 88,
        precision: 80,
        power: 72,
        spin: 76,
        comfort: 85,
        head: 103,
        weight: 280,
    },
};

const TR_I_30 = {
    type: "racket",
    style: "baseline_player",
    code: "TR I-30",
    model: "Jaylin",
    price: RACKET_PRICES.TR_I,
    game_properties: RACKET_GAME_PROPERTIES.TR_I,
    specifications: {
        control: 85,
        precision: 77,
        power: 87,
        spin: 80,
        comfort: 78,
        head: 100,
        weight: 318,
    },
};

const TR_I_20 = {
    type: "racket",
    style: "counter_puncher",
    code: "TR I-20",
    model: "Indigo",
    price: RACKET_PRICES.TR_I,
    game_properties: RACKET_GAME_PROPERTIES.TR_I,
    specifications: {
        control: 85,
        precision: 78,
        power: 80,
        spin: 87,
        comfort: 85,
        head: 98,
        weight: 315,
    },
};

const TR_A_100 = {
    type: "racket",
    style: "baseline_player",
    code: "TR A-100",
    model: "Azura",
    price: RACKET_PRICES.TR_A,
    game_properties: RACKET_GAME_PROPERTIES.TR_A,
    specifications: {
        control: 80,
        precision: 88,
        power: 90,
        spin: 90,
        comfort: 80,
        head: 10,
        weight: 324,
    },
};

const TR_A_98 = {
    type: "racket",
    style: "baseline_player",
    code: "TR A-98",
    model: "Aouli",
    price: RACKET_PRICES.TR_A,
    game_properties: RACKET_GAME_PROPERTIES.TR_A,
    specifications: {
        control: 80,
        precision: 88,
        power: 90,
        spin: 90,
        comfort: 87,
        head: 98,
        weight: 324,
    },
};

const TR_A_97 = {
    type: "racket",
    style: "baseline_player",
    code: "TR A-97",
    model: "Aoki",
    price: RACKET_PRICES.TR_A,
    game_properties: RACKET_GAME_PROPERTIES.TR_A,
    specifications: {
        control: 84,
        precision: 90,
        power: 73,
        spin: 87,
        comfort: 80,
        head: 97,
        weight: 330,
    },
};

//STRINGS

const STRING_TITLES = {
    TS_P: "Polyester",
    TS_MF: "Multifilament",
    TS_NG: "Natural Gut",
};

const TS_PL_3 = {
    type: "strings",
    code: "TS PL-3",
    model: "Liane",
    price: 1,
    title: STRING_TITLES.TS_P,
    game_properties: {
        energy: 360,
        max_play_time: 1800,
        earn_per_interva: 0,
    },
};

const TS_PL_2 = {
    type: "strings",
    code: "TS PL-2",
    model: "Arunika",
    price: 3.5,
    title: STRING_TITLES.TS_P,
    game_properties: {
        energy: 132,
        max_play_time: 660,
        earn_per_interva: 0,
    },
};

const TS_PL_1 = {
    type: "strings",
    code: "TS PL-1",
    model: "Oriana",
    price: 5,
    title: STRING_TITLES.TS_P,
    game_properties: {
        energy: 144,
        max_play_time: 720,
        earn_per_interva: 0.1,
    },
};

const TS_MF_2 = {
    type: "strings",
    code: "TS MF-2",
    model: "Arpina",
    price: 7,
    title: STRING_TITLES.TS_MF,
    game_properties: {
        energy: 132,
        max_play_time: 660,
        earn_per_interva: 0.3,
    },
};

const TS_MF_1 = {
    type: "strings",
    code: "TS MF-1",
    model: "Arki",
    price: 7.5,
    title: STRING_TITLES.TS_MF,
    game_properties: {
        energy: 144,
        max_play_time: 720,
        earn_per_interva: 0.3,
    },
};

const TS_NG_2 = {
    type: "strings",
    code: "TS NG-2",
    model: "Aine",
    price: 8.5,
    title: STRING_TITLES.TS_NG,
    game_properties: {
        energy: 120,
        max_play_time: 600,
        earn_per_interva: 0.5,
    },
};

const TS_NG_1 = {
    type: "strings",
    code: "TS NG-1",
    model: "Malina",
    price: 10,
    title: STRING_TITLES.TS_NG,
    game_properties: {
        energy: 120,
        max_play_time: 600,
        earn_per_interva: 0.7,
    },
};

//OVERGRIPS

const OVERGRIP_GAME_PROPERTIES = {
    TG_ART: {
        energy: 96,
        max_play_time: 480,
        earn_per_interva: 0,
    },
    TG_C: {
        energy: 96,
        max_play_time: 480,
        earn_per_interva: 0,
    },
};

const TG_C_1 = {
    type: "overgrip",
    code: "TG C-1",
    model: "Black",
    price: 3,
    game_properties: {
        ...OVERGRIP_GAME_PROPERTIES.TG_C,
        energy: 120,
    },
};

const TG_C_2 = {
    type: "overgrip",
    code: "TG C-2",
    model: "White with Art",
    price: 3,
    game_properties: OVERGRIP_GAME_PROPERTIES.TG_C,
};

const TG_C_3 = {
    type: "overgrip",
    code: "TG C-3",
    model: "Blue",
    price: 1,
    game_properties: OVERGRIP_GAME_PROPERTIES.TG_C,
};

const TG_C_4 = {
    type: "overgrip",
    code: "TG C-4",
    model: "Pink",
    price: 1,
    game_properties: OVERGRIP_GAME_PROPERTIES.TG_C,
};

const TG_C_5 = {
    type: "overgrip",
    code: "TG C-5",
    model: "Red",
    price: 1,
    game_properties: OVERGRIP_GAME_PROPERTIES.TG_C,
};

const TG_C_6 = {
    type: "overgrip",
    code: "TG C-6",
    model: "Yellow",
    price: 1,
    game_properties: OVERGRIP_GAME_PROPERTIES.TG_C,
};

const TG_A_1 = {
    type: "overgrip",
    code: "TG A-1",
    model: "Black with Art",
    price: 5,
    game_properties: {
        ...OVERGRIP_GAME_PROPERTIES.TG_ART,
        earn_per_interva: 0.1,
    },
};

const TG_A_2 = {
    type: "overgrip",
    code: "TG A-2",
    model: "White with Art",
    price: 3,
    game_properties: OVERGRIP_GAME_PROPERTIES.TG_ART,
};

const TG_A_3 = {
    type: "overgrip",
    code: "TG A-3",
    model: "Blue with Art",
    price: 3,
    game_properties: OVERGRIP_GAME_PROPERTIES.TG_ART,
};

const TG_A_4 = {
    type: "overgrip",
    code: "TG A-4",
    model: "Pink with Art",
    price: 3,
    game_properties: OVERGRIP_GAME_PROPERTIES.TG_ART,
};

const TG_A_5 = {
    type: "overgrip",
    code: "TG A-5",
    model: "Red with Art",
    price: 3,
    game_properties: OVERGRIP_GAME_PROPERTIES.TG_ART,
};

const TG_A_6 = {
    type: "overgrip",
    code: "TG A-6",
    model: "Yellow with Art",
    price: 3,
    game_properties: OVERGRIP_GAME_PROPERTIES.TG_ART,
};

//EXPORT

export const rackets_config: Array<{
    type: string,
    style: string,
    code: string,
    model: string,
    price: number,
    game_properties: {
        energy: number,
        max_play_time: number,
        earn_per_interva: number,
        recovery_time: number,
        recovery_points_Interval: number,
    },
    specifications: {
        control: number,
        precision: number,
        power: number,
        spin: number,
        comfort: number,
        head: number,
        weight: number,
    },
}> = [
        TR_1000,
        TR_A_100,
        TR_A_98,
        TR_A_97,
        TR_B_9,
        TR_B_8,
        TR_B_7,
        TR_B_6,
        TR_I_50,
        TR_I_40,
        TR_I_30,
        TR_I_20,
    ];

export const strings_config = [
    TS_NG_1,
    TS_NG_2,
    TS_MF_1,
    TS_MF_2,
    TS_PL_1,
    TS_PL_2,
    TS_PL_3,
];

export const overgrips_config = [
    TG_C_1,
    TG_C_2,
    TG_C_3,
    TG_C_4,
    TG_C_5,
    TG_C_6,
    TG_A_1,
    TG_A_2,
    TG_A_3,
    TG_A_4,
    TG_A_5,
    TG_A_6,
];

export const DEFAULT_SET = [
    { code: TR_1000.code },
    { code: TS_PL_3.code },
    { code: TG_C_2.code },
]
