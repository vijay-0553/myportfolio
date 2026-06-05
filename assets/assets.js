import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
//we add new png to the assets folder then we imported them in assets.js  import filename from './filename.png';
import award from './award.png'; 
import quality from './quality.png';
import docker from './docker.png'; 
//icons related to skills page
import uiux from './uiux.png' ;
import backend from './backend.png';
import software from './software.png';
import frontend from './frontend.png';
//LOGO vijay. of dark and light
import VijaylogoDark from './VijaylogoDark.png';
import Vijaylogo from './Vijaylogo.png';
//pngs related to profile
import Porfile_photo from './Porfile_photo.png';
import About_image from './About_image.png';
export const assets = {
    //here you need to the filename and then we can use them in down
    award,
    quality,
    //here icon related to tools
    docker,
    //LOGO vijay. of dark and light
    VijaylogoDark,
    Vijaylogo,
    //here the icons related to skills page
    uiux,
    backend,
    frontend,
    software,
    //profile 
    Porfile_photo,
    About_image,
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Fitness Tracker',
        description: 'Web Design',
        bgImage: '/work-1.png',
        problemStatement: 'Modern web users face slow interactions and clunky screen transitions on typical server-dependent sites, leading to decreased engagement.',
        solution: 'Developed a completely fluid, interactive Single Page Application (SPA) designed to instantly shift data layers without full-page reloads.',
        implementation: 'Utilized React lifecycle patterns, custom modular components, structured CSS configurations, and seamless DOM state updates for instant rendering transitions.',
        techStack: 'HTML5, CSS3, JavaScript (ES6+), ReactJS, Tailwind CSS',
        conclusion: 'Slashed application loading states significantly, delivering an interface architecture optimized for modern responsive standards.'
    },
    {
        title: 'Short Summer',
        description: 'Mobile App',
        bgImage: '/work-2.png',
        problemStatement: 'Accessing real-time regional content is frustrating when location updates lag or fail on critical mobile devices.',
        solution: 'Designed an interactive mobile ecosystem focusing heavily on low-latency asset distribution based on instant live coordinates.',
        implementation: 'Integrated direct geolocation lookups with map endpoints and constructed asynchronous promise setups to render structural cards smoothly.',
        techStack: 'JavaScript, Mobile Browser Frameworks, Maps API, Async Handlers',
        conclusion: 'Successfully engineered an optimized client platform capable of matching location changes with high UI precision.'
    },
    {
        title: 'Amazon clone',
        description: 'Web Design',
        bgImage: '/work-3.png',
        problemStatement: 'Visual heavy platforms struggle to serve high-definition media portfolios efficiently without causing bandwidth strain or visual distortion.',
        solution: 'Created a highly optimized grid layout focused on fluid asset loading and automated device layout adjustments.',
        implementation: 'Configured light/dark layout parameters, constructed modern dynamic styling grids, and applied lightweight content fetching structures.',
        techStack: 'HTML5, CSS Grid, Vanilla JavaScript, Responsive UI Systems',
        conclusion: 'Produced an artistic, fast-rendering responsive canvas built for cross-platform devices.'
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
        problemStatement: 'Disorganized layout structures on interfaces leave user pathways ambiguous, creating noticeable drop-off rates.',
        solution: 'Executed targeted user experience research paths to prototype seamless, conversion-driven navigation maps.',
        implementation: 'Built high-fidelity dynamic prototyping maps within interactive project boards to continuously test user feedback patterns.',
        techStack: 'Figma, High-Fidelity Prototyping, Wireframing, User Experience Patterns',
        conclusion: 'Delivered an intuitive interactive blueprint that reduces usability barriers and modernizes visual structures.'
    }
];

export const serviceData = [
    { icon: assets.software, title: 'Software Development', description: 'Java, Python, Data Structures & Algorithms, Problem Solving', link: '' },
    { icon: assets.frontend, title: 'Frontend Development', description: 'HTML5 & CSS3, JavaScript, ReactJS, NextJS, DOM API, Web Storage API, Fetch API', link: '' },
    { icon: assets.backend, title: 'Backend Systems', description: 'MySQL, MongoDB, Node.js, Amazon Web Services (AWS), API Integration (Auth, Payments, Maps)', link: '' },
    { icon: assets.uiux, title: 'UI/UX design', description: 'User Interface (UI), User Experience (UX), User Research, Figma, Prototyping', link: '' },
    
]


export const infoList = [
    { 
        icon: assets.award, 
        iconDark: assets.quality, 
        title: 'Imarticus Learning', 
        description: 'Full Stack Development',
        popupTitle: 'Imarticus Learning Certification',
        popupContent: 'I loved to do this! I enjoyed it really and experienced a lot, learned something new every single day during this Full Stack journey.'
    },
    { 
        icon: assets.award, 
        iconDark: assets.quality, 
        title: 'Oracle Dev Gym', 
        description: 'Databases for Developers: Performance', 
        popupTitle: 'Oracle Dev Gym Certification',
        popupContent: 'I loved to do this! I enjoyed it really and experienced a lot, especially breaking down query execution plans and database indexing strategies.'
    },
    { 
        icon: assets.edu_icon, 
        iconDark: assets.edu_icon_dark, 
        title: 'Education', 
        description: 'B.Tech in Computer Science',
        popupTitle: 'Education History',
        popupContent: (
            <div className="space-y-4 text-left">
                <div>
                    <h4 className="font-bold text-base text-gray-800 dark:text-white">2023 - 2027</h4>
                    <p className="font-medium text-gray-700 dark:text-gray-300">VIT-AP University (Amaravati, Andhra Pradesh)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Bachelor of Technology: Computer Science And Engineering</p>
                </div>
                <hr className="border-gray-200 dark:border-gray-700" />
                <div>
                    <h4 className="font-bold text-base text-gray-800 dark:text-white">2021 - 2023</h4>
                    <p className="font-medium text-gray-700 dark:text-gray-300">Sri Chaitanya Junior College (Vijayawada, Andhra Pradesh)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Intermediate: MPC</p>
                </div>
                <hr className="border-gray-200 dark:border-gray-700" />
                <div>
                    <h4 className="font-bold text-base text-gray-800 dark:text-white">2021</h4>
                    <p className="font-medium text-gray-700 dark:text-gray-300">Sri Chaitanya High School (Tenali, Andhra Pradesh)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Secondary School: High School</p>
                </div>
            </div>
        )
    }
];


export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git , assets.docker,
];