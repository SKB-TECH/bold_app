import { MdEmail, MdLocationOn, MdFax } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { text } from "../utils";

export const links = [
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


export const bannier = [
  {
    title: "Ensemble ",
    resume: 'Valorisons la voix des Femmes et des Filles et leur construit un espace expression ouverte et positive'
  }
]

export const mission = [
  {
    parama1: "A travers son action BOLD soutient des programmes d’éducation adaptée, appui les institutions et les parties prenantes pour favoriser une gouvernance inclusive ainsi que le développement durable basé sur l’égalité et l’équité."
  }
]

export const resnews = [
  {
    title: "S’inscrire pour recevoir les toutes dernières informations",
    resume: "Pour recevoir les dernières informations de Bold, y compris concernant les nouveaux outils, rapports, campagnes et webinars, et découvrir comment des spécialistes de la consolidation de la paix parviennent à opérer un véritable changement au sein de leurs communautés, merci de saisir vos coordonnées."
  }
]

export const exoViolence = [
  {
    title: "QU’EST-CE QUE LA VIOLENCE CONJUGALE?",
    resume: [
      {
        par1: "La violence conjugale est une problématique sociale qui s’inscrit dans des rapports historiques d’inégalité entre les hommes et les femmes. En effet, dans 80 % des cas rapportés à la police, les victimes sont des femmes. La violence conjugale se manifeste dans un couple où les deux partenaires vivent une relation intime et affective, et elle peut se poursuivre après la séparation. On y retrouve un rapport de domination dans lequel l’agresseur établie et maintient son emprise sur sa victime tout en s’assurant qu’elle ne le quitte pas.",
        par2: "La violence conjugale s’exerce à travers un cycle stratégique dans lequel l’agresseur tente de mettre continuellement en échec toutes les réactions de la victime pour pouvoir la garder sous son contrôle. C’est un rapport de force. Ce n’est pas une dynamique où deux personnes sont à tour de rôle agresseur et victime. C’est un enchaînement de stratégies utilisées par l’agresseur dans le but de dominer sa victime."
      }]
  }
]

export const namePages = [
  {
    title: "Apropos de Bold",
    resume: ["Qui sommes-nous ?", "Qu'est-ce-que nous faisons ?", "Comment nous le faisons ?"]
  }

]

export const apropos = [
  {
    title: "A propos de Bold",
    resume: [
      {
        paragraphe: "BOLD est une Association Sans But Lucratif poursuivant  la vision d’un monde de dignité pour toutes les femmes et les filles. Notre mission  est de renforcer, accompagner et soutenir les femmes et filles pour la construction des communautés inclusives et équitables. "
      },
      {
        paragraphe: "Son siège social se situe à Goma, en République Démocratique du Congo. "
      }
    ]
  }
]

export const aproposII = [
  {
    title: "Que faisons-nous",
    resume: [
      {
        paragraphe: "BOLD favorise la voix des femmes et des filles et leur construit un espace d’expression ouverte et positive de sorte que entendue et leurs préoccupations considérées. A travers son action BOLD soutient des programmes d’éducation adaptée, appui les institutions et les parties prenantes pour favoriser une gouvernance inclusive ainsi que le développement durable basé sur l’égalité et l’équité."
      },
      {
        paragraphe: "L’action de Bold est portée par des femmes, des hommes, des filles et des garçons qui ont conscience que l’égalité des sexes commence par le respect de la dignité dont a droit chaque être humain, dont les femmes et les filles."
      }
    ]
  }
]


export const comment = [
  {
    title: "Comment le faisons-nous",
    detail: [{
      sub: "A travers notre action, nous poursuivons deux objectifs principaux ",
      resume: [
        {
          children: text("commentResume1"),
          color: '#af2e16',
          dot: <span className=" rounded-full text-rouge bold-18">{"A)"}</span>
        },
        {
          children: text("commentResume2"),
          color: '#af2e16',
          dot: <span className=" rounded-full text-rouge bold-18">{"B)"}</span>

        }
      ]
    },
    {
      sub: text("commentSubTitle"),
      resume: [
        {
          children: text("detailResume1"),
          color: '#af2e16',
          dot: <span className=" rounded-full text-rouge bold-18">{"I"}</span>
        },
        {
          children: text("detailResume2"),
          color: '#af2e16',
          dot: <span className=" rounded-full text-rouge bold-18">{"II"}</span>

        },
        {
          children: text("detailResume3"),
          color: '#af2e16',
          dot: <span className=" rounded-full text-rouge bold-18">{"III"}</span>
        },
        {
          children: text("detailResume4"),
          color: '#af2e16',
          dot: <span className=" rounded-full text-rouge bold-18">{"IV"}</span>
        }
      ]
    }
    ]
  },
]

export const valeurs = [
  {
    title: text("valeursTitle"),
    deatils: [
      {
        sub: text("valeursDetailSub"),
        resume: [
          {
            title: text("valeursDetailResume1")
          },
          {

            title: text("valeursDetailResume2")
          },
          {
            title: text("valeursDetailResume3")
          },
          {
            title: text("valeursDetailResume4")
          },
          {
            title: text("valeursDetailResume5")
          }

        ]
      }
    ]
  }
]

export const alldon = [
  {
    title: [text("alldonTitle")],
    sub: text("alldonSub")
  }
]

export const dons = [
  {
    sub_title: text("donsTitle"),
    resume: [
      {
        paragraphe: text("donsResume1")
      },

      {
        paragraphe: text("donsResume2")
      },
      {
        paragraphe: text("donsResume3")
      }
    ]
  }
]

export const calldon = [
  {
    sub_title: text("calldonTitle"),
    btn: text("calldonBtn"),
    resume: [
      {
        paragraphe: text("calldonResume1")
      },

      {
        paragraphe: text("calldonResume2")
      },
    ]
  }
]

export const otherdon = [
  {
    title: text("otherDonTitle"),
    resume: [
      {
        sub_title: text("otherDonResumeTitle1"),
        paragraphe: text("otherDonResume1")
      },
      {
        sub_title: text("otherDonResumeTitle2"),
        paragraphe: text("otherDonResume2")
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

    paragraphe: text("otherDonParag"),
    thank: text("otherDonThank"),
  }
]

export const contact = [
  {
    title: text("contactTitle"),
    paragraphe: text("contactParam")
  }
]


export const coordonne = [
  {
    icon: <MdEmail size={18} color={"#af2e16"} />,
    label: "Addresse Email",
    value: "bold@contact.com"
  },
  {
    icon: <FaPhoneAlt size={18} color={"#af2e16"} />,
    label: "Telephone",
    value: "+243 977 423 201"
  },
  {
    icon: <MdFax size={25} color={"#af2e16"} />,
    label: "Fax Address",
    value: "098-046-3"
  },
  {
    icon: <MdLocationOn size={25} color={"#af2e16"} />,
    label: "Location",
    value: "Rdc/Nord-kivu/Goma"
  }
]

export const statut = [
  {
    label: "Personnel",
    value: "personnel"
  },
  {
    label: "Entreprise",
    value: "entreprise"
  },
  {
    label: "ONG",
    value: "ong",
  },
  {
    label: "Asbl",
    value: 'asbl'
  }
]

export const dontype = [
  {
    label: "Materiel",
    value: 'materiel'
  },
  {
    label: 'Financier',
    value: 'financier'
  }
]


export const programme1 = [
  {
    title: text("pragramme1Title"),
    resume: [
      {
        paragraphe: text("pragramme1Resume1")
      }, {
        paragraphe: text("pragramme1Resume2")
      }, {
        paragraphe: text("pragramme1Resume3")
      },

    ]
  }
]


export const programme2 = [
  {
    title: text("pragramme2Title"),
    resume: [
      {
        paragraphe: text("pragramme2Resume1")
      },
      {
        paragraphe: text("pragramme1Resume2")
      },
    ]
  }
]


export const programme3 = [
  {
    title: text("pragramme3Title"),
    resume: [
      {
        paragraphe: text("pragramme3Resume1")
      },
      {
        paragraphe: text("pragramme3Resume2")
      },
    ]
  }
]

export const programme4 = [
  {
    title: text("pragramme4Title"),
    resume: [
      {
        paragraphe: text("pragramme4Resume1")
      }
    ]
  }
]

export const banniers = [
  text("banniers1"),
  text("banniers2"),
  text("banniers3"),
  text("banniers4")
]

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
export const groupNumber = (numb: number) => {
  return parseFloat(numb.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};
