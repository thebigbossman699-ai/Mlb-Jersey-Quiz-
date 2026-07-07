const teams = [
{
    team: "New York Yankees",
    players: [
        { name: "Aaron Judge", position: "RF", number: 99 },
        { name: "Anthony Volpe", position: "SS", number: 11 },
        { name: "Jazz Chisholm Jr.", position: "2B", number: 13 },
        { name: "Paul Goldschmidt", position: "1B", number: 48 },
        { name: "Austin Wells", position: "C", number: 28 },
        { name: "Jasson Domínguez", position: "LF", number: 24 },
        { name: "Trent Grisham", position: "CF", number: 12 },
        { name: "Oswald Peraza", position: "3B", number: 18 },
        { name: "Carlos Rodón", position: "ACE", number: 55 },
        { name: "Ben Rice", position: "DH", number: 22 }
    ]
},

{
    team: "Los Angeles Dodgers",
    players: [
        { name: "Shohei Ohtani", position: "DH", number: 17 },
        { name: "Mookie Betts", position: "SS", number: 50 },
        { name: "Freddie Freeman", position: "1B", number: 5 },
        { name: "Will Smith", position: "C", number: 16 },
        { name: "Teoscar Hernández", position: "RF", number: 37 },
        { name: "Tommy Edman", position: "CF", number: 25 },
        { name: "Michael Conforto", position: "LF", number: 23 },
        { name: "Max Muncy", position: "3B", number: 13 },
        { name: "Hyeseong Kim", position: "2B", number: 6 },
        { name: "Yoshinobu Yamamoto", position: "ACE", number: 18 }
    ]
},

{
    team: "Atlanta Braves",
    players: [
        { name: "Ronald Acuña Jr.", position: "RF", number: 13 },
        { name: "Matt Olson", position: "1B", number: 28 },
        { name: "Austin Riley", position: "3B", number: 27 },
        { name: "Marcell Ozuna", position: "DH", number: 20 },
        { name: "Ozzie Albies", position: "2B", number: 1 },
        { name: "Michael Harris II", position: "CF", number: 23 },
        { name: "Sean Murphy", position: "C", number: 12 },
        { name: "Orlando Arcia", position: "SS", number: 11 },
        { name: "Spencer Strider", position: "ACE", number: 65 },
        { name: "Chris Sale", position: "SP", number: 51 }
    ]
},

{
    team: "Philadelphia Phillies",
    players: [
        { name: "Bryce Harper", position: "1B", number: 3 },
        { name: "Trea Turner", position: "SS", number: 7 },
        { name: "Kyle Schwarber", position: "DH", number: 12 },
        { name: "J.T. Realmuto", position: "C", number: 10 },
        { name: "Nick Castellanos", position: "RF", number: 8 },
        { name: "Alec Bohm", position: "3B", number: 28 },
        { name: "Bryson Stott", position: "2B", number: 5 },
        { name: "Johan Rojas", position: "CF", number: 18 },
        { name: "Brandon Marsh", position: "LF", number: 16 },
        { name: "Zack Wheeler", position: "ACE", number: 45 }
    ]
},

{
    team: "Houston Astros",
    players: [
        { name: "Jose Altuve", position: "2B", number: 27 },
        { name: "Yordan Alvarez", position: "DH", number: 44 },
        { name: "Kyle Tucker", position: "RF", number: 30 },
        { name: "Alex Bregman", position: "3B", number: 2 },
        { name: "Jeremy Peña", position: "SS", number: 3 },
        { name: "Yainer Diaz", position: "C", number: 21 },
        { name: "Jake Meyers", position: "CF", number: 6 },
        { name: "Jon Singleton", position: "1B", number: 28 },
        { name: "Chas McCormick", position: "LF", number: 20 },
        { name: "Framber Valdez", position: "ACE", number: 59 }
    ]
},

{
    team: "Texas Rangers",
    players: [
        { name: "Corey Seager", position: "SS", number: 5 },
        { name: "Marcus Semien", position: "2B", number: 2 },
        { name: "Adolis García", position: "RF", number: 53 },
        { name: "Josh Jung", position: "3B", number: 6 },
        { name: "Nathaniel Lowe", position: "1B", number: 30 },
        { name: "Wyatt Langford", position: "LF", number: 36 },
        { name: "Jonah Heim", position: "C", number: 28 },
        { name: "Leody Taveras", position: "CF", number: 3 },
        { name: "Evan Carter", position: "DH", number: 32 },
        { name: "Jacob deGrom", position: "ACE", number: 48 }
    ]
},

{
    team: "Seattle Mariners",
    players: [
        { name: "Julio Rodríguez", position: "CF", number: 44 },
        { name: "Cal Raleigh", position: "C", number: 29 },
        { name: "Jorge Polanco", position: "2B", number: 7 },
        { name: "J.P. Crawford", position: "SS", number: 3 },
        { name: "Randy Arozarena", position: "LF", number: 56 },
        { name: "Luke Raley", position: "RF", number: 20 },
        { name: "Ty France", position: "1B", number: 23 },
        { name: "Josh Rojas", position: "3B", number: 4 },
        { name: "Victor Robles", position: "DH", number: 10 },
        { name: "Logan Gilbert", position: "ACE", number: 36 }
    ]
},

{
    team: "New York Mets",
    players: [
        { name: "Juan Soto", position: "RF", number: 22 },
        { name: "Francisco Lindor", position: "SS", number: 12 },
        { name: "Pete Alonso", position: "1B", number: 20 },
        { name: "Brandon Nimmo", position: "LF", number: 9 },
        { name: "Mark Vientos", position: "3B", number: 27 },
        { name: "Jeff McNeil", position: "2B", number: 1 },
        { name: "Francisco Alvarez", position: "C", number: 4 },
        { name: "Tyrone Taylor", position: "CF", number: 15 },
        { name: "Starling Marte", position: "DH", number: 6 },
        { name: "Kodai Senga", position: "ACE", number: 34 }
    ]
},

{
    team: "San Diego Padres",
    players: [
        { name: "Fernando Tatís Jr.", position: "RF", number: 23 },
        { name: "Manny Machado", position: "3B", number: 13 },
        { name: "Luis Arraez", position: "2B", number: 4 },
        { name: "Xander Bogaerts", position: "SS", number: 2 },
        { name: "Jackson Merrill", position: "CF", number: 3 },
        { name: "Jake Cronenworth", position: "1B", number: 9 },
        { name: "Luis Campusano", position: "C", number: 12 },
        { name: "Jurickson Profar", position: "LF", number: 10 },
        { name: "Elias Díaz", position: "DH", number: 35 },
        { name: "Dylan Cease", position: "ACE", number: 84 }
    ]
},

{
    team: "Chicago Cubs",
    players: [
        { name: "Seiya Suzuki", position: "RF", number: 27 },
        { name: "Ian Happ", position: "LF", number: 8 },
        { name: "Dansby Swanson", position: "SS", number: 7 },
        { name: "Michael Busch", position: "1B", number: 29 },
        { name: "Nico Hoerner", position: "2B", number: 2 },
        { name: "Pete Crow-Armstrong", position: "CF", number: 52 },
        { name: "Matt Shaw", position: "3B", number: 6 },
        { name: "Miguel Amaya", position: "C", number: 9 },
        { name: "Kyle Tucker", position: "DH", number: 30 },
        { name: "Shota Imanaga", position: "ACE", number: 18 }
    ]
}
];{
    team: "Boston Red Sox",
    players: [
        { name: "Rafael Devers", position: "3B", number: 11 },
        { name: "Jarren Duran", position: "CF", number: 16 },
        { name: "Alex Bregman", position: "2B", number: 2 },
        { name: "Trevor Story", position: "SS", number: 10 },
        { name: "Triston Casas", position: "1B", number: 36 },
        { name: "Wilyer Abreu", position: "RF", number: 52 },
        { name: "Ceddanne Rafaela", position: "LF", number: 3 },
        { name: "Connor Wong", position: "C", number: 12 },
        { name: "Masataka Yoshida", position: "DH", number: 7 },
        { name: "Garrett Crochet", position: "ACE", number: 35 }
    ]
},

{
    team: "Toronto Blue Jays",
    players: [
        { name: "Vladimir Guerrero Jr.", position: "1B", number: 27 },
        { name: "Bo Bichette", position: "SS", number: 11 },
        { name: "George Springer", position: "RF", number: 4 },
        { name: "Daulton Varsho", position: "LF", number: 25 },
        { name: "Andrés Giménez", position: "2B", number: 0 },
        { name: "Alejandro Kirk", position: "C", number: 30 },
        { name: "Ernie Clement", position: "3B", number: 28 },
        { name: "Nathan Lukes", position: "CF", number: 38 },
        { name: "Addison Barger", position: "DH", number: 47 },
        { name: "Kevin Gausman", position: "ACE", number: 34 }
    ]
},

{
    team: "Tampa Bay Rays",
    players: [
        { name: "Yandy Díaz", position: "1B", number: 2 },
        { name: "Junior Caminero", position: "3B", number: 1 },
        { name: "Brandon Lowe", position: "2B", number: 8 },
        { name: "Josh Lowe", position: "RF", number: 15 },
        { name: "Jonny DeLuca", position: "CF", number: 21 },
        { name: "Taylor Walls", position: "SS", number: 6 },
        { name: "Ben Rortvedt", position: "C", number: 30 },
        { name: "Christopher Morel", position: "DH", number: 5 },
        { name: "José Caballero", position: "LF", number: 7 },
        { name: "Shane McClanahan", position: "ACE", number: 18 }
    ]
},

{
    team: "Baltimore Orioles",
    players: [
        { name: "Gunnar Henderson", position: "SS", number: 2 },
        { name: "Adley Rutschman", position: "C", number: 35 },
        { name: "Jackson Holliday", position: "2B", number: 7 },
        { name: "Colton Cowser", position: "CF", number: 17 },
        { name: "Jordan Westburg", position: "3B", number: 11 },
        { name: "Ryan Mountcastle", position: "1B", number: 6 },
        { name: "Cedric Mullins", position: "LF", number: 31 },
        { name: "Heston Kjerstad", position: "DH", number: 13 },
        { name: "Tyler O'Neill", position: "RF", number: 27 },
        { name: "Grayson Rodriguez", position: "ACE", number: 30 }
    ]
},

{
    team: "Cleveland Guardians",
    players: [
        { name: "José Ramírez", position: "3B", number: 11 },
        { name: "Steven Kwan", position: "LF", number: 38 },
        { name: "Kyle Manzardo", position: "1B", number: 9 },
        { name: "Andrés Giménez", position: "2B", number: 0 },
        { name: "Brayan Rocchio", position: "SS", number: 6 },
        { name: "David Fry", position: "C", number: 6 },
        { name: "Lane Thomas", position: "RF", number: 8 },
        { name: "Jhonkensy Noel", position: "DH", number: 43 },
        { name: "Myles Straw", position: "CF", number: 7 },
        { name: "Tanner Bibee", position: "ACE", number: 28 }
    ]
},

{
    team: "Detroit Tigers",
    players: [
        { name: "Riley Greene", position: "CF", number: 31 },
        { name: "Spencer Torkelson", position: "1B", number: 20 },
        { name: "Kerry Carpenter", position: "RF", number: 30 },
        { name: "Colt Keith", position: "2B", number: 33 },
        { name: "Javy Báez", position: "SS", number: 28 },
        { name: "Matt Vierling", position: "3B", number: 8 },
        { name: "Zach McKinstry", position: "LF", number: 39 },
        { name: "Jake Rogers", position: "C", number: 34 },
        { name: "Wenceel Pérez", position: "DH", number: 46 },
        { name: "Tarik Skubal", position: "ACE", number: 29 }
    ]
},

{
    team: "Minnesota Twins",
    players: [
        { name: "Byron Buxton", position: "CF", number: 25 },
        { name: "Carlos Correa", position: "SS", number: 4 },
        { name: "Royce Lewis", position: "3B", number: 23 },
        { name: "Matt Wallner", position: "RF", number: 38 },
        { name: "Trevor Larnach", position: "LF", number: 9 },
        { name: "Jose Miranda", position: "1B", number: 64 },
        { name: "Edouard Julien", position: "2B", number: 47 },
        { name: "Ryan Jeffers", position: "C", number: 27 },
        { name: "Christian Vázquez", position: "DH", number: 8 },
        { name: "Pablo López", position: "ACE", number: 49 }
    ]
},

{
    team: "Kansas City Royals",
    players: [
        { name: "Bobby Witt Jr.", position: "SS", number: 7 },
        { name: "Vinnie Pasquantino", position: "1B", number: 9 },
        { name: "Salvador Perez", position: "C", number: 13 },
        { name: "Maikel Garcia", position: "3B", number: 11 },
        { name: "MJ Melendez", position: "RF", number: 1 },
        { name: "Kyle Isbel", position: "CF", number: 28 },
        { name: "Jonathan India", position: "2B", number: 6 },
        { name: "Michael Massey", position: "DH", number: 19 },
        { name: "Dairon Blanco", position: "LF", number: 44 },
        { name: "Cole Ragans", position: "ACE", number: 55 }
    ]
},

{
    team: "Chicago White Sox",
    players: [
        { name: "Luis Robert Jr.", position: "CF", number: 88 },
        { name: "Andrew Vaughn", position: "1B", number: 25 },
        { name: "Lenyn Sosa", position: "2B", number: 50 },
        { name: "Miguel Vargas", position: "3B", number: 20 },
        { name: "Andrew Benintendi", position: "LF", number: 23 },
        { name: "Michael A. Taylor", position: "RF", number: 32 },
        { name: "Edgar Quero", position: "C", number: 35 },
        { name: "Colson Montgomery", position: "SS", number: 97 },
        { name: "Gavin Sheets", position: "DH", number: 32 },
        { name: "Garrett Crochet", position: "ACE", number: 35 }
    ]
},

{
    team: "Cincinnati Reds",
    players: [
        { name: "Elly De La Cruz", position: "SS", number: 44 },
        { name: "Matt McLain", position: "2B", number: 9 },
        { name: "Spencer Steer", position: "1B", number: 7 },
        { name: "Hunter Greene", position: "ACE", number: 21 },
        { name: "TJ Friedl", position: "CF", number: 29 },
        { name: "Austin Hays", position: "LF", number: 15 },
        { name: "Jeimer Candelario", position: "3B", number: 3 },
        { name: "Tyler Stephenson", position: "C", number: 37 },
        { name: "Jake Fraley", position: "RF", number: 27 },
        { name: "Christian Encarnacion-Strand", position: "DH", number: 33 }
    ]
},{
    team: "Arizona Diamondbacks",
    players: [
        { name: "Corbin Carroll", position: "RF", number: 7 },
        { name: "Ketel Marte", position: "2B", number: 4 },
        { name: "Lourdes Gurriel Jr.", position: "LF", number: 12 },
        { name: "Christian Walker", position: "1B", number: 53 },
        { name: "Eugenio Suárez", position: "3B", number: 28 },
        { name: "Geraldo Perdomo", position: "SS", number: 2 },
        { name: "Gabriel Moreno", position: "C", number: 14 },
        { name: "Jake McCarthy", position: "CF", number: 31 },
        { name: "Joc Pederson", position: "DH", number: 6 },
        { name: "Zac Gallen", position: "ACE", number: 23 }
    ]
},

{
    team: "Colorado Rockies",
    players: [
        { name: "Ezequiel Tovar", position: "SS", number: 14 },
        { name: "Michael Toglia", position: "1B", number: 29 },
        { name: "Brendan Rodgers", position: "2B", number: 7 },
        { name: "Ryan McMahon", position: "3B", number: 24 },
        { name: "Brenton Doyle", position: "CF", number: 9 },
        { name: "Nolan Jones", position: "LF", number: 10 },
        { name: "Hunter Goodman", position: "C", number: 15 },
        { name: "Jordan Beck", position: "RF", number: 28 },
        { name: "Kris Bryant", position: "DH", number: 23 },
        { name: "German Márquez", position: "ACE", number: 48 }
    ]
},

{
    team: "San Francisco Giants",
    players: [
        { name: "Matt Chapman", position: "3B", number: 26 },
        { name: "Willy Adames", position: "SS", number: 2 },
        { name: "Heliot Ramos", position: "CF", number: 17 },
        { name: "Jung Hoo Lee", position: "RF", number: 51 },
        { name: "LaMonte Wade Jr.", position: "1B", number: 31 },
        { name: "Tyler Fitzgerald", position: "2B", number: 49 },
        { name: "Patrick Bailey", position: "C", number: 14 },
        { name: "Mike Yastrzemski", position: "LF", number: 5 },
        { name: "Wilmer Flores", position: "DH", number: 41 },
        { name: "Logan Webb", position: "ACE", number: 62 }
    ]
},

{
    team: "Miami Marlins",
    players: [
        { name: "Xavier Edwards", position: "2B", number: 9 },
        { name: "Jake Burger", position: "3B", number: 36 },
        { name: "Dane Myers", position: "CF", number: 13 },
        { name: "Jesus Sánchez", position: "RF", number: 12 },
        { name: "Otto Lopez", position: "SS", number: 6 },
        { name: "Kyle Stowers", position: "LF", number: 28 },
        { name: "Agustín Ramírez", position: "C", number: 70 },
        { name: "Matt Mervis", position: "1B", number: 22 },
        { name: "Connor Norby", position: "DH", number: 11 },
        { name: "Edward Cabrera", position: "ACE", number: 27 }
    ]
},

{
    team: "St. Louis Cardinals",
    players: [
        { name: "Nolan Arenado", position: "3B", number: 28 },
        { name: "Willson Contreras", position: "C", number: 40 },
        { name: "Brendan Donovan", position: "2B", number: 33 },
        { name: "Masyn Winn", position: "SS", number: 0 },
        { name: "Lars Nootbaar", position: "CF", number: 21 },
        { name: "Jordan Walker", position: "RF", number: 18 },
        { name: "Alec Burleson", position: "LF", number: 41 },
        { name: "Nolan Gorman", position: "DH", number: 16 },
        { name: "Willson Contreras", position: "1B", number: 40 },
        { name: "Sonny Gray", position: "ACE", number: 54 }
    ]
},

{
    team: "Milwaukee Brewers",
    players: [
        { name: "William Contreras", position: "C", number: 24 },
        { name: "Jackson Chourio", position: "CF", number: 11 },
        { name: "Brice Turang", position: "2B", number: 0 },
        { name: "Sal Frelick", position: "RF", number: 10 },
        { name: "Christian Yelich", position: "LF", number: 22 },
        { name: "Rhys Hoskins", position: "1B", number: 12 },
        { name: "Joey Ortiz", position: "3B", number: 3 },
        { name: "Willy Adames", position: "SS", number: 1 },
        { name: "Jake Bauers", position: "DH", number: 9 },
        { name: "Freddy Peralta", position: "ACE", number: 51 }
    ]
},

{
    team: "Pittsburgh Pirates",
    players: [
        { name: "Oneil Cruz", position: "SS", number: 15 },
        { name: "Bryan Reynolds", position: "LF", number: 10 },
        { name: "Ke'Bryan Hayes", position: "3B", number: 13 },
        { name: "Nick Gonzales", position: "2B", number: 39 },
        { name: "Andrew McCutchen", position: "DH", number: 22 },
        { name: "Henry Davis", position: "C", number: 32 },
        { name: "Joshua Palacios", position: "RF", number: 27 },
        { name: "Travis Swaggerty", position: "CF", number: 18 },
        { name: "Rowdy Tellez", position: "1B", number: 44 },
        { name: "Paul Skenes", position: "ACE", number: 30 }
    ]
},

{
    team: "Washington Nationals",
    players: [
        { name: "CJ Abrams", position: "SS", number: 5 },
        { name: "James Wood", position: "LF", number: 29 },
        { name: "Luis García Jr.", position: "2B", number: 2 },
        { name: "Keibert Ruiz", position: "C", number: 20 },
        { name: "Nathaniel Lowe", position: "1B", number: 30 },
        { name: "Dylan Crews", position: "CF", number: 15 },
        { name: "Jose Tena", position: "3B", number: 7 },
        { name: "Alex Call", position: "RF", number: 17 },
        { name: "Jacob Young", position: "DH", number: 30 },
        { name: "MacKenzie Gore", position: "ACE", number: 1 }
    ]
},

{
    team: "Los Angeles Angels",
    players: [
        { name: "Mike Trout", position: "CF", number: 27 },
        { name: "Taylor Ward", position: "LF", number: 3 },
        { name: "Nolan Schanuel", position: "1B", number: 18 },
        { name: "Zach Neto", position: "SS", number: 9 },
        { name: "Nolan Jones", position: "3B", number: 10 },
        { name: "Logan O'Hoppe", position: "C", number: 14 },
        { name: "Jo Adell", position: "RF", number: 7 },
        { name: "Luis Rengifo", position: "2B", number: 2 },
        { name: "Jorge Soler", position: "DH", number: 12 },
        { name: "Tyler Anderson", position: "ACE", number: 31 }
    ]
},

{
    team: "Oakland Athletics",
    players: [
        { name: "Jacob Wilson", position: "SS", number: 5 },
        { name: "Brent Rooker", position: "DH", number: 25 },
        { name: "Lawrence Butler", position: "RF", number: 4 },
        { name: "Tyler Soderstrom", position: "1B", number: 28 },
        { name: "Zack Gelof", position: "2B", number: 20 },
        { name: "JJ Bleday", position: "CF", number: 33 },
        { name: "Shea Langeliers", position: "C", number: 23 },
        { name: "Max Schuemann", position: "LF", number: 12 },
        { name: "Noelvi Marte", position: "3B", number: 16 },
        { name: "JP Sears", position: "ACE", number: 38 }
    ]
}
];
