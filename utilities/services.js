import {DiJavascript1, DiHtml5, DiCss3, DiSass} from 'react-icons/di';
import {SiCss3, SiHtml5, SiJavascript,SiMaterialui, SiTypescript, SiSass, SiFramer} from 'react-icons/si'
import {FaReact, FaCubes} from 'react-icons/fa';
import {BsBarChartFill} from 'react-icons/bs';
import {Instagram, Facebook, GitHub} from '@material-ui/icons';

import Corona from '../utilities/assets/projectImage/corona.png';
import kid from '../utilities/assets/projectImage/kid.png';
import portfolio from '../utilities/assets/projectImage/portfolio.png';
import schedule from '../utilities/assets/projectImage/schedule.png';
import weather from '../utilities/assets/projectImage/weather.png';
import womenCage from '../utilities/assets/projectImage/womenCage.png';
import ih2 from '../utilities/assets/projectImage/ih2.png';
import portfolioMain from '../utilities/assets/projectImage/portfolio-main.png';
import sellerSpot from '../utilities/assets/projectImage/sellerSpot.png';

import { colors } from './colors';


export const projectImages = [
    {   id: 1,
        name: 'CoronaLiveTracker',
        image: Corona,
        category: 'Vanilla JS',
        show: false,
        link: 'https://coronalivetracker.netlify.app/',
        languages:[
            {
                label: 'Vanilla JS',
                icon: <DiJavascript1/>,
                value: 67.2,
                color: colors.jsColor
            },
            {
                label: 'HTML',
                icon: <DiHtml5/>,
                value: 12.8,
                color: colors.htmlColor
            },
            {
                label: 'CSS',
                icon: <DiCss3/>,
                value: 20,
                color: colors.cssColor
            },
        ],
        frameworks:[
            {
                name: 'Chart JS',
                icon: <BsBarChartFill/>,
                color: colors.chartColor,
            }
        ]
    },
    {
        id:2,
        name: 'Hoikurumunozomi',
        image: kid,
        category: 'React JS',
        show: false,
        link:'https://hoikurumunozomi-test.netlify.app/',
        languages:[
            {
                label: 'Javascript',
                icon: <SiJavascript/>,
                value: 97.4,
                color: colors.jsColor

            },
            {
                label: 'HTML',
                icon: <SiHtml5/>,
                value: 0.8,
                color: colors.htmlColor
            },
            {
                label: 'CSS',
                icon: <SiCss3/>,
                value: 1.8,
                color: colors.cssColor
            },
        ],
        frameworks:[
            {
                name: 'React JS',
                icon: <FaReact/>,
                color: colors.reactColor
            },
            {
                name: 'Material UI',
                icon: <SiMaterialui/>,
                color: colors.materialColor
            }
        ]
    },
    {
        id:3,
        name: 'First Portfolio',
        image: portfolio,
        category: 'HTML/CSS',
        show: false,
        link: 'https://rumonhasan.netlify.app/',
        languages:[
            {
                label: 'HTML',
                icon: <DiHtml5/>,
                value: 70,
                color: colors.htmlColor
            },
            {
                label: 'CSS',
                icon: <DiCss3/>,
                value: 30,
                color: colors.cssColor
            },
        ],
        frameworks:[
            {
                name:'SASS',
                icon: <SiSass/>,
                color: colors.sassColor
            }
        ]
    },
    {   
        id:4,
        name: 'Course Schedule',
        image: schedule,
        category: 'Vanilla JS',
        show: false,
        link: undefined,
        languages:[
            {
                label: 'Vanilla JS',
                icon: <DiJavascript1/>,
                value: 15,
                color: colors.jsColor
                
            },
            {
                label: 'HTML',
                icon: <DiHtml5/>,
                value: 3.1,
                color: colors.htmlColor
            },
            {
                label: 'CSS',
                icon: <DiCss3/>,
                value: 81.9,
                color: colors.cssColor
            },
        ],
        frameworks:undefined
    },
    {
        id:5,
        name: 'Seller Spot',
        image: sellerSpot,
        category: 'React JS',
        show: false,
        link: undefined,
        languages:[
            {
                label: 'Typescript',
                icon: <SiTypescript/>,
                value: 99.3,
                color: colors.tsColor
            },
            {
                label: 'HTML',
                icon: <DiHtml5/>,
                value: 0.7,
                color: colors.htmlColor
            },
        ],
        frameworks:[
            {
                name: 'React JS',
                icon: <FaReact/>,
                color: colors.reactColor,
            },
            {
                name: 'Material UI',
                icon: <SiMaterialui/>,
                color: colors.materialColor,
            },
        ]
    },
    {   id:6,
        name: 'Women In A Cage',
        image: womenCage,
        category: 'React JS',
        show: false,
        link: 'https://ih-presentation.netlify.app/',
        languages:[
            {
                label: 'Javascript',
                icon: <DiJavascript1/>,
                value: 90,
                color: colors.jsColor
            },
            {
                label: 'HTML',
                icon: <DiHtml5/>,
                value: 5,
                color: colors.htmlColor
            },
            {
                label: 'CSS',
                icon: <DiCss3/>,
                value: 5,
                color: colors.cssColor
            },
        ],
        frameworks: [
            {
                name:'SASS',
                icon: <SiSass/>,
                color: colors.sassColor,
            }
        ]
    },
    {   id:7,
        name: 'Philosophy Project',
        image: ih2,
        category: 'React JS',
        show: false,
        link:'https://ih2-site.netlify.app/',
        languages:[
            {
                label: 'Javascript',
                icon: <DiJavascript1/>,
                value: 95.3,
                color: colors.jsColor
            },
            {
                label: 'HTML',
                icon: <DiHtml5/>,
                value: 1.9,
                color: colors.htmlColor
            },
            {
                label: 'CSS',
                icon: <DiCss3/>,
                value: 2.8,
                color: colors.cssColor
            },
        ],
        frameworks:[
            {
                name: 'React JS',
                icon: <FaReact/>,
                color: colors.reactColor,
            },
            {
                name: 'Material UI',
                icon: <SiMaterialui/>,
                color: colors.materialColor,
            }
        ]
    },
    {   id:8,
        name: 'Portfolio Main',
        image: portfolioMain,
        category: 'React JS',
        show: false,
        link: undefined,
        languages:[
            {
                label: 'Javascript',
                icon: <DiJavascript1/>,
                value: 97.5,
                color: colors.jsColor
            },
            {
                label: 'HTML',
                icon: <DiHtml5/>,
                value: 1.8,
                color: colors.htmlColor
            },
            {
                label: 'CSS',
                icon: <DiCss3/>,
                value: 0.7,
                color: colors.cssColor
            },
        ],
        frameworks:[
            {
                name: 'React JS',
                icon: <FaReact/>,
                color: colors.reactColor,
            },
            {
                name: 'Material UI',
                icon: <SiMaterialui/>,
                color: colors.materialColor,
            },
            {
                name: 'Framer Motion',
                icon: <SiFramer/>,
                color: colors.framerColor
            },
            {
                name: 'Three JS',
                icon: <FaCubes/>,
                color: colors.jsColor
            }
        ]
    },
    
];
