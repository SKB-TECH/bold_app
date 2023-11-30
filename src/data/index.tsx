import { MdEmail, MdLocationOn,  MdFax } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import moment from "moment";

export const links=[
  {
    
      title: 'Accueil',
      link: ''
  }
  ,
  {
      title: 'apropos',
      link: 'apropos'
  },
    {
        title: 'Nos programmes',
        link: 'programme'
    },
    {
        title: 'blog',
        link: 'blogue'
    },
    {
        title: 'Soutenir',
        link: 'don'
    },
    {
        title: 'Contact',
        link: 'contact'
    },
]


export const bannier=[
    {
        title: "Ensemble ",
        resume:'Valorisons la voix des Femmes et des Filles et leur construit un espace expression ouverte et positive'
    }
]

export const mission=[
    {
        parama1: "A travers son action BOLD soutient des programmes d’éducation adaptée, appui les institutions et les parties prenantes pour favoriser une gouvernance inclusive ainsi que le développement durable basé sur l’égalité et l’équité."
    }
]

export const resnews=[
    {
        title:"S’inscrire pour recevoir les toutes dernières informations",
        resume:"Pour recevoir les dernières informations de Bold, y compris concernant les nouveaux outils, rapports, campagnes et webinars, et découvrir comment des spécialistes de la consolidation de la paix parviennent à opérer un véritable changement au sein de leurs communautés, merci de saisir vos coordonnées."
    }
]

export const exoViolence=[
    {
        title:"QU’EST-CE QUE LA VIOLENCE CONJUGALE?",
        resume:[
            {
                par1:"La violence conjugale est une problématique sociale qui s’inscrit dans des rapports historiques d’inégalité entre les hommes et les femmes. En effet, dans 80 % des cas rapportés à la police, les victimes sont des femmes. La violence conjugale se manifeste dans un couple où les deux partenaires vivent une relation intime et affective, et elle peut se poursuivre après la séparation. On y retrouve un rapport de domination dans lequel l’agresseur établie et maintient son emprise sur sa victime tout en s’assurant qu’elle ne le quitte pas.",
                par2:"La violence conjugale s’exerce à travers un cycle stratégique dans lequel l’agresseur tente de mettre continuellement en échec toutes les réactions de la victime pour pouvoir la garder sous son contrôle. C’est un rapport de force. Ce n’est pas une dynamique où deux personnes sont à tour de rôle agresseur et victime. C’est un enchaînement de stratégies utilisées par l’agresseur dans le but de dominer sa victime."
    }]
    }
]

export const namePages=[
    {
        title: "Apropos de Bold",
        resume:["Qui sommes-nous ?","Qu'est-ce-que nous faisons ?", "Comment nous le faisons ?"]
    }
    
]

export const apropos=[
    {
        title: "A propos de Bold",
        resume:[
            {
                paragraphe:"BOLD est une Association Sans But Lucratif poursuivant  la vision d’un monde de dignité pour toutes les femmes et les filles. Notre mission  est de renforcer, accompagner et soutenir les femmes et filles pour la construction des communautés inclusives et équitables. "
            },
            {
                paragraphe: "Son siège social se situe à Goma, en République Démocratique du Congo. "
            }
        ]
    }
]

export const aproposII=[
    {
        title:"Que faisons-nous",
        resume:[
            {
                paragraphe: "BOLD favorise la voix des femmes et des filles et leur construit un espace d’expression ouverte et positive de sorte que entendue et leurs préoccupations considérées. A travers son action BOLD soutient des programmes d’éducation adaptée, appui les institutions et les parties prenantes pour favoriser une gouvernance inclusive ainsi que le développement durable basé sur l’égalité et l’équité."
            },
            {
                paragraphe: "L’action de Bold est portée par des femmes, des hommes, des filles et des garçons qui ont conscience que l’égalité des sexes commence par le respect de la dignité dont a droit chaque être humain, dont les femmes et les filles."
            }
        ]
    }
]


export const comment=[
    {
        title:"Comment le faisons-nous",
        detail:[{
            sub:"A travers notre action, nous poursuivons deux objectifs principaux ",
            resume:[
                    {
                        children:'Contribuer à l’amélioration de la condition de vie des femmes et des filles dans leurs communautés',
                        color: '#af2e16',
                        dot: <span className=" rounded-full text-rouge bold-18">{"A)"}</span>
                    },
                    {
                        children: 'Participer au développement des communautaire en favorisant une participation équitable et égalitaire.',
                        color: '#af2e16',
                        dot: <span className=" rounded-full text-rouge bold-18">{"B)"}</span>

                    }
            ]
        },
        {
            sub:"Pour réaliser les objectifs ci-hauts définis",
            resume:[
                    {
                        children:'Appuie les initiatives locales des femmes et des jeunes filles en vue de leur autonomisation;',
                        color: '#af2e16',
                        dot: <span className=" rounded-full text-rouge bold-18">{"I"}</span>
                    },
                    {
                        children: 'Offre un espace et cadre d’échange et de partage pour renforcer la solidarité entre femmes ;',
                        color: '#af2e16',
                        dot: <span className=" rounded-full text-rouge bold-18">{"II"}</span>

                    },
                    {
                        children: 'Transmet la connaissance de leurs droits aux femmes à travers diverses techniques d’apprentissage ;',
                        color: '#af2e16',
                        dot: <span className=" rounded-full text-rouge bold-18">{"III"}</span>
                    },
                    {
                        children: ' Travailler en synergie avec d’autres partenaires socio-humanitaires et de développement en vue de la réalisation des plans d’accompagnement et d’aide aux femmes et aux filles ainsi qu’aux autres parties prenantes pertinentes.',
                        color: '#af2e16',
                        dot: <span className=" rounded-full text-rouge bold-18">{"IV"}</span>
                    }
            ]
        }
        ]
    },
]

export const valeurs=[
    {
        title: "Nos valeurs",
        deatils:[
            {
                sub:"BOLD se construit sur les valeurs  les valeurs fondamentales ci-après :",
                resume:[
                    {
                        title:"L’égalité"
                    },
                    {

                        title:"La dignité"
                    },
                    {
                        title:"L’intégrité"
                    },
                    {
                        title: "La solidarité"
                    },
                    {
                        title: "La bienveillance"
                    }

                ]
            }
        ]
    }
]

export const alldon=[
    {
        title:["Nous soutenir"],
        sub: "Nous croyons en un monde où les différends sont résolus sans violence, et où les populations peuvent offrir un avenir plus pacifié à leurs familles et communautés."
    }
]

export const dons=[
    {
        sub_title: "Grâce à votre soutien, nous aidons les filles et filles a trouvents leurs places au sein de la societe moderne ",
        resume:[
            {
                paragraphe: "BOLD favorise la voix des femmes et des filles et leur construit un espace d’expression ouverte et positive de sorte que entendue et leurs préoccupations considérées."
            },

            {
                paragraphe: "A travers son action BOLD soutient des programmes d’éducation adaptée, appui les institutions et les parties prenantes pour favoriser une gouvernance inclusive ainsi que le développement durable basé sur l’égalité et l’équité."
            },
            {
                paragraphe: "L’action de Bold est portée par des femmes, des hommes, des filles et des garçons qui ont conscience que l’égalité des sexes commence par le respect de la dignité dont a droit chaque être humain, dont les femmes et les filles. "
            }
        ]
    }
]

export const calldon=[
    {
        sub_title: "Faites un don aujourd’hui et aidez-nous à faire de la parite une realite",
        btn:"Nous soutenir Aujourd'hui",
        resume:[
            {
                paragraphe: "Nous croyons en un monde où les populations résolvent leurs différends sans violence."
            },

            {
                paragraphe: "Que ce soit à l’échelon des communautés ou au niveau politique, nous rapprochons pour instaurer une paix durable."
            },
        ]
    }
]

export const otherdon=[
    {
        title:"Vous pouvez aider le travail de Bold de diverses manières",
        resume:[
            {
                sub_title:"Investir dans la paix",
                paragraphe:"Devenez un partenaire financier et investissez dans des aspects spécifiques de notre travail. Nos programmes portent sur un large éventail de thématiques, d’un travail de dialogue pour encourager la guérison des traumatismes au niveau individuel et sociétal, jusqu’à des programmes visant à provoquer un changement pour faire entendre toutes les parties à un conflit et ainsi soutenir la paix."
            },
            {
                sub_title:"Devenir un champion de la paix ",
                paragraphe:"Organisez un événement pour recueillir des fonds, sponsorisez nos événements, apportez un soutien en nature ou soutenez-nous par le biais de votre entreprise."
            },
            // {
            //     sub_title: "Mieux nous connaître ",
            //     paragraphe: "Abonnez-vous à notre newsletter, partagez nos publications et blogs et suivez notre travail sur les réseaux sociaux."
            // },
            // {
            //     sub_title:"Faire un legs",
            //     paragraphe: " laissez un don à International Alert dans votre testament et continuez à exercer une influence pendant des années."
            // }
        ],

        paragraphe: "C’est grâce au soutien de chacun que nous pourrons instaurer la paix que les populations recherchent et méritent.",
        thank:"Nous vous remercions.",
    }
]

export const contact=[
    {
        title: "Se mettre en contact avec notre équipe",
        paragraphe: "Contactez-nous via le formulaire ci-dessous pour savoir comment nous soutenir ou vous impliquer auprès de Bold."
    }
]


export const coordonne=[
    {
        icon: <MdEmail size={18} color={"#af2e16"}/>,
        label:"Addresse Email",
        value:"bold@contact.com"
    },
    {
        icon: <FaPhoneAlt size={18} color={"#af2e16"}/>,
        label:"Telephone",
        value:"+243 977 423 201"
    },
    {
        icon: <MdFax  size={25} color={"#af2e16"}/>,
        label:"Fax Address",
        value:"098-046-3"
    },
    {
        icon: <MdLocationOn size={25} color={"#af2e16"}/>,
        label: "Location",
        value: "Rdc/Nord-kivu/Goma"
    }
]

export const statut=[
    {
        label:"Personnel",
        value: "personnel"
    },
    {
        label:"Entreprise",
        value: "entreprise"
    },
    {
        label:"ONG",
        value: "ong",
    },
    {
        label:"Asbl",
        value: 'asbl'
    }
]

export const dontype=[
    {
        label:"Materiel",
        value: 'materiel'
    },
    {
        label:'Financier',
        value: 'financier'
    }
]


export const programme1=[
    {
        title:"Impliquées",
        resume:[
            {
                paragraphe: 'C’est un programme qui consiste à manifester le leadership des femmes à travers des actions concrètes pouvant améliorer la condition de vie de leurs pairs et dans leurs communautés et leurs pays.'
            },
            {
                paragraphe:'C’est grâce à ce programme que les femmes et les filles développeront des plans d’actions visant à appuyer la bonne gouvernance dans leurs pays ainsi que les compétences sur lesquelles sont construites leur résilience économique. Impliquées aux cotés des autres femmes, INVOLVED constitue également un réseau national réunissant des femmes et des filles au niveau national. '
            },
            {
                paragraphe: 'BOLD soutient le développement des initiatives économiques des femmes et des filles afin de favoriser leur autonomie financière et leur doter de pouvoir et des capacités pour répondre à leurs besoins et ceux de leurs familles.'
            }
        ]
    }
]


export const programme2=[
    {
        title: 'La parole audacieuse ',
        resume:[
            {
                paragraphe: 'Ces discussions vont d’un cercle de confiance entre femmes pour échanger sur des sujets qui les préoccupent et partager des témoignages aux émissions préenregistrées pour sensibiliser et atteindre une audience plus large et diversifiée selon les thématiques choisis.'
            },
            {
                paragraphe: 'Il s’agit ainsi d’un cadre d’échange sur les défis intersectoriels auxquels font face les femmes et les filles en Afrique Central, de l’Est et globalement méritent qu’on y apporte une attention particulière.'
            }
        ]
    }
]


export const programme3=[
    {
        title: 'Éducation adaptée pour un futur ',
        resume: [
            {
                paragraphe:'Consiste en un programme de formation innové et adapté aux besoins des communautés selon leur contexte et évolution.'
            },
            {
                paragraphe: 'Il s’agit d’une éducation basée sur les besoins de changement à apporter dans les communautés. Il s’agit d’un curriculum de développement des capacités personnelles pouvant permettre aux femmes et aux jeunes filles et garçons d’acquérir des capacités rapidement et efficacement pour de constituer une ressource humaine, économique et utile pour sa communauté.'
            }
        ]
    }
]

export const programme4=[
    {
        title: 'Solutions pour le Climat',
        resume:[
            {
                paragraphe: 'La prévention des catastrophes, la protection de l’environnement et les jardins'
            }
        ]
    }
]


export const banniers=["Des histoires inspirantes et motivantes"," Des Articles ", "Des Informations en Temps reel","Des Temoignages"]

// second part
export const cardsData = [
    {
      title: "Revenue",
      change: 24,
      amount: 42056,
    },
    {
      title: "Orders",
      change: -14,
      amount: 52125.03,
    },
    {
      title: "Expenses",
      change: 18,
      amount: 1216.5,
    },
    {
      title: "Profit",
      change: 12,
      amount: 10125.0,
    },
  ];
  
  export const ordersData = [
    {
      name: "Skatebnoard",
      type: "Illustration",
      items: 58,
      change: 290,
    },
    {
      name: "Language courses",
      type: "Illustration",
      items: 12,
      change: 72
    },
    {
      name: "Office Collaboration",
      type: "Illustration",
      items: 7,
      change: 70
    },
    {
      name: "Robot",
      type: "Illustration",
      items: 21,
      change: 15
    }
  ]
  
  
  //* get the value in group number format
  export const groupNumber = (numb:number) => {
    return parseFloat(numb.toFixed(2)).toLocaleString("en", {
      useGrouping: true,
    });
  };
  
  
  //* calendar Events
  let eventGuid = 0
  let todayStr = moment().format("YYYY-MM-DD")  // YYYY-MM-DD of today
  export const INITIAL_EVENTS = [
    {
      id: createEventId(),
      title: 'Lunch Pary',
      start: todayStr + 'T09:00:00',
  
    },
    {
      id: createEventId(),
      title: 'Timed event',
      start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + 'T16:00:00'
    },
    {
      id: createEventId(),
      title: "Head Meetup",
      start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + 'T20:00:00'
    },
    {
      id: createEventId(),
      title: "VC Meeting",
      start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + 'T09:00:00'
    },
    {
      id: createEventId(),
      title: "Payment Shedules",
      start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + 'T13:00:00'
    },
    {
      id: createEventId(),
      title: "VC Meeting",
      start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + 'T13:00:00'
    },
  ]
  
  export function createEventId() {
    return String(eventGuid++)
  }
  
  
  // * tasks
  export const boardData = {
    columns: [
      {
        id: 1,
        title: "Backlog",
        cards: [
          {
            id: 1,
            title: "Database Setup",
            description: "Firebase Integration"
          },
          {
            id: 2,
            title: "Data Flow",
            description: "Setup Diagram with other developers"
          },
        ]
      },
      {
        id: 2,
        title: "TODO",
        cards: [
          {
            id: 9,
            title: "Data Table Page",
            description: "Server side Pagination",
          }
        ]
      },
      {
        id: 3,
        title: "Doing",
        cards: [
          {
            id: 10,
            title: "Full Calendar Extension",
            description: "Make new events and store in global states"
          },
          {
            id: 11,
            title: "Custom Kanban Board",
            description: "Setup react-kanban dep within Dashboard as seperate page"
          }
        ]
      },
      {
        id: 4,
        title: "Completed",
        cards: [
          {
            id: 12,
            title: "Vite Server Setup",
            description: "Configure required modules and starters"
          },
          {
            id: 13,
            title: "Modular structre",
            description: "Write css in form of modules to reduce the naming conflicts"
          }
        ]
      }
    ]
  }
  
  
  // * user table data
  export const userData = [
    {
      name: {
        firstName: 'John',
        lastName: 'Doe',
      },
      address: '261 Erdman Ford',
      city: 'East Daphne',
      state: 'Kentucky',
    },
    {
      name: {
        firstName: 'Jane',
        lastName: 'Doe',
      },
      address: '769 Dominic Grove',
      city: 'Columbus',
      state: 'Ohio',
    },
    {
      name: {
        firstName: 'Joe',
        lastName: 'Doe',
      },
      address: '566 Brakus Inlet',
      city: 'South Linda',
      state: 'West Virginia',
    },
    {
      name: {
        firstName: 'Kevin',
        lastName: 'Vandy',
      },
      address: '722 Emie Stream',
      city: 'Lincoln',
      state: 'Nebraska',
    },
    {
      name: {
        firstName: 'Joshua',
        lastName: 'Rolluffs',
      },
      address: '32188 Larkin Turnpike',
      city: 'Charleston',
      state: 'South Carolina',
    }, {
      name: {
        firstName: 'Jane',
        lastName: 'Doe',
      },
      address: '769 Dominic Grove',
      city: 'Columbus',
      state: 'Ohio',
    },
    {
      name: {
        firstName: 'Joe',
        lastName: 'Doe',
      },
      address: '566 Brakus Inlet',
      city: 'South Linda',
      state: 'West Virginia',
    },
    {
      name: {
        firstName: 'Kevin',
        lastName: 'Vandy',
      },
      address: '722 Emie Stream',
      city: 'Lincoln',
      state: 'Nebraska',
    },
    {
      name: {
        firstName: 'Joshua',
        lastName: 'Rolluffs',
      },
      address: '32188 Larkin Turnpike',
      city: 'Charleston',
      state: 'South Carolina',
    },
  ]