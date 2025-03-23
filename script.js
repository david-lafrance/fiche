// Liste des bonus par niveau et par classe
const modparclasse = new Map() ;
modparclasse.set('None', Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,    6)) ;
modparclasse.set('Barbare', Array(1,0,2,0, 2,0,3,0, 3,1,3,1, 4,1,4,1, 5,1,4,1, 6,2,5,2, 7,2,5,2, 8,2,6,2, 9,3,6,3, 10,3,7,3, 11,3,7,3, 12,4,8,4, 13,4,8,4, 14,4,9,4, 15,5,9,5, 16,5,10,5, 17,5,10,5, 18,6,11,6, 19,6,11,6, 20,6,12,6,   12)) ;
modparclasse.set('Barde', Array(0,2,0,2, 1,3,0,3, 2,3,1,3, 3,4,1,4, 3,4,1,4, 4,5,2,5, 5,5,2,5, 6,6,2,6, 6,6,3,6, 7,7,3,7, 8,7,3,7, 9,8,4,8, 9,8,4,8, 10,9,4,9, 11,9,5,9, 12,10,5,10,12,10,5,10, 13,11,6,11, 14,11,6,11, 15,12,6,12,   8)) ;
modparclasse.set('Druide', Array(0,0,2,2, 1,0,3,3, 2,1,3,3, 3,1,4,4, 3,1,4,4, 4,2,5,5, 5,2,5,5, 6,2,6,6, 6,3,6,6, 7,3,7,7, 8,3,7,7, 9,4,8,8, 9,4,8,8, 10,4,9,9, 11,5,9,9, 12,5,10,10, 12,5,10,10, 13,6,11,11, 14,6,11,11, 15,6,12,12,   8)) ;
modparclasse.set('Magus', Array(0,0,2,2, 1,0,3,3, 2,1,3,3, 3,1,4,4, 3,1,4,4, 4,2,5,5, 5,2,5,5, 6,2,6,6, 6,3,6,6, 7,3,7,7, 8,3,7,7, 9,4,8,8, 9,4,8,8, 10,4,9,9, 11,5,9,9, 12,5,10,10, 12,5,10,10, 13,6,11,11, 14,6,11,11, 15,6,12,12,   6)) ;
modparclasse.set('Cinétiste', Array(0,2,2,0, 1,3,3,0, 2,3,3,1, 3,4,4,1, 3,4,4,1, 4,5,5,2, 5,5,5,2, 6,6,6,2, 6,6,6,3, 7,7,7,3, 8,7,7,3, 9,8,8,4, 9,8,8,4, 10,9,9,4, 11,9,9,5, 12,10,10,5, 12,10,10,5, 13,11,11,6, 14,11,11,6, 15,12,12,6,   8)) ;
modparclasse.set('Alchimiste', Array(0,2,2,0, 1,3,3,0, 2,3,3,1, 3,4,4,1, 3,4,4,1, 4,5,5,2, 5,5,5,2, 6,6,6,2, 6,6,6,3, 7,7,7,3, 8,7,7,3, 9,8,8,4, 9,8,8,4, 10,9,9,4, 11,9,9,5, 12,10,10,5, 12,10,10,5, 13,11,11,6, 14,11,11,6, 15,12,12,6,   8)) ;
modparclasse.set('Guerrier', Array(1,0,2,0, 2,0,3,0, 3,1,3,1, 4,1,4,1, 5,1,4,1, 6,2,5,2, 7,2,5,2, 8,2,6,2, 9,3,6,3, 10,3,7,3, 11,3,7,3, 12,4,8,4, 13,4,8,4, 14,4,9,4, 15,5,9,5, 16,5,10,5, 17,5,10,5, 18,6,11,6, 19,6,11,6, 20,6,12,6,    10)) ;
modparclasse.set('Magicien', Array(0,0,0,2, 1,0,0,3, 1,1,1,3, 2,1,1,4, 2,1,1,4, 3,2,2,5, 3,2,2,5, 4,2,2,6, 4,3,3,6, 5,3,3,7, 5,3,3,7, 6,4,4,8, 6,4,4,8, 7,4,4,9, 7,5,5,9, 8,5,5,10, 8,5,5,10, 9,6,6,11, 9,6,6,11, 10,6,6,12,   6)) ;
modparclasse.set('Roublard',Array(0,2,0,0, 1,3,0,0, 2,3,1,1, 3,4,1,1, 3,4,1,1, 4,5,2,2, 5,5,2,2, 6,6,2,2, 6,6,3,3, 7,7,3,3, 8,7,3,3, 9,8,4,4, 9,8,4,4, 10,9,4,4, 11,9,5,5, 12,10,5,5, 12,10,5,5, 13,11,6,6, 14,11,6,6, 15,12,6,6,   8)) ;
modparclasse.set('Paladin',Array(1,0,2,2, 2,0,3,3, 3,1,3,3, 4,1,4,4, 5,1,4,4, 6,2,5,5, 7,2,5,5, 8,2,6,6, 9,3,6,6, 10,3,7,7, 11,3,7,7, 12,4,8,8, 13,4,8,8, 14,4,9,9, 15,5,9,9, 16,5,10,10, 17,5,10,10, 18,6,11,11, 19,6,11,11, 20,6,12,12,   10)) ;
modparclasse.set('Rôdeur',Array(1,2,2,0, 2,3,3,0, 3,3,3,1, 4,4,4,1, 5,4,4,1, 6,5,5,2, 7,5,5,2, 8,6,6,2, 9,6,6,3, 10,7,7,3, 11,7,7,3, 12,8,8,4, 13,8,8,4, 14,9,9,4, 15,9,9,5, 16,10,10,5, 17,10,10,5, 18,11,11,6, 19,11,11,6, 20,12,12,6,   10)) ;
modparclasse.set('Prêtre',Array(0,0,2,2, 1,0,3,3, 2,1,3,3, 3,1,4,4, 3,1,4,4, 4,2,5,5, 5,2,5,5, 6,2,6,6, 6,3,6,6, 7,3,7,7, 8,3,7,7, 9,4,8,8, 9,4,8,8, 10,4,9,9, 11,5,9,9, 12,5,10,10, 12,5,10,10, 13,6,11,11, 14,6,11,11, 15,6,12,12,   8)) ;
modparclasse.set('Ensorceleur',Array(0,0,0,2, 1,0,0,3, 1,1,1,3, 2,1,1,4, 2,1,1,4, 3,2,2,5, 3,2,2,5, 4,2,2,6, 4,3,3,6, 5,3,3,7, 5,3,3,7, 6,4,4,8, 6,4,4,8, 7,4,4,9, 7,5,5,9, 8,5,5,10, 8,5,5,10, 9,6,6,11, 9,6,6,11, 10,6,6,12,   6)) ;
modparclasse.set('Moine',Array(0,2,2,2, 1,3,3,3, 2,3,3,3, 3,4,4,4, 3,4,4,4, 4,5,5,5, 5,5,5,5, 6,6,6,6, 6,6,6,6, 7,7,7,7, 8,7,7,7, 9,8,8,8, 9,8,8,8, 10,9,9,9, 11,9,9,9, 12,10,10,10, 12,10,10,10, 13,11,11,11, 14,11,11,11, 15,12,12,12,   8)) ;
modparclasse.set('Prêtre combattant',Array(0,0,2,2, 1,0,3,3, 2,1,3,3, 3,1,4,4, 3,1,4,4, 4,2,5,5, 5,2,5,5, 6,2,6,6, 6,3,6,6, 7,3,7,7, 8,3,7,7, 9,4,8,8, 9,4,8,8, 10,4,9,9, 11,5,9,9, 12,5,10,10, 12,5,10,10, 13,6,11,11, 14,6,11,11, 15,6,12,12,   8)) ;
modparclasse.set('Antipaladin',Array(1,0,2,2, 2,0,3,3, 3,1,3,3, 4,1,4,4, 5,1,4,4, 6,2,5,5, 7,2,5,5, 8,2,6,6, 9,3,6,6, 10,3,7,7, 11,3,7,7, 12,4,8,8, 13,4,8,8, 14,4,9,9, 15,5,9,9, 16,5,10,10, 17,5,10,10, 18,6,11,11, 19,6,11,11, 20,6,12,12,   10)) ;
modparclasse.set('Chasseur de vampire',Array(1,0,2,2, 2,0,3,3, 3,1,3,3, 4,1,4,4, 5,1,4,4, 6,2,5,5, 7,2,5,5, 8,2,6,6, 9,3,6,6, 10,3,7,7, 11,3,7,7, 12,4,8,8, 13,4,8,8, 14,4,9,9, 15,5,9,9, 16,5,10,10, 17,5,10,10, 18,6,11,11, 19,6,11,11, 20,6,12,12,   8)) ;
modparclasse.set('Chevalier',Array(1,0,2,0, 2,0,3,0, 3,1,3,1, 4,1,4,1, 5,1,4,1, 6,2,5,2, 7,2,5,2, 8,2,6,2, 9,3,6,3, 10,3,7,3, 11,3,7,3, 12,4,8,4, 13,4,8,4, 14,4,9,4, 15,5,9,5, 16,5,10,5, 17,5,10,5, 18,6,11,6, 19,6,11,6, 20,6,12,6,   10)) ;
modparclasse.set('Conjurateur',Array(0,0,0,2, 1,0,0,3, 2,1,1,3, 3,1,1,4, 3,1,1,4, 4,2,2,5, 5,2,2,5, 6,2,2,6, 6,3,3,6, 7,3,3,7, 8,3,3,7, 9,4,4,8, 9,4,4,8, 10,4,4,9, 11,5,5,9, 12,5,5,10, 12,5,5,10, 13,6,6,11, 14,6,6,11, 15,6,6,12,   8)) ;
modparclasse.set('Inquisiteur',Array(0,0,2,2, 1,0,3,3, 2,1,3,3, 3,1,4,4, 3,1,4,4, 4,2,5,5, 5,2,5,5, 6,2,6,6, 6,3,6,6, 7,3,7,7, 8,3,7,7, 9,4,8,8, 9,4,8,8, 10,4,9,9, 11,5,9,9, 12,5,10,10, 12,5,10,10, 13,6,11,11, 14,6,11,11, 15,6,12,12,   8)) ;
modparclasse.set('Tueur',Array(1,2,2,0, 2,3,3,0, 3,3,3,1, 4,4,4,1, 5,4,4,1, 6,5,5,2, 7,5,5,2, 8,6,6,2, 9,6,6,3, 10,7,7,3, 11,7,7,3, 12,8,8,4, 13,8,8,4, 14,9,9,4, 15,9,9,5, 16,10,10,5, 17,10,10,5, 18,11,11,6, 19,11,11,6, 20,12,12,6,    10)) ;
modparclasse.set('Justicier',Array(0,2,0,2, 1,3,0,3, 2,3,1,3, 3,4,1,4, 3,4,1,4, 4,5,2,5, 5,5,2,5, 6,6,2,6, 6,6,3,6, 7,7,3,7, 8,7,3,7, 9,8,4,8, 9,8,4,8, 10,9,4,9, 11,9,5,9, 12,10,5,10, 12,10,5,10, 13,11,6,11, 14,11,6,11, 15,12,6,12,   8)) ;
modparclasse.set('Lutteur',Array(1,2,2,0, 2,3,3,0, 3,3,3,1, 4,4,4,1, 5,4,4,1, 6,5,5,2, 7,5,5,2, 8,6,6,2, 9,6,6,3, 10,7,7,3, 11,7,7,3, 12,8,8,4, 13,8,8,4, 14,9,9,4, 15,9,9,5, 16,10,10,5, 17,10,10,5, 18,11,11,6, 19,11,11,6, 20,12,12,6,   10)) ;
modparclasse.set('Hypnotiseur',Array(0,2,0,2, 1,3,0,3, 2,3,1,3, 3,4,1,4, 3,4,1,4, 4,5,2,5, 5,5,2,5, 6,6,2,6, 6,6,3,6, 7,7,3,7, 8,7,3,7, 9,8,4,8, 9,8,4,8, 10,9,4,9, 11,9,5,9, 12,10,5,10, 12,10,5,10, 13,11,6,11, 14,11,6,11, 15,12,6,12,   8)) ;
modparclasse.set('Occultiste',Array(0,2,0,2, 1,3,0,3, 2,3,1,3, 3,4,1,4, 3,4,1,4, 4,5,2,5, 5,5,2,5, 6,6,2,6, 6,6,3,6, 7,7,3,7, 8,7,3,7, 9,8,4,8, 9,8,4,8, 10,9,4,9, 11,9,5,9, 12,10,5,10, 12,10,5,10, 13,11,6,11, 14,11,6,11, 15,12,6,12,   8)) ;
modparclasse.set('Sorcière',Array(0,0,0,2, 1,0,0,3, 1,1,1,3, 2,1,1,4, 2,1,1,4, 3,2,2,5, 3,2,2,5, 4,2,2,6, 4,3,3,6, 5,3,3,7, 5,3,3,7, 6,4,4,8, 6,4,4,8, 7,4,4,9, 7,5,5,9, 8,5,5,10, 8,5,5,10, 9,6,6,11, 9,6,6,11, 10,6,6,12,   6)) ;
modparclasse.set('Métamorphe',Array(1,2,2,0, 2,3,3,0, 3,3,3,1, 4,4,4,1, 5,4,4,1, 6,5,5,2, 7,5,5,2, 8,6,6,2, 9,6,6,3, 10,7,7,3, 11,7,7,3, 12,8,8,4, 13,8,8,4, 14,9,9,4, 15,9,9,5, 16,10,10,5, 17,10,10,5, 18,11,11,6, 19,11,11,6, 20,12,12,6,   10)) ;
modparclasse.set('Ninja',Array(0,2,0,0, 1,3,0,0, 2,3,1,1, 3,4,1,1, 3,4,1,1, 4,5,2,2, 5,5,2,2, 6,6,2,2, 6,6,3,3, 7,7,3,3, 8,7,3,3, 9,8,4,4, 9,8,4,4, 10,9,4,4, 11,9,5,5, 12,10,5,5, 12,10,5,5, 13,11,6,6, 14,11,6,6, 15,12,6,6,   8)) ;
modparclasse.set('Oracle',Array(0,0,0,2, 1,0,0,3, 2,1,1,3, 3,1,1,4, 3,1,1,4, 4,2,2,5, 5,2,2,5, 6,2,2,6, 6,3,3,6, 7,3,3,7, 8,3,3,7, 9,4,4,8, 9,4,4,8, 10,4,4,9, 11,5,5,9, 12,5,5,10, 12,5,5,10, 13,6,6,11, 14,6,6,11, 15,6,6,12,   8)) ;
modparclasse.set('Samouraï',Array(1,0,2,0, 2,0,3,0, 3,1,3,1, 4,1,4,1, 5,1,4,1, 6,2,5,2, 7,2,5,2, 8,2,6,2, 9,3,6,3, 10,3,7,3, 11,3,7,3, 12,4,8,4, 13,4,8,4, 14,4,9,4, 15,5,9,5, 16,5,10,5, 17,5,10,5, 18,6,11,6, 19,6,11,6, 20,6,12,6,   10)) ;
modparclasse.set('Arcaniste',Array(0,0,0,2, 1,0,0,3, 1,1,1,3, 2,1,1,4, 2,1,1,4, 3,2,2,5, 3,2,2,5, 4,2,2,6, 4,3,3,6, 5,3,3,7, 5,3,3,7, 6,4,4,8, 6,4,4,8, 7,4,4,9, 7,5,5,9, 8,5,5,10, 8,5,5,10, 9,6,6,11, 9,6,6,11, 10,6,6,12,   6)) ;
modparclasse.set('Bretteur',Array(1,2,0,0, 2,3,0,0, 3,3,1,1, 4,4,1,1, 5,4,1,1, 6,5,2,2, 7,5,2,2, 8,6,2,2, 9,6,3,3, 10,7,3,3, 11,7,3,3, 12,8,4,4, 13,8,4,4, 14,9,4,4, 15,9,5,5, 16,10,5,5, 17,10,5,5, 18,11,6,6, 19,11,6,6, 20,12,6,6,   10)) ;
modparclasse.set('Chaman',Array(0,0,0,2, 1,0,0,3, 2,1,1,3, 3,1,1,4, 3,1,1,4, 4,2,2,5, 5,2,2,5, 6,2,2,6, 6,3,3,6, 7,3,3,7, 8,3,3,7, 9,4,4,8, 9,4,4,8, 10,4,4,9, 11,5,5,9, 12,5,5,10, 12,5,5,10, 13,6,6,11, 14,6,6,11, 15,6,6,12,   8)) ;
modparclasse.set('Chasseur',Array(0,2,2,0, 1,3,3,0, 2,3,3,1, 3,4,4,1, 3,4,4,1, 4,5,5,2, 5,5,5,2, 6,6,6,2, 6,6,6,3, 7,7,7,3, 8,7,7,3, 9,8,8,4, 9,8,8,4, 10,9,9,4, 11,9,9,5, 12,10,10,5, 12,10,10,5, 13,11,11,6, 14,11,11,6, 15,12,12,6,   8)) ;
modparclasse.set('Enquêteur',Array(0,2,0,2, 1,3,0,3, 2,3,1,3, 3,4,1,4, 3,4,1,4, 4,5,2,5, 5,5,2,5, 6,6,2,6, 6,6,3,6, 7,7,3,7, 8,7,3,7, 9,8,4,8, 9,8,4,8, 10,9,4,9, 11,9,5,9, 12,10,5,10, 12,10,5,10, 13,11,6,11, 14,11,6,11, 15,12,6,12,   8)) ;
modparclasse.set('Sanguin',Array(1,0,2,0, 2,0,3,0, 3,1,3,1, 4,1,4,1, 5,1,4,1, 6,2,5,2, 7,2,5,2, 8,2,6,2, 9,3,6,3, 10,3,7,3, 11,3,7,3, 12,4,8,4, 13,4,8,4, 14,4,9,4, 15,5,9,5, 16,5,10,5, 17,5,10,5, 18,6,11,6, 19,6,11,6, 20,6,12,6,   10)) ;
modparclasse.set('Scalde',Array(0,0,2,2, 1,0,3,3, 2,1,3,3, 3,1,4,4, 3,1,4,4, 4,2,5,5, 5,2,5,5, 6,2,6,6, 6,3,6,6, 7,3,7,7, 8,3,7,7, 9,4,8,8, 9,4,8,8, 10,4,9,9, 11,5,9,9, 12,5,10,10, 12,5,10,10, 13,6,11,11, 14,6,11,11, 15,6,12,12,   8)) ;
modparclasse.set('Médium',Array(0,0,0,2, 1,0,0,3, 2,1,1,3, 3,1,1,4, 3,1,1,4, 4,2,2,5, 5,2,2,5, 6,2,2,6, 6,3,3,6, 7,3,3,7, 8,3,3,7, 9,4,4,8, 9,4,4,8, 10,4,4,9, 11,5,5,9, 12,5,5,10, 12,5,5,10, 13,6,6,11, 14,6,6,11, 15,6,6,12,   8)) ;
modparclasse.set('Psychiste',Array(0,0,0,2, 1,0,0,3, 1,1,1,3, 2,1,1,4, 2,1,1,4, 3,2,2,5, 3,2,2,5, 4,2,2,6, 4,3,3,6, 5,3,3,7, 5,3,3,7, 6,4,4,8, 6,4,4,8, 7,4,4,9, 7,5,5,9, 8,5,5,10, 8,5,5,10, 9,6,6,11, 9,6,6,11, 10,6,6,12,   6)) ;
modparclasse.set('Spirite',Array(0,2,0,2, 1,3,0,3, 2,3,1,3, 3,4,1,4, 3,4,1,4, 4,5,2,5, 5,5,2,5, 6,6,2,6, 6,6,3,6, 7,7,3,7, 8,7,3,7, 9,8,4,8, 9,8,4,8, 10,9,4,9, 11,9,5,9, 12,10,5,10, 12,10,5,10, 13,11,6,11, 14,11,6,11, 15,12,6,12,   8)) ;
modparclasse.set('Pistolier',Array(1,2,2,0, 2,3,3,0, 3,3,3,1, 4,4,4,1, 5,4,4,1, 6,5,5,2, 7,5,5,2, 8,6,6,2, 9,6,6,3, 10,7,7,3, 11,7,7,3, 12,8,8,4, 13,8,8,4, 14,9,9,4, 15,9,9,5, 16,10,10,5, 17,10,10,5, 18,11,11,6, 19,11,11,6, 20,12,12,6,   10)) ;

var active_character = 0

function saveCharacter() {
	// Sauvegarde le personnage crée dans la base de donnée
    const data = {
        name: document.getElementById("name").value,
        classe: document.getElementById("class").value,
        level: parseInt(document.getElementById("level").value),
        strength: parseInt(document.getElementById("strength").value),
        dexterity: parseInt(document.getElementById("dexterity").value),
        constitution: parseInt(document.getElementById("constitution").value),
        intelligence: parseInt(document.getElementById("intelligence").value),
        wisdom: parseInt(document.getElementById("wisdom").value),
        charisma: parseInt(document.getElementById("charisma").value),
        size: document.getElementById("size").value,
        hp: parseInt(document.getElementById("hp").value),
		hp_dice: parseInt(document.getElementById("hp_dice").value),
		attack_bonus: parseInt(document.getElementById("attack_bonus").value)
    };
		
    fetch("/save_character", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            alert("Personnage sauvegardé !");
        } else {
            alert("Erreur : " + data.message);
        }
    })
    .catch(error => {
        alert("Erreur lors de la sauvegarde du personnage.");
    });
window.location.reload();}

function fetchCharacters() {
	// Récupère et affiche les personnages 
    console.log("Appel de l'API pour récupérer les personnages...");
    fetch("/characters")
        .then(response => {
            console.log("Réponse brute :", response);
            return response.json();
        })
        .then(data => {
            console.log("Données reçues :", data);
            const characterList = document.getElementById("characterList");
            characterList.innerHTML = ""; // Nettoyer la liste avant de la remplir

            if (data.length === 0) {
                characterList.innerHTML = "<p>Aucun personnage enregistré.</p>";
                return;
            }

            const table = document.createElement("table");
            table.innerHTML = `
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Classe</th>
                        <th>Niveau</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            `;

            const tbody = table.querySelector("tbody");
            data.forEach(character => {
				
				var deletebutton = String("<button type=\"button\" id=\""+character.id+"delete\" onclick=\"deleteCharacter("+character.id+")\">Supprimer</button>");
				var activebutton = String("<button type=\"button\" id=\""+character.id+"active\" onclick=\"activeCharacter("+character.id+")\">Afficher</button>");
				var skillsbutton = String("<button type=\"button\" id=\""+character.id+"skills\" onclick=\"CharacterSkills("+character.id+")\">Compétences</button>");
			
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${character.name}</td>
                    <td>${character.classe}</td>
                    <td>${character.level}</td>
					<td>${activebutton}</td>
					<td>${skillsbutton}</td>
					<td>${deletebutton}</td>
                `;
                tbody.appendChild(row);
            });

            characterList.appendChild(table);
        });
}

function deleteCharacter(id) {
	// Supprime le personnage sélectionné
    fetch("/delete_character", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id : id})
    }).then(response => response.json())
      .then(data => {
          if (data.status === "success") {
              alert("Personnage supprimé !");
              loadCharacters();
          }
      });
	fetchCharacters();
}

function modifyCharacter(id, stat, value) {
	// Modifie la statistique "stat" d'un personnage pour lui donner la valeur "value" 
	const data = {
        stat: stat,
		value: value};
    fetch(`/modify_character/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            alert("Personnage modifié !");
        } else {
            alert("Erreur : " + data.message);
        }
    })
    .catch(error => {
        alert("Erreur lors de la modification du personnage.");
    });
}

function activeCharacter(id) {
    console.log(`🔍 Chargement du personnage ID: ${id}`);
    active_character = id;

    // 1️⃣ Charger les modificateurs en premier
    fetch(`/mods/${id}`)
        .then(response => response.json())
        .then(mods => {
            console.log("✅ Modificateurs reçus :", mods);
            return fetch(`/character/${id}`) // Ensuite, charger le personnage
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Personnage non trouvé");
                    }
                    return response.json();
                })
                .then(character => {
                    console.log("✅ Personnage reçu :", character);
                    afficherPersonnage(character, mods); // Afficher le personnage avec les mods
                });
        })
        .catch(error => {
            console.error("❌ Erreur lors du chargement :", error);
        });
}

function afficherPersonnage(character, mods) {
	// Affiche le personnage sélectionné ainsi que ses caractéristiques
	//Definition des variables
			var modfor = 0 ;
			var moddex = 0 ;
			var modcon = 0 ;
			var modint = 0 ;
			var modsag = 0 ;
			var modcha = 0 ;
			var modca = 0 ;
			var modinit = 0 ;
			var pvtemp = 0 ;
			var modtaille = 0;
			var modif_taille = 0;
			
            if (!Array.isArray(mods) || mods.length === 0) {
                console.log("Aucun modificateur enregistré sur ce personnage");
            }

            mods.forEach(mod => {
					if ( mod.status == "True"){
					if (mod.type == 1){
					modfor += mod.value ;}
					if (mod.type  == 2){
					moddex += mod.value ;}
					if (mod.type  == 3){
					modcon += mod.value ;}
					if (mod.type  == 4){
					modint += mod.value ;}
					if (mod.type  == 5){
					modsag += mod.value ;}
					if (mod.type  == 6){
					modcha += mod.value ;}
					if (mod.type  == 7){
					modca += mod.value ;}
					if (mod.type  == 8){
					modtaille += mod.value ;}
					if (mod.type  == 9){
					pvtemp += mod.value ;}}
					});
	

            const activecharacter = document.getElementById("activecharacter");
            activecharacter.innerHTML = ""; // Nettoyer la fiche avant de la remplir
            if (character.length === 0) {
                activecharacter.innerHTML = "<p>Aucun personnage en cours d'affichage.</p>";
                return;}
		
			var modifsclasse = modparclasse.get(character.classe) ;
			var ActTaille = character.size + modtaille;
			
			//Modificateur de taille
			if (ActTaille  == -3){modif_taille = -4 ;}
			if (ActTaille  == -4){modif_taille = -8 ;}
			if (ActTaille  == 3){modif_taille = 4 ;}
			if (ActTaille  == 4){modif_taille = -8 ;}
			else{modif_taille = ActTaille ;}
			
			//Affichage de la taille
			if (ActTaille == 0){ActTaille = "M" ;}
			if (ActTaille == 1){ActTaille = "G" ;}
			if (ActTaille == 2){ActTaille = "TG" ;}
			if (ActTaille == 3){ActTaille = "Gig" ;}
			if (ActTaille == 4){ActTaille = "C" ;}
			if (ActTaille == -1){ActTaille = "P" ;}
			if (ActTaille == -2){ActTaille = "TP" ;}
			if (ActTaille == -3){ActTaille = "Min" ;}
			if (ActTaille == -4){ActTaille = "I" ;}
			
			//Affichage PV temporaires
			if (pvtemp == 0){
				pvtemp = "" ;
			} else {
				pvtemp = " + " + String(pvtemp)
			}

			//Calcul des modificateurs de caractéristiques
			let modif_dex = parseInt(character.dexterity) + moddex ;
			modif_dex = (modif_dex - 10)/2 ;
			if (!(Number.isInteger(modif_dex))) {
				modif_dex = Math.round(modif_dex);
				modif_dex = modif_dex - 1 ;}
				
			let modif_for= parseInt(character.strength) + modfor;
			modif_for = (modif_for - 10)/2 ;
			if (!(Number.isInteger(modif_for))) {
				modif_for = Math.round(modif_for);
				modif_for = modif_for - 1 ;}
				
			let modif_con= parseInt(character.constitution) + modcon;
			modif_con = (modif_con - 10)/2 ;
			if (!(Number.isInteger(modif_con))) {
				modif_con = Math.round(modif_con);
				modif_con = modif_con - 1 ;}
				
			let modif_int= parseInt(character.intelligence) + modint;
			modif_int = (modif_int - 10)/2 ;
			if (!(Number.isInteger(modif_int))) {
				modif_int = Math.round(modif_int);
				modif_int = modif_int - 1 ;}
				
			let modif_sag= parseInt(character.wisdom) + modsag;
			modif_sag = (modif_sag - 10)/2 ;
			if (!(Number.isInteger(modif_sag))) {
				modif_sag = Math.round(modif_sag);
				modif_sag = modif_sag - 1 ;}
				
			let modif_cha= parseInt(character.charisma) + modcha;
			modif_cha = (modif_cha - 10)/2 ;
			if (!(Number.isInteger(modif_cha))) {
				modif_cha = Math.round(modif_cha);
				modif_cha = modif_cha - 1 ;}

			//Calcul de la CA 
			var ca = 10 + modca + modif_dex + (modif_taille*-1);
			var cac = ca - modca;
			var cad = ca - modif_dex;
			
			
			//Calcul de la BBA  
			var bbaclasse = modifsclasse[(character.level*4)-4] ;
			var bba = parseInt(bbaclasse);
			let joliebba = bba;
			let bac = parseInt(bba) + parseInt(modif_for) + parseInt(modif_taille);
			let bad = parseInt(bba) + parseInt(modif_dex) + parseInt(modif_taille);
			// Calcul des attaques multiples si BBA >= 6
			if (bba >= 6){
			var x = bba;
			joliebba = "";
			bac = "";
			bad= "";
			while (x > 0){
			joliebba += String(x) + "/";
			bac += String(x + parseInt(modif_for) + parseInt(modif_taille)) + "/";
			bad += String(x + parseInt(modif_dex) + parseInt(modif_taille)) + "/";
			x -= 5;
			}
			joliebba = joliebba.slice(0, -1);
			bac = bac.slice(0, -1);
			bad = bad.slice(0, -1);}
			
			
			//Calcul du BMO
			var bmo = bba + parseInt(modif_for) + parseInt(modif_taille);
			if (character.size <= -1){
			bmo = bba + parseInt(modif_dex) + parseInt(modif_taille);}

			//Calcul du DMD
			var dmd= parseInt(bba + 10) + parseInt(modif_for) + parseInt(modif_dex) + parseInt(modif_taille);

			//Calcul du jds Réflexe
			var jdsRef = modifsclasse[(character.level*4)-3] + modif_dex;
			//Calcul du jds Vigueur
			var jdsVig = modifsclasse[(character.level*4)-2]+ modif_con;
			//Calcul du jds Volonté
			var jdsVol = modifsclasse[character.level*4-1] + modif_sag;
			
			//Calcul du bonus à l'initiative
			var init = modif_dex + modinit 
			if (init>0){init = "+" + String(init)}
			
			
			document.getElementById("activecharactername").innerText = character.name ;
			const row = document.createElement("div");
                row.innerHTML = `
					<div>Init ${init}</div>
					<h2>Caractéristiques :</h2>
                    <div>Classe : ${character.classe} lvl${character.level}</div>
                    <div>For : ${character.strength + modfor}</div>
                    <div>Dex : ${character.dexterity + moddex}</div>
                    <div>Con : ${character.constitution + modcon}</div>
                    <div>Int : ${character.intelligence + modint}</div>
                    <div>Sag : ${character.wisdom + modsag}</div>
                    <div>Cha : ${character.charisma + modcha}</div>
                    <div>Taille : ${ActTaille}</div> 
					<h2>Défense</h2>
					<div>CA : ${ca}, contact ${cac}, pris au dépourvu ${cad}</div>
					<div>PV : ${character.hp} (${character.level}d${character.hp_dice}) ${pvtemp}</div>
					<div>Ref ${jdsRef}, Vig ${jdsVig}, Vol ${jdsVol}</div>
					<h2>Attaque</h2>
					<div>BBA : ${joliebba}, BMO : ${bmo}, DMD: ${dmd}</div>
					<div>Bonus de base au contact : ${bac}, Bonus de base à distance : ${bad}</div>
					<h2>Modificateurs</h2>
					<div id="modsactifs"></div>
					<form>
					Ajouter un modificateur : 
					<span id="addmod">
					<input type="text" id="modname" size="10" placeholder="nom">
					<label>
						<select id="modtype">
						<option value="1">Force</option>
						<option value="2">Dextérité</option>
						<option value="3">Constitution</option>
						<option value="4">Intelligence</option>
						<option value="5">Sagesse</option>
						<option value="6">Charisme</option>
						<option value="7">CA</option>
						<option value="8">Taille</option>
						<option value="9">PV</option>
						<option value="10">Initiative</option>
						</select>
					</label>
					<input type="text" id="modvalue" size="4" placeholder="valeur">
					</span>
					<input type="button" value="+" onclick="modadd() ;">
					<input type="button" value="-" onclick="modsupr() ;">
					<button type="button" onclick="saveMod(${character.id})">Ajouter</button>
					</form>
                `;
                activecharacter.appendChild(row);
				setTimeout(fetchMods(character.id), 200);
            
			
}








// Création et enregistrement des modificateurs

function saveMod(id) {
	// Sauvegarde un modificateur pour le personnage sélectionné
    const data = {
		id_character: id,
        name: document.getElementById("modname").value,
		type: document.getElementById("modtype").value,
        value: parseInt(document.getElementById("modvalue").value),
        status: "False",
    };
		
    fetch("/save_mods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            console.log("Modificateur sauvegardé !");
        } else {
            alert("Erreur : " + data.message);
        }
    })
	.then(() => {
    console.log("Modificateur sauvegardé, mise à jour de l'affichage...");
    setTimeout(() => activeCharacter(id), 200);
	})
    .catch(error => {
        alert("Erreur lors de la sauvegarde du modificateur.");
    });
	
}


function fetchMods(character_id) {
    console.log("Appel de l'API pour récupérer les modificateurs...");
        fetch(`/mods/${character_id}`)
            .then(response => response.json())
            .then(data => {
                console.log("Données reçues :", data);
                const modsList = document.getElementById("modsactifs");
                modsList.innerHTML = ""; 

                if (!Array.isArray(data) || data.length === 0) {
                    modsList.innerHTML = "<p>Aucun modificateur enregistré.</p>";
                    return;
                }

                data.forEach(mod => {
                    const listItem = document.createElement("div");
                    let tab = ['For', 'Dex', 'Con', 'Int', 'Sag', 'Cha', 'CA', 'Taille', 'PV', 'initiative'];
                    let modtypename = tab[parseInt(mod.type) - 1];
                    let modsign = mod.value >= 0 ? "+" : "";

                    listItem.innerHTML = `
                        ${mod.name} : ${modsign}${mod.value} ${modtypename}
                        <button type="button" onclick="delete_mod(${mod.id})">Supprimer</button>
                        <label class="switch">
                            <input type="checkbox" id="modcheck${mod.id}" onclick="toggle_mod(${mod.id}, ${mod.id_character})">
                            <span class="slider"></span>
                        </label>
                    `;
                    modsList.appendChild(listItem);

                    setTimeout(() => { 
                        document.getElementById(`modcheck${mod.id}`).checked = (mod.status === "True");
                    }, 100);
                });
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des mods :", error);
            });
}

function delete_mod(mod_id) {
    fetch(`/search_mod_status/${mod_id}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === "True") {
                return new Promise(resolve => {
                    toggle_mod(mod_id, active_character);
                    setTimeout(resolve, 200); 
                });
            }
        })
        .then(() => fetch(`/delete_mod/${mod_id}`, { method: "DELETE" }))
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                console.log("✅ Mod supprimé !");
                setTimeout(() => activeCharacter(active_character), 200);
            } else {
                alert("Erreur : " + data.message);
            }
        })
        .catch(error => console.error("❌ Erreur lors de la suppression :", error));
}



function search_mod_status(mod_id) {
	// recherche puis renvoie le statut actuel du modificateur sélectionné
	fetch(`/search_mod_status/${mod_id}`, {
		method: "GET",
	})
	.then(response => response.json())
    .then(data => {
            console.log("Données de statut reçues :", data);
			return data
    })
	.catch(error => console.error("Erreur lors de la récupération :", error));
}



function toggle_mod(mod_id, id_character) {
    var checkbox = document.getElementById(`modcheck${mod_id}`);
    if (!checkbox) {
        console.error(`Erreur : Impossible de trouver l'élément modcheck${mod_id}`);
        return;}
   
    fetch(`/search_mod_status/${mod_id}`)
        .then(response => response.json())
        .then(data => {
            console.log(`Statut actuel en base : ${data.status}`);

            var new_status = (data.status === "True") ? "False" : "True";
            console.log(`Nouveau statut à appliquer : ${new_status}`);

            return fetch(`/toggle_mod/${mod_id}/${new_status}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            });
        })
        .then(response => response.json())
        .then(data => {
            if (data.status !== "success") {
                alert("Erreur lors du changement de statut : " + data.message);
            } else {
                console.log("Modificateur mis à jour, rechargement du personnage...");
                setTimeout(() => activeCharacter(id_character), 200);
            }
        })
        .catch(error => console.error("❌ Erreur lors de l'activation/la désactivation :", error));
}





function deleteTable() {
	//Suppression totale de la base de données
    console.log("Suppression de la table...");
    fetch("/delete_table");
	fetch("/init_db");
}


// Appelle la fonction au chargement de la page
window.onload = fetch("/init_db");
window.onload = fetchCharacters;