/* global monogatari */


// Define the music used in the game.
monogatari.assets ('music', {
	'foret' : 'foret.mp3',
	'grotte' : 'grotte.mp3',
	'maintheme' : 'maintheme.mp3',


});

monogatari.component ('main-screen').template (() => {

    return `
		<h1>La Bataille de Salesbières</h1>
		<h2>Perce les mystères de la dernière bataille du Roi Arthur, en explorant les différents scénarios que te propose le jeu en incarnant à chaque fois des personnages différents</h2>
		<main-menu></main-menu>
    `;
});
// Define the messages used in the game.
monogatari.action ('message').messages ({
	'fin1': {
		title: 'Fin : Le Blizzard',
		subtitle: 'Le froid a eu raison de toi. Malgré ta détermination de trouver mieux qu\'une grotte, le vent t\'a glacé le sang.',
		body: 'Recommence encore une fois et découvres-en plus!'
	},

	'Guenievre' : {
		title: 'Fin : Guenièvre',
		subtitle: 'Eléments découverts : Femme du roi Arthur, kidnappée par Mordred',
		body: 'Recommence encore une fois et découvres-en plus!',

	},

	'fin2' : {
		title: 'Fin : Long silence',
		subtitle: 'Ton refus a refroidi la pièce, autant que l\'air glacial de l\'extérieur de la grotte, tu survis à cette nuit, même si tu as donné des envies de meurte à l\'ermite, et repars le lendemain vers d\'autres contrées.',
		body: 'Recommence encore une fois et découvres-en plus!',
	},

	'Morgane1': {
		title: 'Fin : Morgane',
		subtitle: 'Partie A', 
		body: 'Eléments découverts : demi-soeur du Roi Arthur, Conception du roi issue d\'un adultère',

	},

	'Morgane2' : {
		title: 'Fin : Morgane',
		subtitle: 'Partie B',
		body: 'Eléments découverts : le père du roi a tué son père, élevée par Merlin, mystérieuse réconciliation avec le roi',
	},

	'Viviane1' : {
		title: 'Fin : Viviane',
		subtitle: 'Partie A',
		body: 'Eléments découverts : cofondatrice de la Table Ronde avec le roi Arthur, éducatrice de Lancelot du lac '
	},

	'Viviane2' : {
		title: 'Fin : Viviane',
		subtitle: 'Partie B',
		body: 'Eléments découverts: aimée par Merlin, Merlin fils d\'un diable et d\'une vierge, Merlin lui a enseigné la magie'
	},

	'Arthur1' : {
		title: 'Fin : Arthur',
		body: 'Eléments découverts : mari de Guenièvre, union avec Morgane qui donnera Mordred, bataille mortelle contre son fils Mordred, mort à Avalon',

	},

	'Lancelot' : {
		title: 'Fin : Lancelot',
		body: 'Eléments découverts : entretient une liaison avec Guenièvre, chevalier du roi',

	},

	'Merlin1' : {
		title: 'Fin : Merlin',
		subtitle: 'Partie A',
		body: 'Eléments appris : Merlin possède un don d\'ubiquité ', 
	},

	'Merlin2' : {
		title: 'Fin : Merlin',
		subtitle: 'Partie B',
		body: 'Eléments appris : Merlin meurt enfermé dans une cage invisible par la femme qu\'il aime',
	}


});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({
	'snow': {
		'particles': {
			'number': {
				'value': 400,
				'density': {
					'enable': true,
					'value_area': 800
				}
			},
			'color': {
				'value': '#fff'
			},
			'shape': {
				'type': 'circle',
				'stroke': {
					'width': 0,
					'color': '#000000'
				},
				'polygon': {
					'nb_sides': 5
				},
				'image': {
					'src': 'img\/github.svg',
					'width': 100,
					'height': 100
				}
			},
			'opacity': {
				'value': 0.5,
				'random': true,
				'anim': {
					'enable': false,
					'speed': 1,
					'opacity_min': 0.1,
					'sync': false
				}
			},
			'size': {
				'value': 10,
				'random': true,
				'anim': {
					'enable': false,
					'speed': 40,
					'size_min': 0.1,
					'sync': false
				}
			},
			'line_linked': {
				'enable': false,
				'distance': 500,
				'color': '#ffffff',
				'opacity': 0.4,
				'width': 2
			},
			'move': {
				'enable': true,
				'speed': 6,
				'direction': 'bottom',
				'random': false,
				'straight': false,
				'out_mode': 'out',
				'bounce': false,
				'attract': {
					'enable': false,
					'rotateX': 600,
					'rotateY': 1200
				},
				
			}
		},

		'interactivity': {
			'detect_on': 'canvas',
			'events': {
				'onhover': {
					'enable': true,
					'mode': 'bubble'
				},
				'onclick': {
					'enable': true,
					'mode': 'repulse'
				},
				'resize': true
			},
			'modes': {
				'grab': {
					'distance': 400,
					'line_linked': {
						'opacity': 0.5
					}
				},
				'bubble': {
					'distance': 400,
					'size': 4,
					'duration': 0.3,
					'opacity': 1,
					'speed': 3
				},
				'repulse': {
					'distance': 200,
					'duration': 0.4
				},
				'push': {
					'particles_nb': 4
				},
				'remove': {
					'particles_nb': 2
				}
			}
		},
		'retina_detect': true

	},
		'fireSparks': {
			'particles': {
				'number': {
					'value': 400,
					'density': {
						'enable': true,
						'value_area': 3000
					}
				},
				'color': {
					'value': '#fc0000'
				},
				'shape': {
					'type': 'circle',
					'stroke': {
						'width': 0,
						'color': '#000000'
					},
					'polygon': {
						'nb_sides': 3
					},
					'image': {
						'src': 'img/github.svg',
						'width': 100,
						'height': 100
					}
				},
				'opacity': {
					'value': 0.5,
					'random': true,
					'anim': {
						'enable': false,
						'speed': 1,
						'opacity_min': 0.1,
						'sync': false
					}
				},
				'size': {
					'value': 2,
					'random': true,
					'anim': {
						'enable': true,
						'speed': 5,
						'size_min': 0,
						'sync': false
					}
				},
				'line_linked': {
					'enable': false,
					'distance': 500,
					'color': '#ffffff',
					'opacity': 0.4,
					'width': 2
				},
				'move': {
					'enable': true,
					'speed': 7.8914764163227265,
					'direction': 'top',
					'random': true,
					'straight': false,
					'out_mode': 'out',
					'bounce': false,
					'attract': {
						'enable': false,
						'rotateX': 600,
						'rotateY': 1200
					}
				}
			},
			'interactivity': {
				'detect_on': 'canvas',
				'events': {
					'onhover': {
						'enable': false,
						'mode': 'bubble'
					},
					'onclick': {
						'enable': false,
						'mode': 'repulse'
					},
					'resize': true
				},
				'modes': {
					'grab': {
						'distance': 400,
						'line_linked': {
							'opacity': 0.5
						}
					},
					'bubble': {
						'distance': 400,
						'size': 4,
						'duration': 0.3,
						'opacity': 1,
						'speed': 3
					},
					'repulse': {
						'distance': 200,
						'duration': 0.4
					},
					'push': {
						'particles_nb': 4
					},
					'remove': {
						'particles_nb': 2
					}
				}
			},
			'retina_detect': true
		}
	});


// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({
});


// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
	'': {
		"Développement, scénario et illustrations" : "Mathilde Ançay",
		'Bibliothèque des sons': [
			'<a href="https://freesound.org/">freesound.org</a>', '<a href="https://www.soundjay.com/">soundjay.com</a>',
		],
		'Inspiré de ' : [
			'La mort du roi Arthur, Lancelot du lac, Roman du Graal'
		],
	},
	'Suivre mes projets' :  {
		'Instagram' : [
			'<a href="https://www.instagram.com/mathancay/?hl=fr">@mathancay</a>',
		],
		'Itch.io'   : [
			'<a href="https://heaspery.itch.io/">heaspery</a>',
		]
	},
	'Liens Wikipédia' :  {
		'test' : [
			'<a href="https://www.instagram.com/mathancay/?hl=fr">@mathancay</a>',
		],
		'test4'   : [
			'<a href="https://heaspery.itch.io/">heaspery</a>',
		]
	},
});



// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	'chevaux' : 'chevaux.mp3',
	'pasNeige' : 'pasNeige.mp3',
	'mort' : 'mort.mp3',
	'feu' : 'feu.mp3',
});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'grotte' : 'grotte.png',
	'foret' : 'foret.png',
	'caleche' : 'calèche.png',
	'grotteexterne' : 'grotteexterne.png',

});

monogatari.assets ('gallery', {

	
	'fin1' : 'mort.png',
	'finGuenievre' : 'guenievre.png',
	'finViviane1' : 'viviane1.png',
	'finMorgane1' : 'morgane1.png',
	'finMorgane2' : 'morgane2.png',
	'finViviane2' : 'viviane2.png',
	'finMalaise' : 'malaise.png',
	'finLancelot' : 'lancelot.png',
	'finMerlin1' : 'merlin1.png',
	'finMerlin2' : 'merlin2.png',
	'finArthur' : 'arthur.png',
});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Vieil Ermite',
		color: '#5bcaff',
	},

	'player' : {
		name: 'Vous',
		color:  '#FFA07A'
	},
	'inconnu' : {
		name: '????',
		color:'#d63EEE'
	},
	'garde' : {
		name: 'Garde royale',
		color: '#d63EEE',
	},
	
});

monogatari.script ({
	
	'Start': [
		'play music foret loop',
		'show particles snow',
		'show background foret with fadeIn',
		'Vous marchez dans la forêt, une nuit d’hiver. Vous êtes loin de chez vous et devez absolument trouver un endroit où passer la nuit, si vous ne voulez pas mourir de froid.',
		'A quelques instants du désespoir, vous appercevez une lueur percer l’ombre de la nuit.',
		'show background grotteexterne with fadeIn',
		'Vous vous en rapprochez hâtivement.',
		
		'Vous découvrez qu’elle mène dans une grotte.',

		
	
		{
			'Choice': {
				'Dialog': 'Y entrez?',
				'Yes' : {
					'Text' : 'Oui, c\'est ma seule chance de survie.',
					'Do' : 'jump Yes',
				},
				'No1' : {
					'Text' : 'Non, elle est sûrement pleine de bandits, j\'y laisserais ma vie',
					'Do' : 'jump fin1'
				}
			}
		},
		
		
	],

	'Yes': [
		'stop music foret',
		'play music grotte loop',
		'show character mouette at center with fadeIn',
		'hide particles snow',
		'show background grotte with fadeIn',
		{
			'Choice': {
				'Dialog': 'y Bonsoir! Rentrez donc vous réchauffez! Il n\'est pas bon de traîner dormir dehors par des températures pareilles ! Ma grotte est bien précaire, mais la prochaine auberge n\'est qu\'à des kilomètres. Veuillez accepter le peu que je peux vous offrir, la survie d\'une nuit.',
				'Yes' : {
					'Text': 'Merci! Vous me sauvez la vie!',
					'Do' : 'jump homme',
				},
				'No' : {
					'Text' : 'Non, je ne peux pas me le permettre, que vont penser les gens?',
					'Do' : 'jump femme',
				}
			}
		}
	],

	'fin1': [
		'play sound mort',
		'show message fin1',
		'Bravo! Vous avez déverouillé une fin. Vous pouvez admirer votre collection dans la gallerie, dans le menu principal.',
		'gallery unlock fin1',
		
		'end'	
	],

	'femme' : [
		{
				'Choice' : {
					'Dialog' :'y J\'insiste ! Je ne suis pas un homme qui aime se retrouver au milieu des scandales. Votre nuit ici restera un secret.',
					'Yes' : {
						'Text' : 'Oui merci, il serait stupide de refuser.',
						'Do' : 'jump lieuFemme',
					},

					'No' : {
						'Text' : 'Non, je vais chercher autre chose, merci tout de même pour votre générosité',
						'Do' : 'jump Guenievre',
					}

				}
			}
	],

	'Guenievre' : [
		'show background foret with fadeIn',
		'play music foret loop',
		'stop music grotte',
		'stop sounds feu',
		'show particles snow',
		'Vous ressortez de la grotte.',
		'Le vent a déplacé toute la neige, et vous ne voyez plus les traces de vos pas qui vous ont menés jusqu\'ici',
		'Prise de panique, vous courrez dans une direction hasardeuse',
		'play sound pasNeige loop',
		'Soudainement, vous entendez des bruits au loin : des chevaux et ce qui semble être quelques hommes',
		'inconnu Majesté ma reine! Où êtes-vous? Nous sommes ici! ',
		'inconnu Suivez ma voix!',
				{
				'Choice' : {
					'Dialog' : 'Que faire?',
					'Yes' : {
						'Text' : 'Y aller ! C\'est peut-être ma seule chance!',
						'Do' : 'jump Guenievre2'
					}
				},
			}
	],

	'Guenievre2' : [
		'Vous êtes hors d\'haleine.',
		'Vous courrez jusqu\'à appercevoir les hommes qui vous appellaient et reconnaissez vos gardes accompagnés d\'une calèche',
		'stop sound pasNeige',
		'show background caleche with fadeIn',
		'garde Ma Reine Guenièvre, Majesté, quel soulagement de vous retrouver saine et sauve! Comment vous êtes vous échappée?',
		'garde L\'heure est grave, votre mari le roi Arthur affronte Mordred au petit matin. Nous devons rentrer au château.',
		'play sound chevaux',
		'show message Guenievre',
		'Bravo! Vous avez déverouillé une fin. Vous pouvez admirer votre collection dans la gallerie, dans le menu principal.',
		'gallery unlock finGuenievre',
		'end',
	],

	'lieuFemme' : [
		'y Venez donc près du feu!',
		'show particles fireSparks',
		'play sound feu loop',
		'y Comment une femme telle que vous se retrouve dans ce genre de situation? D\'où venez-vous?',
		'player Je rends visite à un ami.',
		'y Oh? Et sans être indiscret, qui est-il?',
				{
					'Choice' : {
						'Dialog' : 'y Je le connais peut-être?',

						'Arthur' : {
							'Text' : 'C\'est le roi Arthur',
							'Do' : 'jump ArthurF',
						},

						'Merlin' : {
							'Text' : 'C\'est Merlin',
							'Do' : 'jump MerlinF',
						},

						'Refus' : {
							'Text' : 'Cela ne vous regarde pas',
							'Do' : 'jump fin2',
		
						},
						
					}
				}
	],

	'fin2' : [
		'player Je ne pense pas que vous ayez besoin de savoir',
		'Un silence gênant suit votre réponse, l\'ermite vous regarde quelques secondes dans les yeux.',
		'y Et bien, si vous n\'êtes pas ouverte à la discussion, je vous souhaite une bonne nuit.',
		'show message fin2',
		'Bravo! Vous avez déverouillé une fin. Vous pouvez admirer votre collection dans la gallerie, dans le menu principal.',
		'gallery unlock finMalaise',
		'end',
	],

	'ArthurF' : [
		'y Le roi! Mais vous deveu être une invitée d\'honneur pour être un ami du roi!',
		'y Je m\'excuse d\'autant plus des conditions d\'acceuil dont je vous fait part et de l\'inconfort de la nuit à venir.',
			{
				'Choice' : {
					'Dialog' : 'y Comment connaissez-vous le roi?',

					'Famille' : {
						'Text' :  'Des liens familiaux nous unissent',
						'Do' : 'jump ArthurMorgane',	
					},

					'Service' : {
						'Text' : 'Je suis à son service',
						'Do' : 'jump ArthurViviane',
					}
				}
		
			}
	],

	'ArthurMorgane' : [
		'player Je suis sa demi-soeur. Le roi est le fruit d\'un adultère entre ma mère et feu son père Uter Pandragon. Suivies de nombreuses histoires de familles bien compliquées.',
		'y Ca alors! Et quel est votre prénom ma chère?',
		'player Je m\'appelle Morgane',
		'show message Morgane1',
		'Bravo! Vous avez déverouillé une fin. Vous pouvez admirer votre collection dans la gallerie, dans le menu principal.',
		'gallery unlock finMorgane1',
		'end',
	],

	'ArthurViviane' : [
		'y Une dame de haute importance je comprends donc ! Et que faites-vous pour notre roi?',
		'player je suis une de ses plus proches aides dans la fondation de la Table Ronde',
		'y Oh j\'en entends des histoires concernant cette Table Ronde. Les chevaliers qu\'elle rassemble sont tous plus nobles et vaillants les uns que les autres',
		'player Et comment! J\'ai élevé le meilleur d\'entre eux, Lancelot du lac. Sa prouesse est ma plus grande fierté.',
		'y Ces chevaliers finiront par trouver le Graal qu\'ils recherchent. J\'en suis convaincu.',
		'player Espérons-le ! Mais pour le moment, si cela ne vous dérange pas, je vais aller dormir. Le voyage m\'a épuisée.',
		'y Faites donc!',
		'show message Viviane1',
		'Bravo! Vous avez déverouillé une fin. Vous pouvez admirer votre collection dans la gallerie, dans le menu principal.',
		'gallery unlock finViviane1',
		'end',

	],

	'MerlinF' : [
		'y Ah mon vieil ami Merlin! Voilà quelqu\'un que je connais bien ! Un homme bien étrange, quoique très puissant et dont les capacitiés sont bien impressionnantes. Ses prouesse magiques sont extraordinaires, merveilleuses.',
		'y Je sais qu\'il a eu plusieurs chanceux élèves à qui il a enseigné ses pouvoirs d\'enchantements. En connaissez-vous?',
		'player J\'en suis un exemple en chair et os.', 
		{
				'Choice' : {
					'Dialog' : 'y Oh voilà ! Et pour quelle raison vous a-t-il transmis son savoir?',

					'Amour' : {
						'Text' : 'Il éprouve des sentiments pour moi',
						 'Do' : 'jump MerlinViviane',
					},

					'Reccueil' : {
						'Text' : 'Il m\'a recueillie et m\'a appris ce qu\'il savait',
						'Do' : 'jump MerlinMorgane',
					}
				}
			}
	],

	'MerlinViviane' : [
		'y Je vous avoue que je ne le pensais pas capable de tels sentiments. Les rumeurs racontent qu\'il est le fruit de l\'union d\'un diable et d\'une vierge.',
		'y Les deux seraient l\'origine de ses pouvoirs.',
		'y Comment un telle union pourrait-elle donner quelqu\'un de sain et capable d\'amour?',
		'player Les rumeurs disent vraies et croyez-moi, ses sentiments sont sincères. Mais malgré sa dévotion pour moi, ils ne sont toujours pas partagés.',
		'player Son insistance devient insupportable. Il va falloir que je trouve une façon de me débarrasser de lui, s\'il persiste à vouloir me séduire',
		'y ...Espérons qu\'il comprenne avant qu\'une catastrophe se passe ahah!',
		'y (Mais qu\'est-ce qu\'elle planifie de lui faire ??!)',
		'player Sur ce, bonne nuit mon cher et merci pour votre accueil.',
		'show message Viviane2',
		'Bravo! Vous avez déverouillé une fin. Vous pouvez admirer votre collection dans la gallerie, dans le menu principal.',
		'gallery unlock finViviane2',
		'end',

		
	],

	'MerlinMorgane' : [
		'y Recueillie? Vous êtes orpheline? Si c\'est le cas, je vous présentes mes profondes condoléances.',
		'player Oui je le suis. Le père de notre cher roi Arthur a commandé l\'assassinat de mon père afin de pouvoir épouser ma mère.',
		'player Je me suis ensuite retrouvée engagée à un homme bien trop vieux pour moi à l\'époque.',
		'player Merlin m\'a alors accueillie jusqu\'à ma maturité. Il a profitié de ce moment pour m\'apprendre ce qu\'il savait.',
		'y Quelle triste histoire, j\'espère que vous en tenez pas trop rigueur à notre roi Arthur.',
		'player Non, ne vous inquiétez pas, il a su se faire pardonner',
		'show message Morgane2',
		'gallery unlock finMorgane2',
		'end',

	],

	'homme' : [
		'y Ah! Quel homme raisonnable. Vous faites bien de rester.',
		'y Installez vous près du foyer!',
		'Vous vous approchez du feu, et tendez vos mains glacées vers les flammes',
		'show particles fireSparks',
		'play sound feu loop',
		'y Depuis que le roi Arthur a annoncé que lui et ses troupes partaient affronter Mordred, plus personne ne passe ici.',
		'y Sauf les fous qui veulent se retrouver au milieu du champ de bataille! ',

			{
				'Choice': {
					'Dialog' : 'y A moins que vous soyez vous-même soldat?',

					'Yes' : {
						'Text' : 'Précisément',
						'Do' : 'jump Arthur',
					},

					'No':  {
						  'Text' : 'Pas vraiment',
						  'Do' : 'jump NoArthur',
					} 
				}
			}

	],

	'Arthur' : [
		'player Je m’en vais rencontrer Mordred demain à l’aube, où je rejoindrais mes soldats.',
		'y VOS soldats ?? Mais.. Ne me dites pas que vous êtes le roi??',	
		'player Lui-même.',
		'player Mais ne vous en faites pas, la bataille de demain s’annonce mortelle et une fois là-bas, je ne suis qu’un homme rien de plus.',
		'player Mon armée n’est pas assez puissante, mais je ne peux pas me permettre de demander de l’aide. Même si les augures me prédisent un issue fatale suite à cette bataille.', 
		'y Sire, quelle humilité ! Je vous souhaite bonne chance. ',
		'y Sire, Je dois vous avouez, j’ai une question et j’aimerais profiter de votre présence pour avoir une réponse. Mordred, c’est bien votre fils n’est-ce pas ? Comment un père peut-il arriver à déclarer la guerre à son fils ?',
		'player Mordred a beau être mon fils, il a kidnappé ma femme Guenièvre et étant amoureux d’elle veut l’épouser.',
		'y Je vous avoue être un peu confu par la situation, Sire,',
		'player Mordred n’est pas le fils de Guenièvre, mais d’une aventure que j’ai eu avec une autre femme, Morgane.',
		'y Ah, voilà qui est plus clair Sire, merci pour cette précision.',
		'y Je ne voudrais pas plus vous retenir d’un long sommeil en cette veille de bataille. Je vous prie de bien vouloir accepter le peu que je peux vous offrir, et vous souhaite une belle nuit.', 
		'player Merci',
		'show scene #000000 with fadeIn',
		'Le lendemain matin, vous partez vous battre contre votre ennemi Mordred.',
		'Les prédictions avaient juste: La bataille vous est fatale.',
		'Vous vous retirez à tout jamais sur l\'île des morts, Avalon',
		'Après vous être débarrassé de votre épée Excalibur, au fond du lac',
		'show message Arthur1',
		'Bravo! Vous avez déverouillé une fin. Vous pouvez admirer votre collection dans la gallerie, dans le menu principal.',
		'gallery unlock finArthur',
		'end',

	],

	'NoArthur' : [
		'player Je me suis simplement retrouvé au mauvais endroit au mauvais moment.',
		'y J\'ai comme l\'impression que ce n\'est tout de même pas le fruit du hassard que vous vous retrouviez ici.',
		
		{
			'Choice' : {
				'Dialog' : 'Ai-je tort?',

				'Yes' : {
					'Text' : 'ahahaHAHAH oui, je me suis complètement égaré',
					'Do' : 'jump Merlin',
				},

				'No' : {
					'Text' :'Non, effectivement',
					'Do' : 'jump Lancelot',
				}

			}
		}
	],

	'Lancelot' : [
		'player Non effectivement, je suis inquiet pour mon roi cher Ermite. Demain, comme vous l’avez bien dit, il se bat contre Mordred et son armée n’est largement pas assez puissante pour lui faire face.', 
		'y Je suis navré de l’entendre. Nulle armée n’est disponible pour lui apporter son soutient ?',
		'player c’est-à-dire qu’il pourrait me demander mon aide et la victoire serait assurée, mais la fierté du roi l’empêche de venir me solliciter.',
		'y  Sa fierté ?',
		'player Il se trouve que je suis épris d’un amour fin et passionné pour sa femme, la reine Guenièvre et le roi est au courrant de cette liaison.',
		'y Ne serait-il pas sage d’aller tout de même l’aider ? Le roi n’est peut être pas tout à lui mais sera sûrement reconnaissant pour sa vie malgré l’outrage que vous lui avez commis.',
		'player Ma fierté est malheureusement aussi grande que celle du roi, si ce n’est plus. Je ne vais pas contredire ses ordres et je resterai à ma place, quelle qu’en soit le prix.',
		'show scene #000000 with fadeIn',
		'Vous vous endormez, non pas sans angoisse concernant l\'avenir de votre roi.',
		'show message Lancelot',
		'Bravo! Vous avez déverouillé une fin. Vous pouvez admirer votre collection dans la gallerie, dans le menu principal.',
		'gallery unlock finLancelot',
		'end',

	],

	'Merlin' : [
		'y (Quel rire étrange, il me fait froid dans le dos)',
		'y ...Egaré? Cette grotte est au milieu d\'une vaste forêt, qui est elle-même au milieu de rien.',
		
		{
			'Choice': {
				'Dialog' : 'y Qui êtes-vous pour vous retrouvez dans une telle situation?',

			'Yes' : {
				'Text' : 'Se dévoiler',
				'Do' : 'jump Merlin1',
			},

			'No' : {
				'Text' : 'Rester camouflé',
				'Do' : 'jump Merlin2',
			
			}
		}
	}

	],

	'Merlin1' : [
		'y  Merlin ! Mon cher ! je ne t’avais pas reconnu. Ton don pour la métamorphose est toujours aussi remarquable. Autant que ton constant amusement de jouer de simples gens comme moi.',
		'player  Héhé Salut à toi mon vieil ami. J’étais à la recherche de baies qui ne poussent que par ici afin de concocter quelque potion.',
		'y Que vois-tu de cette bataille à venir? En connais-tu l’issue ? est-elle favorable ?',
		'player  Je lui connais une issu qui ne laissera pas les gens indifférents.',
		'y Tu es bien avare de ton don d’ubiquité, comme à ton habitude. Mais qui ne le ferait pas, à ta place.',
		'y Le roi Arthur n’a plus été à la hauteur ces derniers temps, paix à son âme si quelque malheur devait lui arriver.',
		'show scene #000000 with fadeIn',
		'Après avoir ressasser des vieux souvenirs de votre amitié,',
		'Vos paupières se font de plus en plus lourdes,',
		'Vous vous endormez les deux autour du feu.',
		'Le lendemain, vous prenez l\'apparence d\'un majestueux cerf pour repartir dans la neige fraîche',
		'et trouver de nouveaux hommes à qui porter conseil',
		'show message Merlin1', 
		'Bravo! Vous avez déverouillé une fin. Vous pouvez admirer votre collection dans la gallerie, dans le menu principal.',
		'gallery unlock finMerlin1',
		'end',

	],

	'Merlin2' : [
		'player Je vous avoue préférer garder ma capuche',
		'y … Soit, s’il vous plaît ainsi. Et alors, cher inconnu, que viens tu faire alors dans cette forêt ?',
		'player Je suis à la recherche de la femme que j’aime. Je sais qu’elle habite ses bois. Ses pouvoirs, c’est moi qui les lui ai enseigné.',
		'y Il doit être délicat de s’éprendre, j’espère pour vous qu’elle sera favorable à vos avances.',
		'player Jusqu’ici, elle ne m’a que fait part de ses refus, mais cette fois-ci, je suis confiant.',
		'show scene #000000 with fadeIn',
		'Vous vous endormez, le coeur débordant de sentiments',
		'Vous n\'avez qu\'une hate de voir la femme que vous aimez',
		'Mais le lendemain, votre rêve tourne au cauchemard',
		'Cette enième avance était de trop pour la jeune femme',
		'Grâce aux echantements que vous lui avez enseigné',
		'Elle vous emprisonna en pleine forêt dans une cage invisible',
		'Personne ne pouvant vous voir, vous restez emprisonné, aussi longtemps que vous vivez',
		'show message Merlin2',
		'Bravo! Vous avez déverouillé une fin. Vous pouvez admirer votre collection dans la gallerie, dans le menu principal.',
		'gallery unlock finMerlin2',
		'end',

	]

})