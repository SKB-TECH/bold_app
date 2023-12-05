import{GridColDef} from '@mui/x-data-grid';

export const FOOTER_LINKS = [
    {
      title: 'Bold',
      links: [
        'apropos',
        'programme',
        'blogue',
      ],
    },
    {
        title: 'En Plus',
        links: [
          'don',
          'contact',
          ''
        ],
      }
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Officer', value: '+243 974 970 837' },
      { label: 'Email Officer', value: 'bold@Info.com' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '../data/facebook.svg',
      '../data/instagram.svg',
      '../data/twitter.svg',
      '../data/youtube.svg',
      '../data/wordpress.svg',
    ],
  };

//columns users view
export const columnsnUser:GridColDef[]=[
  {
    field:'noms',
    headerName:'Noms',
    width: 350,
  },
  {
    field:'email',
    headerName:'Email',
    width: 350
  },
  {
    field:'fonction',
    headerName:'Fonction',
    width: 250
  },
]

export const colors= ['#E5FAFB','rgb(254, 201, 15)','rgb(255, 244, 229)','rgb(235, 250, 242)'];