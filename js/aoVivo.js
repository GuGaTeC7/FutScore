// Função para mockar os jogos ao vivo
function mockData() {
  return [
    {
      fixture: {
        id: 1234445,
        referee: "S. Toro",
        timezone: "UTC",
        date: "2024-10-17T21:00:00+00:00",
        timestamp: 1729198800,
        periods: {
          first: 1729198800,
          second: null,
        },
        venue: {
          id: null,
          name: "Estadio Romelio Martínez",
          city: "Barranquilla",
        },
        status: {
          long: "First Half",
          short: "1H",
          elapsed: 21,
          extra: null,
        },
      },
      league: {
        id: 240,
        name: "Primera B",
        country: "Colombia",
        logo: "https://media.api-sports.io/football/leagues/240.png",
        flag: "https://media.api-sports.io/flags/co.svg",
        season: 2024,
        round: "Clausura - 15",
      },
      teams: {
        home: {
          id: 1466,
          name: "Barranquilla",
          logo: "https://media.api-sports.io/football/teams/1466.png",
          winner: false,
        },
        away: {
          id: 1458,
          name: "Bogota FC",
          logo: "https://media.api-sports.io/football/teams/1458.png",
          winner: true,
        },
      },
      goals: {
        home: 1,
        away: 2,
      },
      score: {
        halftime: {
          home: 1,
          away: 2,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 5,
            extra: null,
          },
          team: {
            id: 1466,
            name: "Barranquilla",
            logo: "https://media.api-sports.io/football/teams/1466.png",
          },
          player: {
            id: null,
            name: "M. Bacca",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 12,
            extra: null,
          },
          team: {
            id: 1458,
            name: "Bogota FC",
            logo: "https://media.api-sports.io/football/teams/1458.png",
          },
          player: {
            id: null,
            name: "M. Medina",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 18,
            extra: null,
          },
          team: {
            id: 1458,
            name: "Bogotá FC",
            logo: "https://media.api-sports.io/football/teams/1458.png",
          },
          player: {
            id: null,
            name: "G. Luiz",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 18,
            extra: null,
          },
          team: {
            id: 1466,
            name: "Barranquilla",
            logo: "https://media.api-sports.io/football/teams/1466.png",
          },
          player: {
            id: null,
            name: "G. Luiz",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Red Card",
          comments: null,
        },
        {
          time: {
            elapsed: 18,
            extra: null,
          },
          team: {
            id: 1458,
            name: "Bogotá FC",
            logo: "https://media.api-sports.io/football/teams/1458.png",
          },
          player: {
            id: null,
            name: "G. Luiz",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 18,
            extra: null,
          },
          team: {
            id: 1466,
            name: "Barranquilla",
            logo: "https://media.api-sports.io/football/teams/1466.png",
          },
          player: {
            id: null,
            name: "G. Luiz",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Red Card",
          comments: null,
        },
        {
          time: {
            elapsed: 18,
            extra: null,
          },
          team: {
            id: 1466,
            name: "Barranquilla",
            logo: "https://media.api-sports.io/football/teams/1466.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 18,
            extra: null,
          },
          team: {
            id: 1466,
            name: "Barranquilla",
            logo: "https://media.api-sports.io/football/teams/1466.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 19,
            extra: null,
          },
          team: {
            id: 1458,
            name: "Bogota FC",
            logo: "https://media.api-sports.io/football/teams/1458.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1299021,
        referee: "Tobias Stieler, Germany",
        timezone: "UTC",
        date: "2024-10-22T16:45:00+00:00",
        timestamp: 1729615500,
        periods: {
          first: 1729615500,
          second: null,
        },
        venue: {
          id: 20470,
          name: "Stade Louis-II",
          city: "Monaco",
        },
        status: {
          long: "First Half",
          short: "1H",
          elapsed: 23,
          extra: null,
        },
      },
      league: {
        id: 2,
        name: "UEFA Champions League",
        country: "World",
        logo: "https://media.api-sports.io/football/leagues/2.png",
        flag: null,
        season: 2024,
        round: "League Stage - 3",
      },
      teams: {
        home: {
          id: 91,
          name: "Monaco",
          logo: "https://media.api-sports.io/football/teams/91.png",
          winner: true,
        },
        away: {
          id: 598,
          name: "FK Crvena Zvezda",
          logo: "https://media.api-sports.io/football/teams/598.png",
          winner: false,
        },
      },
      goals: {
        home: 1,
        away: 0,
      },
      score: {
        halftime: {
          home: 1,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 7,
            extra: null,
          },
          team: {
            id: 598,
            name: "FK Crvena Zvezda",
            logo: "https://media.api-sports.io/football/teams/598.png",
          },
          player: {
            id: 41242,
            name: "Dalcio",
          },
          assist: {
            id: 63475,
            name: "Bruno Duarte",
          },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
        {
          time: {
            elapsed: 21,
            extra: null,
          },
          team: {
            id: 91,
            name: "Monaco",
            logo: "https://media.api-sports.io/football/teams/91.png",
          },
          player: {
            id: 1101,
            name: "T. Minamino",
          },
          assist: {
            id: 30504,
            name: "W. Singo",
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1206850,
        referee: null,
        timezone: "UTC",
        date: "2024-10-22T16:00:00+00:00",
        timestamp: 1729612800,
        periods: {
          first: 1729612800,
          second: 1729616400,
        },
        venue: {
          id: 19952,
          name: "Bogdanka Arena",
          city: "\u0141\u0119czna",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 90,
          extra: 10,
        },
      },
      league: {
        id: 107,
        name: "I Liga",
        country: "Poland",
        logo: "https://media.api-sports.io/football/leagues/107.png",
        flag: "https://media.api-sports.io/flags/pl.svg",
        season: 2024,
        round: "Regular Season - 6",
      },
      teams: {
        home: {
          id: 6941,
          name: "G\u00f3rnik \u0141\u0119czna",
          logo: "https://media.api-sports.io/football/teams/6941.png",
          winner: true,
        },
        away: {
          id: 338,
          name: "Wisla Krakow",
          logo: "https://media.api-sports.io/football/teams/338.png",
          winner: false,
        },
      },
      goals: {
        home: 1,
        away: 0,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 25,
            extra: null,
          },
          team: {
            id: 338,
            name: "Wisla Krakow",
            logo: "https://media.api-sports.io/football/teams/338.png",
          },
          player: {
            id: 40769,
            name: "B. Jaroch",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 41,
            extra: null,
          },
          team: {
            id: 338,
            name: "Wisla Krakow",
            logo: "https://media.api-sports.io/football/teams/338.png",
          },
          player: {
            id: 107533,
            name: "R. Mikulec",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 51,
            extra: null,
          },
          team: {
            id: 6941,
            name: "G\u00f3rnik \u0141\u0119czna",
            logo: "https://media.api-sports.io/football/teams/6941.png",
          },
          player: {
            id: 24933,
            name: "J. Bednarczyk",
          },
          assist: {
            id: 139896,
            name: "P. Banaszak",
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 55,
            extra: null,
          },
          team: {
            id: 6941,
            name: "G\u00f3rnik \u0141\u0119czna",
            logo: "https://media.api-sports.io/football/teams/6941.png",
          },
          player: {
            id: 40888,
            name: "P. Zyra",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 58,
            extra: null,
          },
          team: {
            id: 338,
            name: "Wisla Krakow",
            logo: "https://media.api-sports.io/football/teams/338.png",
          },
          player: {
            id: null,
            name: "O. Sukiennicki",
          },
          assist: {
            id: 181533,
            name: "A. Rodado",
          },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
        {
          time: {
            elapsed: 71,
            extra: null,
          },
          team: {
            id: 6941,
            name: "G\u00f3rnik \u0141\u0119czna",
            logo: "https://media.api-sports.io/football/teams/6941.png",
          },
          player: {
            id: 158152,
            name: "K. Orlik",
          },
          assist: {
            id: null,
            name: "B. Spacil",
          },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
        {
          time: {
            elapsed: 71,
            extra: null,
          },
          team: {
            id: 6941,
            name: "G\u00f3rnik \u0141\u0119czna",
            logo: "https://media.api-sports.io/football/teams/6941.png",
          },
          player: {
            id: 40790,
            name: "M. Roginic",
          },
          assist: {
            id: 40888,
            name: "P. Zyra",
          },
          type: "subst",
          detail: "Substitution 2",
          comments: null,
        },
        {
          time: {
            elapsed: 76,
            extra: null,
          },
          team: {
            id: 6941,
            name: "G\u00f3rnik \u0141\u0119czna",
            logo: "https://media.api-sports.io/football/teams/6941.png",
          },
          player: {
            id: 148637,
            name: "A. Kostrzewski",
          },
          assist: {
            id: 61310,
            name: "B. Pindroch",
          },
          type: "subst",
          detail: "Substitution 3",
          comments: null,
        },
        {
          time: {
            elapsed: 81,
            extra: null,
          },
          team: {
            id: 338,
            name: "Wisla Krakow",
            logo: "https://media.api-sports.io/football/teams/338.png",
          },
          player: {
            id: 135861,
            name: "G. Kiakos",
          },
          assist: {
            id: 28474,
            name: "T. Kiss",
          },
          type: "subst",
          detail: "Substitution 2",
          comments: null,
        },
        {
          time: {
            elapsed: 81,
            extra: null,
          },
          team: {
            id: 338,
            name: "Wisla Krakow",
            logo: "https://media.api-sports.io/football/teams/338.png",
          },
          player: {
            id: null,
            name: "F. P. Almeida Duarte F.",
          },
          assist: {
            id: 104902,
            name: "J. Alfaro",
          },
          type: "subst",
          detail: "Substitution 3",
          comments: null,
        },
        {
          time: {
            elapsed: 81,
            extra: null,
          },
          team: {
            id: 6941,
            name: "G\u00f3rnik \u0141\u0119czna",
            logo: "https://media.api-sports.io/football/teams/6941.png",
          },
          player: {
            id: null,
            name: "B. Akhmedov",
          },
          assist: {
            id: 265823,
            name: "D. Warchol",
          },
          type: "subst",
          detail: "Substitution 4",
          comments: null,
        },
        {
          time: {
            elapsed: 88,
            extra: null,
          },
          team: {
            id: 6941,
            name: "G\u00f3rnik \u0141\u0119czna",
            logo: "https://media.api-sports.io/football/teams/6941.png",
          },
          player: {
            id: null,
            name: "F. Janaszek",
          },
          assist: {
            id: 408299,
            name: "S. Krawczyk",
          },
          type: "subst",
          detail: "Substitution 5",
          comments: null,
        },
        {
          time: {
            elapsed: 90,
            extra: 7,
          },
          team: {
            id: 338,
            name: "Wisla Krakow",
            logo: "https://media.api-sports.io/football/teams/338.png",
          },
          player: {
            id: 269891,
            name: "P. Gogol",
          },
          assist: {
            id: 40769,
            name: "B. Jaroch",
          },
          type: "subst",
          detail: "Substitution 4",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1312817,
        referee: null,
        timezone: "UTC",
        date: "2024-10-23T22:00:00+00:00",
        timestamp: 1729720800,
        periods: {
          first: 1729720800,
          second: 1729724400,
        },
        venue: {
          id: 329,
          name: "Estadio Bicentenario de Chinquihue",
          city: "Puerto Montt",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 90,
          extra: 6,
        },
      },
      league: {
        id: 267,
        name: "Copa Chile",
        country: "Chile",
        logo: "https://media.api-sports.io/football/leagues/267.png",
        flag: "https://media.api-sports.io/flags/cl.svg",
        season: 2024,
        round: "Regional Finals",
      },
      teams: {
        home: {
          id: 2342,
          name: "D. Puerto Montt",
          logo: "https://media.api-sports.io/football/teams/2342.png",
          winner: false,
        },
        away: {
          id: 2337,
          name: "Nublense",
          logo: "https://media.api-sports.io/football/teams/2337.png",
          winner: true,
        },
      },
      goals: {
        home: 0,
        away: 1,
      },
      score: {
        halftime: {
          home: 0,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 10,
            extra: null,
          },
          team: {
            id: 2342,
            name: "D. Puerto Montt",
            logo: "https://media.api-sports.io/football/teams/2342.png",
          },
          player: {
            id: null,
            name: "B. Troncoso",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 21,
            extra: null,
          },
          team: {
            id: 2337,
            name: "Nublense",
            logo: "https://media.api-sports.io/football/teams/2337.png",
          },
          player: {
            id: 195801,
            name: "C. Medina",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 28,
            extra: null,
          },
          team: {
            id: 2342,
            name: "D. Puerto Montt",
            logo: "https://media.api-sports.io/football/teams/2342.png",
          },
          player: {
            id: null,
            name: "L. Vasquez",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 31,
            extra: null,
          },
          team: {
            id: 2337,
            name: "Nublense",
            logo: "https://media.api-sports.io/football/teams/2337.png",
          },
          player: {
            id: 11835,
            name: "I. Rozas",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 65,
            extra: null,
          },
          team: {
            id: 2337,
            name: "Nublense",
            logo: "https://media.api-sports.io/football/teams/2337.png",
          },
          player: {
            id: 5760,
            name: "G. Graciani",
          },
          assist: {
            id: 309987,
            name: "M. Plaza",
          },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
        {
          time: {
            elapsed: 65,
            extra: null,
          },
          team: {
            id: 2337,
            name: "Nublense",
            logo: "https://media.api-sports.io/football/teams/2337.png",
          },
          player: {
            id: 455872,
            name: "F. Moya",
          },
          assist: {
            id: 11835,
            name: "I. Rozas",
          },
          type: "subst",
          detail: "Substitution 2",
          comments: null,
        },
        {
          time: {
            elapsed: 66,
            extra: null,
          },
          team: {
            id: 2337,
            name: "Nublense",
            logo: "https://media.api-sports.io/football/teams/2337.png",
          },
          player: {
            id: 5760,
            name: "G. Graciani",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 73,
            extra: null,
          },
          team: {
            id: 2337,
            name: "Nublense",
            logo: "https://media.api-sports.io/football/teams/2337.png",
          },
          player: {
            id: 11930,
            name: "M. Rivera",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Yellow Card",
          comments: null,
        },
        {
          time: {
            elapsed: 74,
            extra: null,
          },
          team: {
            id: 2342,
            name: "D. Puerto Montt",
            logo: "https://media.api-sports.io/football/teams/2342.png",
          },
          player: {
            id: null,
            name: "J. Arias",
          },
          assist: {
            id: 12238,
            name: "S. Perez",
          },
          type: "subst",
          detail: "Substitution 1",
          comments: null,
        },
        {
          time: {
            elapsed: 79,
            extra: null,
          },
          team: {
            id: 2337,
            name: "Nublense",
            logo: "https://media.api-sports.io/football/teams/2337.png",
          },
          player: {
            id: 35671,
            name: "I. Sosa",
          },
          assist: {
            id: 11648,
            name: "P. Sanchez",
          },
          type: "subst",
          detail: "Substitution 3",
          comments: null,
        },
        {
          time: {
            elapsed: 89,
            extra: null,
          },
          team: {
            id: 2337,
            name: "Nublense",
            logo: "https://media.api-sports.io/football/teams/2337.png",
          },
          player: {
            id: 184883,
            name: "P. Bonacci",
          },
          assist: {
            id: 195801,
            name: "C. Medina",
          },
          type: "subst",
          detail: "Substitution 4",
          comments: null,
        },
        {
          time: {
            elapsed: 90,
            extra: null,
          },
          team: {
            id: 2337,
            name: "Nublense",
            logo: "https://media.api-sports.io/football/teams/2337.png",
          },
          player: {
            id: null,
            name: "M. Torrealba",
          },
          assist: {
            id: 11941,
            name: "B. Oyarzo Munoz",
          },
          type: "subst",
          detail: "Substitution 5",
          comments: null,
        },
        {
          time: {
            elapsed: 90,
            extra: 1,
          },
          team: {
            id: 2342,
            name: "D. Puerto Montt",
            logo: "https://media.api-sports.io/football/teams/2342.png",
          },
          player: {
            id: 11931,
            name: "M. Riveros",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Card",
          detail: "Red Card",
          comments: null,
        },
      ],
    },
    {
      fixture: {
        id: 1299787,
        referee: null,
        timezone: "UTC",
        date: "2024-10-25T22:00:00+00:00",
        timestamp: 1729893600,
        periods: {
          first: 1729893600,
          second: 1729897200,
        },
        venue: {
          id: 11250,
          name: "Estadio Juan N. López",
          city: "La Piedad",
        },
        status: {
          long: "Second Half",
          short: "2H",
          elapsed: 76,
          extra: null,
        },
      },
      league: {
        id: 872,
        name: "Liga Premier Serie B",
        country: "Mexico",
        logo: "https://media.api-sports.io/football/leagues/872.png",
        flag: "https://media.api-sports.io/flags/mx.svg",
        season: 2024,
        round: "Apertura - 8",
      },
      teams: {
        home: {
          id: 24941,
          name: "Real Zamora",
          logo: "https://media.api-sports.io/football/teams/24941.png",
          winner: true,
        },
        away: {
          id: 22056,
          name: "Poza Rica",
          logo: "https://media.api-sports.io/football/teams/22056.png",
          winner: false,
        },
      },
      goals: {
        home: 2,
        away: 0,
      },
      score: {
        halftime: {
          home: 1,
          away: 0,
        },
        fulltime: {
          home: null,
          away: null,
        },
        extratime: {
          home: null,
          away: null,
        },
        penalty: {
          home: null,
          away: null,
        },
      },
      events: [
        {
          time: {
            elapsed: 14,
            extra: null,
          },
          team: {
            id: 24941,
            name: "Real Zamora",
            logo: "https://media.api-sports.io/football/teams/24941.png",
          },
          player: {
            id: 453423,
            name: "I. Reyes",
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
        {
          time: {
            elapsed: 75,
            extra: null,
          },
          team: {
            id: 24941,
            name: "Real Zamora",
            logo: "https://media.api-sports.io/football/teams/24941.png",
          },
          player: {
            id: null,
            name: null,
          },
          assist: {
            id: null,
            name: null,
          },
          type: "Goal",
          detail: "Normal Goal",
          comments: null,
        },
      ],
    },
  ];
}

// Função para buscar os jogos ao vivo (modificada para usar mockData)
async function montaGridAoVivo() {
  const endpoint = "/fixtures"; // Endpoint da API
  const params = {
    live: "all", // Parâmetro para buscar todos os jogos ao vivo
  };

  const searchParams = new URLSearchParams(params);

  try {
    // Dados mockados para testes
    // const data = { response: mockData() };

    const res = await fetch(url + endpoint + "?" + searchParams, options); // Faz a requisição à API
    const data = await res.json();
    console.log(data.response);

    const liveMatches = data.response.slice(0, 20); // Pegue as 3 primeiras partidas mockadas

    // Chama a função para organizar e exibir as informações
    organizaInfos(liveMatches);
  } catch (error) {
    console.log("Erro ao buscar os jogos ao vivo:", error);
  }
}

// Função para organizar e exibir os dados no HTML
function organizaInfos(matches) {
  const liveMatchesContainer = document.getElementById("ao-vivo");

  // Limpa o conteúdo anterior (caso tenha atualizações)
  liveMatchesContainer.innerHTML = "";

  // Itera sobre os jogos ao vivo e cria o layout para cada jogo
  matches.forEach((match, index) => {
    const matchElement = document.createElement("div");
    matchElement.classList.add("match-ao-vivo");

    // Trata o tempo do jogo
    let tempo = match.fixture.status.short;
    if (tempo === "1H") {
      tempo = "1º";
    } else if (tempo === "2H") {
      tempo = "2º";
    }
    // else if (tempo === "HT") {
    //   tempo = "HT";
    //   document.querySelectorAll(".tempo").style.width = "23px !important";
    // }

    // IDs dinâmicos para os cartões
    const cartaoAmareloHomeId = `cartaoAmareloHome-${index}`;
    const cartaoVermelhoHomeId = `cartaoVermelhoHome-${index}`;
    const cartaoAmareloAwayId = `cartaoAmareloAway-${index}`;
    const cartaoVermelhoAwayId = `cartaoVermelhoAway-${index}`;

    const golsHomeElemento = `golsHome-${index}`;
    const golsAwayElemento = `golsAway-${index}`;

    // Inicializa contadores de cartões
    let countCartoesAmarelosHome = 0;
    let countCartoesVermelhosHome = 0;
    let countCartoesAmarelosAway = 0;
    let countCartoesVermelhosAway = 0;

    // Layout da partida ao vivo
    matchElement.innerHTML = `
      <div class="infos">
        <h6 class="title-liga">${match.league.name}</h6>
        <span class="tempo">${tempo}
          <span class="minuto">${match.fixture.status.elapsed}'</span>
        </span>
      </div>
      <div class="resultado-partida">
        <div class="team">
          <img src="${match.teams.home.logo}" alt="${match.teams.home.name}" class="team-logo">
          <span class="team-name">${match.teams.home.name}</span>
        </div>
        <div class="eventos-jogo">
          <span class="cartao cartao-amarelo" id="${cartaoAmareloHomeId}" data-bs-placement="bottom">${countCartoesAmarelosHome}</span>
          <span class="cartao cartao-vermelho" id="${cartaoVermelhoHomeId}" data-bs-placement="bottom">${countCartoesVermelhosHome}</span>
          <img class="subs" id="substituicaoHome-${index}" src="assets/sub.png" data-bs-placement="bottom">
          <span class="team-score" id="golsHome-${index}" data-bs-placement="left">${match.goals.home}</span>
        </div>
      </div>                    
      <div class="resultado-partida">
        <div class="team">
          <img src="${match.teams.away.logo}" alt="${match.teams.away.name}" class="team-logo">
          <span class="team-name">${match.teams.away.name}</span>
        </div>
        <div class="eventos-jogo">
          <span class="cartao cartao-amarelo" id="${cartaoAmareloAwayId}" data-bs-placement="bottom">${countCartoesAmarelosAway}</span>
          <span class="cartao cartao-vermelho" id="${cartaoVermelhoAwayId}" data-bs-placement="bottom">${countCartoesVermelhosAway}</span>
          <img class="subs" id="substituicaoAway-${index}" src="assets/sub.png" data-bs-placement="bottom">
          <span class="team-score" id="golsAway-${index}" data-bs-placement="left">${match.goals.away}</span>
        </div>
      </div>
      <hr>
    `;

    // Adiciona o jogo ao container
    liveMatchesContainer.appendChild(matchElement);

    // ID times
    const idTimeHome = match.teams.home.id;
    const idTimeAway = match.teams.away.id;

    // Exibe o cartão caso haja eventos de cartão
    const cartaoAmareloHome = document.getElementById(cartaoAmareloHomeId);
    const cartaoVermelhoHome = document.getElementById(cartaoVermelhoHomeId);
    const cartaoAmareloAway = document.getElementById(cartaoAmareloAwayId);
    const cartaoVermelhoAway = document.getElementById(cartaoVermelhoAwayId);

    // Exibe o ícone de substituição caso haja eventos de substituição
    const iconSubHome = document.getElementById(`substituicaoHome-${index}`);
    const iconSubAway = document.getElementById(`substituicaoAway-${index}`);

    const golsHome = document.getElementById(`golsHome-${index}`);
    const golsAway = document.getElementById(`golsAway-${index}`);

    // Inicializa arrays para armazenar as substituições para cada time
    let substituicoesHome = [];
    let substituicoesAway = [];

    // Executa em cada evento
    match.events.forEach((event) => {
      // Armazena o nome do jogador do evento
      const jogador = event.player.name || "<b>GOL</b>";

      // Verifica se o tipo do evento é "Card"
      if (event.type === "Card") {
        const jogadorCartao = event.player.name || " ";
        const tempoCartao =
          event.time.elapsed || "Erro ao buscar tempo do cartão";

        switch (event.detail) {
          case "Yellow Card":
            if (event.team.id == idTimeHome) {
              countCartoesAmarelosHome++;
              cartaoAmareloHome.textContent = `${countCartoesAmarelosHome}`;
              cartaoAmareloHome.style.display = "flex";

              // Adiciona o nome do jogador ao título do cartão
              const titleAtualHome =
                cartaoAmareloHome.getAttribute("title") || "";
              cartaoAmareloHome.setAttribute(
                "title",
                `${titleAtualHome} <b>${tempoCartao}'</b>:<br> ${jogadorCartao}<br>`
              );
              cartaoAmareloHome.setAttribute("data-bs-html", "true");
              cartaoAmareloHome.setAttribute("data-bs-toggle", "tooltip");
            } else if (event.team.id == idTimeAway) {
              countCartoesAmarelosAway++;
              cartaoAmareloAway.textContent = `${countCartoesAmarelosAway}`;
              cartaoAmareloAway.style.display = "flex";

              // Adiciona o nome do jogador ao título do cartão
              const titleAtualAway =
                cartaoAmareloAway.getAttribute("title") || "";
              cartaoAmareloAway.setAttribute(
                "title",
                `${titleAtualAway} <b>${tempoCartao}'</b>:<br> ${jogadorCartao}<br>`
              );
              cartaoAmareloAway.setAttribute("data-bs-html", "true");
              cartaoAmareloAway.setAttribute("data-bs-toggle", "tooltip");
            }
            break;

          case "Red Card":
            if (event.team.id == idTimeHome) {
              countCartoesVermelhosHome++;
              cartaoVermelhoHome.textContent = `${countCartoesVermelhosHome}`;
              cartaoVermelhoHome.style.display = "flex";

              // Adiciona o nome do jogador ao título do cartão
              const titleAtualHomeRed =
                cartaoVermelhoHome.getAttribute("title") || "";
              cartaoVermelhoHome.setAttribute(
                "title",
                `${titleAtualHomeRed} <b>${tempoCartao}'</b>:<br> ${jogador}<br>`
              );
              cartaoVermelhoHome.setAttribute("data-bs-html", "true");
              cartaoVermelhoHome.setAttribute("data-bs-toggle", "tooltip");
            } else if (event.team.id == idTimeAway) {
              countCartoesVermelhosAway++;
              cartaoVermelhoAway.textContent = `${countCartoesVermelhosAway}`;
              cartaoVermelhoAway.style.display = "flex";

              // Adiciona o nome do jogador ao título do cartão
              const titleAtualAwayRed =
                cartaoVermelhoAway.getAttribute("title") || "";
              cartaoVermelhoAway.setAttribute(
                "title",
                `${titleAtualAwayRed} <b>${tempoCartao}'</b>:<br> ${jogador}<br>`
              );
              cartaoVermelhoAway.setAttribute("data-bs-html", "true");
              cartaoVermelhoAway.setAttribute("data-bs-toggle", "tooltip");
            }
            break;

          default:
            break; // Caso para ignorar eventos não relacionados
        }
      }

      // Verifica se o evento é do tipo "subst" (substituição)
      if (event.type === "subst") {
        const jogadorEntrou = event.player.name || " ";
        const jogadorSaiu = event.assist.name || " ";

        const tempoSub = event.time.elapsed;

        const setaVerde = '<i class="fas fa-arrow-right seta-verde"></i>'; // Ícone verde para o jogador que entrou
        const setaVermelha = '<i class="fas fa-arrow-left seta-vermelha"></i>'; // Ícone vermelho para o jogador que saiu

        if (event.team.id == idTimeHome) {
          // Adiciona a substituição ao time da casa
          iconSubHome.style.display = "block";
          substituicoesHome.push(
            `<strong>${tempoSub}'</strong>:<br> <strong>Saiu:</strong> ${jogadorSaiu} ${setaVermelha} <br> <strong>Entrou:</strong> ${jogadorEntrou} ${setaVerde}`
          );
          iconSubHome.setAttribute("data-bs-toggle", "tooltip");
          iconSubHome.setAttribute("data-bs-html", "true");
          iconSubHome.setAttribute("title", substituicoesHome.join("<br>"));
        } else if (event.team.id == idTimeAway) {
          // Adiciona a substituição ao time visitante
          iconSubAway.style.display = "block";
          substituicoesAway.push(
            `<strong>${tempoSub}'</strong>:<br> <strong>Saiu:</strong> ${jogadorSaiu} ${setaVermelha} <br> <strong>Entrou:</strong> ${jogadorEntrou} ${setaVerde}`
          );
          iconSubAway.setAttribute("data-bs-toggle", "tooltip");
          iconSubAway.setAttribute("data-bs-html", "true");
          iconSubAway.setAttribute("title", substituicoesAway.join("<br>"));
        }
      }

      if (event.type === "Goal") {
        const tempoGol = event.time.elapsed || "Tempo desconhecido";

        if (event.team.id == idTimeHome) {
          // Recupera o título atual para garantir que os gols anteriores permaneçam
          const titleAtualHomeGols = golsHome.getAttribute("title") || "";

          // Adiciona o novo gol ao título, acumulando com os anteriores
          const novoTitleHomeGols = `${titleAtualHomeGols}<strong>${tempoGol}'</strong>: ${jogador}<br>`;
          golsHome.setAttribute("title", novoTitleHomeGols);

          // Configura tooltip para exibir HTML
          golsHome.setAttribute("data-bs-toggle", "tooltip");
          golsHome.setAttribute("data-bs-html", "true");
        } else if (event.team.id == idTimeAway) {
          // Mesma lógica para o time visitante
          const titleAtualAwayGols = golsAway.getAttribute("title") || "";
          const novoTitleAwayGols = `${titleAtualAwayGols}<strong>${tempoGol}'</strong>: ${jogador}<br>`;
          golsAway.setAttribute("title", novoTitleAwayGols);

          golsAway.setAttribute("data-bs-toggle", "tooltip");
          golsAway.setAttribute("data-bs-html", "true");
        }
      }
    });

    // Inicializa o tooltip
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });
}

// Chamada inicial
montaGridAoVivo();

setInterval(async () => {
  montaGridAoVivo();
  organizaInfos();
}, 60000);
