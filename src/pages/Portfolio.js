import React from 'react';
import './Portfolio.css';  // Assuming you're combining both CSS into one file
import { FaCode, FaPalette, FaMobileAlt, FaGlobe, FaLaptopCode, FaGraduationCap, FaBriefcase, FaLightbulb, FaArrowRight } from "react-icons/fa";  // Icons for My Services
import { Link } from 'react-router-dom';
import Footer from './Footer';

// Turns a project title into a URL-friendly slug, e.g. "Pac-Man Game" -> "pac-man-game"
export function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// MyServices Component
const MyServices = () => {
  return (
    <div id='portfolio-page'>
      <div className='margin-page'>
      <nav id='nav-page'>
        <div id='nav-container'>
          {/* <ol>
            <li><a href="index.html">Home</a></li>
            <li class="current">Portfolio</li>
          </ol> */}
        </div>
      </nav> {/* goods */}
    <div className="services-container">
      <div className="services-title">
        <h2>What I Offer</h2>
        <div><span>Skills/Services</span></div>
      </div>
      <div className="services-boxes">
        <div className="service-box">
          <FaCode className="service-icon" />
          <h3 className='title-boxed'>Programming</h3>
          <p className='box-description'>Developing applications, games, and interactive systems.</p>
        </div>
        <div className="service-box">
          <FaGlobe className="service-icon" />
          <h3 className='title-boxed'>Web App Development</h3>
          <p className='box-description'>Building responsive websites and web applications.</p>
        </div>
        <div className="service-box">
          <FaMobileAlt className="service-icon" />
          <h3 className='title-boxed'>Mobile App Development</h3>
          <p className='box-description'>Creating mobile applications for Android and iOS.</p>
        </div>
        <div className="service-box">
          <FaPalette className="service-icon" />
          <h3 className='title-boxed'>UI/UX & Graphic Design</h3>
          <p className='box-description'>Designing user interfaces, prototypes, and visual content using Figma and Photoshop.</p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────
// Academic Projects data
//
// HOW TO ADD SCREENSHOTS / VIDEOS LATER (for any project below):
//   1. Put the image/video file in the `public/` folder (same place the
//      existing project images like `/TitleScreen.jpg` already live).
//   2. Add its path to that project's `screenshots` array to add it to the
//      gallery, e.g. screenshots: ['/CharacterGame.gif', '/pacman-2.png'].
//      You can list as many as you want — the gallery grid and lightbox
//      will show all of them automatically.
//   3. For a video, set the `video` field to its file path (or an embed
//      URL), e.g. video: '/pacman-demo.mp4'. Leave it as `null` if there
//      isn't one yet.
//
// HOW TO ADD "View Live Demo" / "GitHub" BUTTONS:
//   Set `demoLink` and/or `githubLink` to the real URL. Leave either as
//   `null` and that button simply won't be shown — no need to remove code.
//
// HOW TO FILL IN PROJECT DETAILS (Year, Team, My Role, Responsibilities):
//   Each project has a `details` object. Replace any '?' with the real
//   value, e.g. year: '2023', team: '2 Members', role: 'Solo Developer'.
// ─────────────────────────────────────────────────────────────────────────
export const academicProjects = [
  {
    slug: 'computer-quiz-wizard',
    title: 'Computer Quiz Wizard (Quiz Game)',
    description: 'A basic desktop quiz game built with C# and Windows Forms, featuring two quiz modes: True or False and Multiple Choice.',
    link: 'https://example.com/desktop-development',
    imgSrc: '/Computer%20Quiz%20Wizard%20%28Quiz%20Game%29/wizard.png',
    category: 'Desktop App Development',
    tech: 'C#',
    techTags: ['Microsoft Visual Studio Express 2012', 'C#', 'Windows Forms'],
    screenshots: [
      '/Computer%20Quiz%20Wizard%20%28Quiz%20Game%29/wizard.png',
      '/Computer%20Quiz%20Wizard%20%28Quiz%20Game%29/loadingscreen.png',
      '/Computer%20Quiz%20Wizard%20%28Quiz%20Game%29/multiplechoices.png',
      '/Computer%20Quiz%20Wizard%20%28Quiz%20Game%29/trueorfalse.png'
    ],
    video: '/Computer%20Quiz%20Wizard%20%28Quiz%20Game%29/programming_quiz_wizard_video.mp4',
    demoLink: null,
    githubLink: null,
    about: 'Computer Quiz Wizard is a simple desktop quiz game developed as part of a Visual Studio academic activity using C# and Windows Forms. The application offers two quiz modes: Normal Mode, which presents true-or-false questions, and Standard Mode, which uses multiple-choice questions.\n\nThe project was a straightforward exercise in building a functional quiz interface from scratch — handling question display, answer selection, and basic navigation between screens. It gave me hands-on practice with event-driven programming, UI layout design, and working with forms in a desktop environment.',
    details: {
      projectType: 'Academic Project',
      category: 'Desktop App Development',
      year: '2023',
      team: 'Individual Project',
      role: 'Desktop Application Developer',
      responsibilities: 'Designed the quiz interface and navigation flow, implemented the two quiz modes (True or False and Multiple Choice), and built the screen transitions using C# and Windows Forms.'
    }
  },
  {
    slug: 'school-website',
    title: 'School Website',
    description: 'A multi-page school website built with React.js, featuring campus information, course listings, and an enrollment page.',
    link: 'https://example.com/e-commerce',
    imgSrc: '/School%20Website/schoolwebsite.png',
    category: 'Web App Development',
    tech: 'React.js',
    techTags: ['React.js'],
    screenshots: [
      '/School%20Website/schoolwebsite.png',
      '/School%20Website/About.png',
      '/School%20Website/Campus.png',
      '/School%20Website/Courses.png',
      '/School%20Website/Enrollment.png'
    ],
    video: null,
    noVideo: true,
    demoLink: null,
    githubLink: null,
    about: 'The School Website is a multi-page front-end project built with React.js as part of a web development class activity. The task was to design and build a website of our own choosing, and I chose to create a complete school website.\n\nThe site includes dedicated pages for Home, About, Campus, Courses, and Enrollment, each with its own layout and content structure. Building it gave me experience with React component architecture, page routing, and creating cohesive multi-page layouts from scratch.',
    details: {
      projectType: 'Academic Project',
      category: 'Web App Development',
      year: '2024',
      team: 'Individual Project',
      role: 'Front-End Developer',
      responsibilities: 'Designed and developed all pages of the site — including Home, About, Campus, Courses, and Enrollment — using React.js. Handled the component structure, page routing, layout design, and overall front-end implementation as the sole developer.'
    }
  },
  {
    slug: 'tic-tac-toe',
    title: 'Tic-Tac-Toe (Web App)',
    description: 'A classic two-player browser-based Tic-Tac-Toe game built with React.js, featuring turn-based gameplay and a simple statistics section.',
    link: 'https://example.com/seo-optimization',
    imgSrc: '/Tic-Tac-Toe/tic-tac-toe.png',
    category: 'Web App Development',
    tech: 'React.js',
    techTags: ['Visual Studio Code', 'React.js', 'CSS'],
    screenshots: ['/Tic-Tac-Toe/tic-tac-toe.png'],
    video: '/Tic-Tac-Toe/tic-tac-toe.mp4',
    demoLink: null,
    githubLink: null,
    about: 'Tic-Tac-Toe is a browser-based web application built with React.js as part of an academic project. The main goal was to create a classic two-player Tic-Tac-Toe game where players take turns placing X and O on the board.\n\nThe game includes a turn indicator showing whose turn it is, a simple statistics section that tracks the number of wins for X and O along with the total games played, and the ability to restart at any time. For my version, I chose a minimal and clean design to keep the interface simple and easy to use. It was a straightforward exercise in managing game state with React hooks and building interactive UI components.',
    details: {
      projectType: 'Academic Project',
      category: 'Web App Development',
      year: '2024',
      team: 'Individual Project',
      role: 'Front-End Developer',
      responsibilities: 'Designed and built the game board UI, implemented turn-based logic and win tracking, built the statistics display and restart functionality, and styled the interface with a minimal, clean design using React.js.'
    }
  },
  {
    slug: 'ordering-pizza',
    title: 'Pizza Ordering (Web App)',
    description: 'A pizza ordering menu system built with React.js, allowing users to select a size, flavor, toppings, and customer type to see an automatically calculated total price.',
    link: 'https://example.com/seo-optimization',
    imgSrc: '/Ordering%20Pizza/Ordering_App.png',
    category: 'Web App Development',
    tech: 'React.js',
    techTags: ['Visual Studio Code', 'React.js', 'CSS'],
    screenshots: ['/Ordering%20Pizza/Ordering_App.png'],
    video: '/Ordering%20Pizza/Pizza_Ordering_Web_App.mp4',
    demoLink: null,
    githubLink: null,
    about: 'Pizza Ordering is a web application built with React.js as part of an academic project. It functions as an ordering menu system where the user can choose a pizza size, select a flavor, add additional toppings, and pick a customer type to determine whether a discount applies.\n\nOnce the selections are made, the total price is automatically calculated and displayed on the menu. The project focused on building interactive selection forms, managing dynamic state across multiple options, and handling real-time price calculation in a web interface.',
    details: {
      projectType: 'Academic Project',
      category: 'Web App Development',
      year: '2024',
      team: 'Individual Project',
      role: 'Front-End Developer',
      responsibilities: 'Designed the ordering menu interface, implemented the selection logic for size, flavor, toppings, and customer type, built the automatic price calculation, and managed dynamic state across all options using React.js.'
    }
  },
  {
    slug: 'periodic-table',
    title: 'Periodic Table',
    description: 'An interactive periodic table layout built with HTML and CSS, displaying element symbols, categories, and organized groups.',
    link: 'https://example.com/seo-optimization',
    imgSrc: '/Periodic%20Table/periodic_table.png',
    category: 'Web App Development',
    tech: 'HTML/CSS',
    techTags: ['Sublime Text Editor', 'HTML', 'CSS'],
    screenshots: ['/Periodic%20Table/periodic_table.png'],
    video: null,
    noVideo: true,
    singlePreview: true,
    demoLink: null,
    githubLink: null,
    about: 'The Periodic Table project is a static web page that displays a fully laid-out periodic table of elements using only HTML and CSS. Created as part of a Web App Development activity, the project focused on recreating the complex grid structure of the periodic table with proper element positioning, color-coded categories, and clean typography.\n\nIt was a great exercise in CSS grid layout, precise positioning, and turning a data-heavy visual reference into a structured web page without relying on JavaScript.',
    details: {
      projectType: 'Academic Project',
      category: 'Web App Development',
      year: '2023',
      team: 'Individual Project',
      role: 'Front-End Developer',
      responsibilities: 'Structured the HTML layout for all 118 elements, designed the CSS grid system for proper periodic table positioning, and applied color-coded styling for element categories.'
    }
  },
  {
    slug: 'cloning',
    title: 'Cloning',
    description: 'An individual photo manipulation activity using Photoshop, combining six separate photos of myself into a single seamless composition with additional props.',
    link: 'https://example.com/seo-optimization',
    imgSrc: '/Cloning/finalpic.png',
    category: 'Graphic Design',
    tech: 'Photoshop',
    techTags: ['Photoshop'],
    screenshots: [
      '/Cloning/1.jpg',
      '/Cloning/2.jpg',
      '/Cloning/3.jpg',
      '/Cloning/4.jpg',
      '/Cloning/5.jpg',
      '/Cloning/6.jpg',
      '/Cloning/finalpic.png'
    ],
    video: null,
    noVideo: true,
    demoLink: null,
    githubLink: null,
    about: 'The Cloning project is an individual photo manipulation activity completed in Photoshop as part of a Graphic Design academic course. The goal was to create a convincing cloning effect by combining multiple photos of the same subject into one seamless image.\n\nI took six separate photos of myself, each in a different position within the same scene. I then combined and edited the photos in Photoshop to make it look like multiple versions of me were present in the same image. Additional props were incorporated into the final composition — a gun and katanas were physical props present during the photoshoot, while a money gun was digitally added to enhance the scene.',
    details: {
      projectType: 'Academic Project',
      category: 'Graphic Design',
      year: '2024',
      team: 'Individual Project',
      role: 'Graphic Designer',
      responsibilities: 'Planned and shot six reference photos with consistent lighting and positioning, composited the images using layer masking and blending techniques in Photoshop, digitally added a money gun prop, and refined the final result through color correction and detail cleanup.'
    }
  },
  {
    slug: 'meatshop-flyers',
    title: 'MeatShop Flyers',
    description: 'A promotional flyer created as part of an academic Photoshop exercise. The project involved adapting an online template and customizing its branding, typography, and content to fit a meat shop grand-opening concept.',
    link: 'https://example.com/seo-optimization',
    imgSrc: '/MeatShop%20Flyer/Flyers.png',
    category: 'Graphic Design',
    tech: 'Photoshop',
    techTags: ['Photoshop'],
    screenshots: ['/MeatShop%20Flyer/Flyers.png'],
    singlePreview: true,
    video: null,
    noVideo: true,
    demoLink: null,
    githubLink: null,
    about: 'The MeatShop Flyers project is an individual graphic design activity completed in Photoshop as part of a Graphic Design academic course. The assignment was to create a Grand Opening flyer and logo, and I chose to design one for a meat shop.\n\nI started with an online template and customized it to fit the meat shop theme. This included adjusting the layout, replacing placeholder text and images, selecting typography, and applying branding colors to create a cohesive and professional-looking final design.',
    details: {
      projectType: 'Academic Project',
      category: 'Graphic Design',
      year: '2024',
      team: 'Individual Project',
      role: 'Graphic Designer',
      responsibilities: 'Adapted an online template for a meat shop grand-opening concept. Customized the layout, typography, color scheme, and content, and prepared the final flyer for print-ready output.'
    }
  },
  {
    slug: 'pac-man-game',
    title: 'Pac-Man Game',
    description: 'A browser-based arcade game built with HTML, CSS, and JavaScript, where players collect coins and diamonds to win across multiple levels.',
    link: 'https://example.com/seo-optimization',
    imgSrc: '/Pac-Man%20Game/TitleScreen.jpg',
    category: 'Web App Development',
    tech: 'HTML/CSS/JS',
    techTags: ['HTML', 'CSS', 'JavaScript'],
    screenshots: [
      '/Pac-Man%20Game/LVL1.jpg',
      '/Pac-Man%20Game/LVL2.jpg',
      '/Pac-Man%20Game/GameOver.jpg',
      '/Pac-Man%20Game/YouWin.jpg'
    ],
    video: '/Pac-Man%20Game/PacMan_Video.mp4',
    demoLink: null,
    githubLink: null,
    about: 'Pac-Man is a browser-based arcade game developed as an academic final project using HTML, CSS, and vanilla JavaScript. The goal is to collect all the coins on the board before completing the game — if the player finishes without collecting them all, they lose. Diamonds are scattered throughout as optional pickups that provide additional points but are not required to win.\n\nThe game features multiple levels, score tracking, and win/lose conditions. It was a collaborative effort that gave me hands-on experience with game logic, collision detection, animation loops, keyboard input handling, and structuring game state across levels.',
    details: {
      projectType: 'Academic Project',
      category: 'Web App Development',
      year: '2024',
      team: '3 Members',
      role: 'Front-End Developer',
      responsibilities: 'Worked closely with two teammates throughout the project, contributing to game board rendering, player movement, coin and diamond collection logic, collision detection, and score tracking. Each member handled different parts of the development, and we collaborated on level design, testing, and refining the overall gameplay.'
    }
  },
  {
    slug: 'pizza-ordering-system',
    title: 'Pizza Ordering System',
    description: 'A simple desktop application built with C# and Windows Forms that computes the total cost, discount, and change for a pizza order.',
    link: 'https://example.com/desktop-development',
    imgSrc: '/Pizza%20Ordering%20System/Pizza_Ordering_System.png',
    category: 'Desktop App Development',
    tech: 'C#',
    techTags: ['Microsoft Visual Studio Express 2012', 'C#', 'Windows Forms'],
    screenshots: ['/Pizza%20Ordering%20System/Pizza_Ordering_System.png'],
    video: '/Pizza%20Ordering%20System/Pizza_Ordering_System_Video.mp4',
    demoLink: null,
    githubLink: null,
    about: 'The Pizza Ordering System is a simple desktop application built with C# and Windows Forms as part of a Desktop App Development academic activity. The user selects a pizza flavor, chooses an available discount, enters the quantity, and inputs the amount of cash. Clicking the Compute button then displays the total percent, discount, discounted total, and change in the result section.\n\nIt was one of my earlier C# projects, focusing on event-driven programming, form-based UI design, and basic input processing and calculation within a single application.',
    details: {
      projectType: 'Academic Project',
      category: 'Desktop App Development',
      year: '2023',
      team: 'Individual Project',
      role: 'Desktop Application Developer',
      responsibilities: 'Designed and developed the user interface and computation logic, including input fields for pizza flavor, discount, quantity, and cash, as well as the Compute button and result display using C# and Windows Forms in Visual Studio Express 2012.'
    }
  },
  {
    slug: 'quiz-master',
    title: 'Quiz Master',
    description: 'A desktop quiz game built with C# and Windows Forms, featuring subject selection, timed questions, and a results summary screen.',
    link: 'https://example.com/desktop-development',
    imgSrc: '/Quiz%20Master/QuizMaster_titlescreen.png',
    category: 'Desktop App Development',
    tech: 'C#',
    techTags: ['Microsoft Visual Studio Express 2012', 'C#', 'Windows Forms'],
    screenshots: [
      '/Quiz%20Master/QuizMaster_titlescreen.png',
      '/Quiz%20Master/QuizMaster_subjects.png',
      '/Quiz%20Master/QuizMaster_result.png',
      '/Quiz%20Master/QuizMaster_question1.png',
      '/Quiz%20Master/QuizMaster_question2.png',
      '/Quiz%20Master/QuizMaster_question3.png',
      '/Quiz%20Master/QuizMaster_question4.png'
    ],
    video: '/Quiz%20Master/QuizMaster_video.mp4',
    demoLink: null,
    githubLink: null,
    about: 'Quiz Master is a desktop quiz game application developed as part of an academic project using Visual Studio and C#. The game features a subject selection screen, multiple question sets, timed questions, and a results summary that displays the final score.\n\nThis project built on my experience from the earlier Computer Quiz Wizard, adding features like subject-based question grouping and a more refined UI. It strengthened my understanding of state management, form transitions, and building user-friendly desktop interfaces.',
    details: {
      projectType: 'Academic Project',
      category: 'Desktop App Development',
      year: '2023',
      team: 'Individual Project',
      role: 'Desktop Application Developer',
      responsibilities: 'Designed the subject selection and question screens, implemented the timed question logic and scoring system, built the results summary display, and styled the interface using Windows Forms controls.'
    }
  },
  {
    slug: 'ui-ux-figma',
    title: 'Smart Home Control App UI',
    description: 'A UI/UX design project in Figma, designing a smart home control app interface from low-fidelity wireframes to high-fidelity prototypes.',
    link: 'https://example.com/ui-ux-design',
    imgSrc: '/Smart%20Home%20Control%20App%20UI/HighFidelity_Exp.0.png',
    category: 'UI/UX Design',
    tech: 'Figma',
    techTags: ['Figma'],
    screenshots: [
      '/Smart%20Home%20Control%20App%20UI/LowFidelity_Exp.0.png',
      '/Smart%20Home%20Control%20App%20UI/MidFidelity_Exp.0.png',
      '/Smart%20Home%20Control%20App%20UI/HighFidelity_Exp.0.png',
      '/Smart%20Home%20Control%20App%20UI/LowFidelity_Exp.1.png',
      '/Smart%20Home%20Control%20App%20UI/MidFidelity_Exp.1.png',
      '/Smart%20Home%20Control%20App%20UI/HighFidelity_Exp.1.png',
      '/Smart%20Home%20Control%20App%20UI/Navigation_Interfaces.png',
      '/Smart%20Home%20Control%20App%20UI/Additionals_Pages.png'
    ],
    video: null,
    noVideo: true,
    demoLink: null,
    githubLink: null,
    about: 'The Smart Home Control App UI is an academic project focused on the complete UI/UX design process using Figma. The project involved designing an interface for controlling smart home devices — from initial low-fidelity wireframes through mid-fidelity layouts to polished high-fidelity prototypes.\n\nWorking in a team of four, I contributed to the user interface design across multiple screens, including device controls, room navigation, and additional settings pages. The project gave me hands-on experience with the full design workflow: user flow mapping, wireframing, component design, and creating interactive prototypes ready for user testing.',
    details: {
      projectType: 'Academic Project',
      category: 'UI/UX Design',
      year: '2024',
      team: '4 Members',
      role: 'UI/UX Designer',
      responsibilities: 'Designed multiple screens across low-fidelity, mid-fidelity, and high-fidelity stages. Created navigation interfaces and additional pages, contributed to the design system, and collaborated with teammates on user flow and layout decisions.'
    }
  },
  {
    slug: 'voice-quiz-app',
    title: 'Voice Quiz App',
    description: 'A voice-powered quiz web app built with React.js and the Web Speech API, letting users answer questions through speech recognition.',
    link: 'https://example.com/web-development',
    imgSrc: '/Voice%20Quiz%20App/VoiceQuiz_App.png',
    category: 'Web App Development',
    tech: 'React.js',
    techTags: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Web Speech API'],
    screenshots: [
      '/Voice%20Quiz%20App/VoiceQuiz_App.png',
      '/Voice%20Quiz%20App/VoiceQuiz_App1.png'
    ],
    video: '/Voice%20Quiz%20App/VoiceQuiz_App.mp4',
    demoLink: null,
    githubLink: null,
    about: 'Voice Quiz App is an interactive quiz website built with React.js that lets users answer questions using their voice instead of typing. The app leverages the Web Speech API for browser-based speech recognition, making the quiz experience more hands-free and engaging.\n\nThe application includes answer checking, real-time score tracking, and a game-over screen. It was a unique project that combined front-end development with voice recognition integration, giving me experience working with browser APIs and handling asynchronous speech input in a React environment.',
    details: {
      projectType: 'Academic Project',
      category: 'Web App Development',
      year: '2025',
      team: 'Individual Project',
      role: 'Frontend Web Developer',
      responsibilities: 'Built the quiz UI and game logic with React.js, integrated the Web Speech API for voice recognition, implemented answer validation and score tracking, and handled the game flow from question display to results screen.'
    }
  },
  {
    slug: 'dungeon-jump',
    title: 'Dungeon Jump',
    description: 'A mobile jumping game built with MIT App Inventor, inspired by Sky Jump from Pou, featuring multiple screens and gameplay mechanics.',
    link: 'https://example.com/mobile-development',
    imgSrc: '/Dungeon%20Jump/TitleScreen.png',
    category: 'Mobile App Development',
    tech: 'MIT App Inventor',
    techTags: ['MIT App Inventor', 'Block-Based Programming'],
    screenshots: [
      '/Dungeon%20Jump/HowToPlay.png',
      '/Dungeon%20Jump/TitleScreen.png',
      '/Dungeon%20Jump/GameScreen.png',
      '/Dungeon%20Jump/Menu.png',
      '/Dungeon%20Jump/Settings.png',
      '/Dungeon%20Jump/GameOver.png'
    ],
    video: '/Dungeon%20Jump/DungeonJump_Presentation.mp4',
    demoLink: null,
    githubLink: null,
    about: 'Dungeon Jump is a mobile game created as a college academic project using MIT App Inventor. Inspired by the Sky Jump mini-game from Pou, the project evolved from that initial concept into a fully featured jumping game with its own interface, levels, and gameplay mechanics.\n\nAs the Lead Developer, I handled most of the game\u2019s development — building the different screens (title, gameplay, settings, game over), implementing jumping physics and platform collision, and connecting all the features into a cohesive experience. My partner contributed ideas and helped refine the overall direction.\n\nThis project gave me hands-on experience in mobile game development, from concept and prototyping to testing and polishing a final product. It was also an opportunity to lead a collaborative project while building problem-solving and debugging skills.',
    details: {
      projectType: 'Academic Project',
      category: 'Mobile App Development',
      year: '2025',
      team: '2 Members',
      role: 'Lead Developer',
      responsibilities: 'Led the game\u2019s full development cycle: built all screens (title, gameplay, settings, game over), implemented jumping physics and platform collision, designed the UI, handled testing and debugging, and collaborated with my partner on game design decisions and improvements.'
    }
  }
];

// Thesis/Capstone projects
export const thesisCapstoneProjects = [
  {
    slug: 'blockchain-voting-system',
    title: 'Blockchain-Enabled Voting System for Barangay and Sangguniang Kabataan Elections',
    description: 'A blockchain-based voting system designed to provide secure, transparent, and tamper-proof elections for Barangay and Sangguniang Kabataan communities.',
    imgSrc: '/Blockchain%20Voting%20System/CapstoneProject.png',
    category: 'Web App Development',
    tech: 'React.js / Python Flask / Hyperledger',
    techTags: ['Hyperledger', 'React.js', 'HTML', 'Bootstrap', 'Python Flask', 'MySQL', 'Docker', 'Node.js', 'AS608 Fingerprint Sensor', 'Wemos Lolin32'],
    video: '/Blockchain%20Voting%20System/CapstoneVideo.mp4',
    about: 'This capstone project addresses the challenges of traditional manual voting systems in local Philippine elections by developing a blockchain-enabled voting platform. The system leverages Hyperledger blockchain technology to ensure vote immutability and transparency, while integrating biometric verification (fingerprint and facial recognition) to authenticate voter identity and prevent fraud. The project was developed by a two-member team as part of the BSIT curriculum.',
    details: {
      projectType: 'Capstone Project',
      category: 'Web App Development',
      year: '2026',
      team: '2 Members',
      role: 'Lead Developer & Hardware Integration Specialist',
      responsibilities: 'Full-stack development covering blockchain integration, biometric verification system, kiosk interface, and smart contract implementation.'
    },
    flowSteps: [
      {
        title: 'Activate Kiosk Page',
        description: 'The voting session begins by entering a code on the Activate Kiosk Page to initialize and activate the voting kiosk station.'
      },
      {
        title: 'Voter Match Page',
        description: 'The system verifies whether the voter is registered by matching their entered information against the registered voter database. Only qualified voters can proceed.'
      },
      {
        title: 'Biometric Verification',
        description: 'The voter must verify their identity through fingerprint scanning and facial recognition before being allowed to cast their vote.'
      },
      {
        title: 'Smart Contract Verification',
        description: 'The system checks the voter\'s qualifications via smart contract to determine which ballot type they should receive: Dual, SK Only, or Barangay Only.'
      },
      {
        title: 'Ballot Page',
        description: 'The voter selects their preferred candidates from the ballot interface.'
      },
      {
        title: 'Review Page',
        description: 'The voter reviews their selections to ensure accuracy before final submission.'
      },
      {
        title: 'Success Page',
        description: 'After submitting, the system displays the Receipt Hash, Ballot Hash, and Blockchain Transaction ID as traceable records.'
      }
    ]
  }
];
export const ojtInternshipProjects = [
  {
    slug: 'ojt-internship-experience',
    title: 'OJT/Internship at ITGENO Technologies Inc.',
    company: 'ITGENO Technologies Inc.',
    address: '152 DPHP 11th Ave. Brgy 100, Caloocan City, Philippines 1401',
    description: 'On-the-job training internship covering web development, UI/UX design, hardware installation, and real-world software projects.',
    imgSrc: '/OJT%20Internship/General/ITGENO.png',
    category: 'Web App Development',
    tech: 'HTML / CSS / JavaScript / PHP / Figma',
    techTags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Figma', 'CCTV Installation'],
    about: 'During my OJT at ITGENO Technologies Inc., I was involved in a variety of tasks and projects that gave me hands-on experience in real-world software development, hardware installation, and team collaboration. The internship covered individual and team-based web projects, UI/UX design, data encoding, inventory management, and CCTV wiring and installation assistance. These activities were spread throughout the entire internship period and gave me a well-rounded understanding of how a technology company operates.',
    details: {
      projectType: 'OJT/Internship',
      category: 'Web App Development',
      year: '2025',
      team: 'Team Project + Individual Tasks',
      role: 'Front-End Developer & UI/UX Designer',
      responsibilities: 'Front-end development, UI/UX design and layout planning, data encoding, inventory, CCTV installation assistance, website hosting, QA testing.'
    },
    projects: [
      {
        name: 'Gadgetz',
        type: 'Individual Website',
        description: 'An individual technology-focused website providing information about specific gadgets, including specifications, market pricing, advantages, disadvantages, and user reviews. Inspired by GSMArena.',
        image: '/OJT%20Internship/Personal_Website/GadgetzHomeScreen.png',
        techTags: ['React.js', 'CSS', 'Python Flask', 'MySQL', 'ChatGPT (AI-Assisted Development)', 'Figma'],
        contributions: [
          'Designed and developed the full website independently',
          'Researched and organized gadget specifications and pricing data',
          'Created comparison and review sections for each gadget'
        ]
      },
      {
        name: 'SHOP.CO',
        type: 'Team E-Commerce Website',
        description: 'A team-based e-commerce platform similar to Shopee or Lazada. The project spanned most of the internship period and covered the full development lifecycle from planning to QA testing.',
        image: '/OJT%20Internship/Ecommerce_Project/SHOP.CO.png',
        techTags: ['Python Flask', 'CSS', 'MySQL', 'ChatGPT (AI-Assisted Development)', 'GitHub Copilot (AI-Assisted Development)', 'Figma'],
        contributions: [
          'Led front-end development and UI implementation',
          'Contributed to back-end tasks when needed',
          'Collaborated with the team on planning, design, and feature implementation'
        ]
      }
    ],
    activities: [
      {
        title: 'Inventory',
        description: 'Checked and gathered different items around the workplace, listed them down, and submitted the complete inventory list.',
        icon: 'inventory'
      },
      {
        title: 'Data Encoding',
        description: 'Encoded sample person data to test the referral feature of a website created for one of the company\'s clients.',
        icon: 'data-encoding'
      },
      {
        title: 'Individual Website',
        description: 'Created Gadgetz, a technology-focused website providing gadget specifications, pricing, and reviews.',
        icon: 'individual-website'
      },
      {
        title: 'Team E-Commerce',
        description: 'Contributed to SHOP.CO, a team-based e-commerce platform covering the full development lifecycle.',
        icon: 'team-ecommerce'
      },
      {
        title: 'CCTV Wiring & Installation',
        description: 'Assisted staff with CCTV camera installation including wiring preparation, setup, and on-site installation.',
        icon: 'cctv'
      },
      {
        title: 'UI/UX Design & Layout',
        description: 'Created interface layouts and UI/UX designs in Figma that were used by the team during development.',
        icon: 'uiux'
      },
      {
        title: 'Website Hosting',
        description: 'Attempted to host individual websites online. Hosting was delayed due to domain configuration issues.',
        icon: 'hosting'
      },
      {
        title: 'Personal & Simulation Tests',
        description: 'Completed personal and simulation tests, along with a financial planning session led by the instructor.',
        icon: 'testing'
      }
    ],
    photos: [
      { src: '/OJT%20Internship/Personal_Website/GadgetzHomeScreen.png', caption: 'Personal Website \u2014 Gadgetz' },
      { src: '/OJT%20Internship/CCTV_Installation/wiring.png', caption: 'CCTV Wiring Setup' },
      { src: '/OJT%20Internship/CCTV_Installation/cctv.png', caption: 'CCTV Installation' },
      { src: '/OJT%20Internship/Data_Encoding/DataEncoding.png', caption: 'Data Encoding' },
      { src: '/OJT%20Internship/UI-UX_Design/UI_Figma.png', caption: 'UI/UX Design using Figma' },
      { src: '/OJT%20Internship/Ecommerce_Project/implementation.png', caption: 'Implementation of UI Design' },
      { src: '/OJT%20Internship/Ecommerce_Project/Functionality_Implementation.png', caption: 'Functionality Implementation' },
      { src: '/OJT%20Internship/Ecommerce_Project/QA.png', caption: 'QA Testing' },
      { src: '/OJT%20Internship/UI-UX_Design/UI_Pages.png', caption: 'Figma UI Designs' },
      { src: '/OJT%20Internship/General/memories.png', caption: 'Team Internship Memory' }
    ],
    certificate: {
      src: '/OJT%20Internship/General/CertificateOfCompletion.png',
      title: 'Certificate of Completion'
    },
    companyLogo: '/OJT%20Internship/General/ITGENO.png'
  }
];
export const personalProjects = [];

// Category boxes: Academic Projects, Thesis/Capstone, OJT/Internship
function Portfolio() {
  const categories = [
    {
      title: 'Academic Projects',
      description: 'School activities, mini-projects, and coding exercises.',
      icon: <FaLaptopCode className="category-icon" />,
      path: '/portfolio/academic-projects',
      bgImage: '/academicboxpic.png'
    },
    {
      title: 'Thesis/Capstone',
      description: 'My thesis and capstone project work.',
      icon: <FaGraduationCap className="category-icon" />,
      path: '/portfolio/thesis-capstone',
      bgImage: '/capstoneboxpic.png'
    },
    {
      title: 'OJT/Internship',
      description: 'Projects and tasks from my on-the-job training.',
      icon: <FaBriefcase className="category-icon" />,
      path: '/portfolio/ojt-internship',
      bgImage: '/internshipboxpic.png'
    },
    {
      title: 'Personal Projects',
      description: 'Self-initiated projects built outside of school or work.',
      icon: <FaLightbulb className="category-icon" />,
      path: '/portfolio/personal-projects',
      bgImage: '/personalboxpic.png'
    }
  ];

  return (
    <div className="portfolio" id="my-works">
      <h1 className='portfolio-title'>MY WORKS</h1>
      <div className="category-boxes">
        {categories.map((category, index) => (
          <Link to={category.path} className={`category-box${category.bgImage ? ' has-bg' : ''}`} key={index} style={category.bgImage ? { backgroundImage: `url(${category.bgImage})` } : undefined}>
            {category.bgImage && <div className='category-box-overlay'></div>}
            <div className='category-box-content'>
              {category.icon}
              <h3 className='title-boxed'>{category.title}</h3>
              <p className='box-description'>{category.description}</p>
              <span className='category-view-btn'>View Projects <FaArrowRight /></span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <MyServices />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;