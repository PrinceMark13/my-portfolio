import React from 'react';
import {
  SiReact, SiJavascript, SiHtml5, SiCss3, SiPython,
  SiMysql, SiNodedotjs, SiDocker, SiGit, SiFigma,
  SiPhp, SiBootstrap, SiVisualstudio, SiCisco, SiCplusplus,
  SiAdobephotoshop, SiMicrosoft,
  SiArduino, SiOpenai, SiCsharp, SiAutocad, SiKrita,
  SiVisualstudiocode
} from 'react-icons/si';
import {
  FaServer, FaNetworkWired, FaMicrochip, FaCalculator, FaCog,
  FaTools, FaEthernet, FaWindows
} from 'react-icons/fa';

const iconMap = {
  'react':               SiReact,
  'reactjs':             SiReact,
  'react.js':            SiReact,
  'javascript':          SiJavascript,
  'js':                  SiJavascript,
  'html':                SiHtml5,
  'html5':               SiHtml5,
  'css':                 SiCss3,
  'css3':                SiCss3,
  'python':              SiPython,
  'python flask':        SiPython,
  'flask':               SiPython,
  'mysql':               SiMysql,
  'node.js':             SiNodedotjs,
  'nodejs':              SiNodedotjs,
  'docker':              SiDocker,
  'git':                 SiGit,
  'github':              SiGit,
  'figma':               SiFigma,
  'php':                 SiPhp,
  'bootstrap':           SiBootstrap,
  'bootstrap icons':     SiBootstrap,
  'visual studio':       SiVisualstudio,
  'visual studio code':  SiVisualstudiocode,
  'microsoft visual studio express 2012': SiVisualstudio,
  'cisco':               SiCisco,
  'c++':                 SiCplusplus,
  'c#':                  SiCsharp,
  'photoshop':           SiAdobephotoshop,
  'adobe photoshop':     SiAdobephotoshop,
  'autocad':             SiAutocad,
  'krita':               SiKrita,
  'matlab':              FaCalculator,
  'matlab onramp':       FaCalculator,
  'capcut':              FaCog,
  'microsoft office':    SiMicrosoft,
  'arduino':             SiArduino,
  'openai':              SiOpenai,
  'chatgpt':             SiOpenai,
  'chatgpt (ai-assisted development)': SiOpenai,
  'github copilot (ai-assisted development)': SiGit,
  'hyperledger':         FaNetworkWired,
  'web speech api':      FaServer,
  'block-based programming': FaCog,
  'mit app inventor':    FaMicrochip,
  'windows forms':       FaServer,
  'basic troubleshooting': FaTools,
  'rj45 installation':   FaEthernet,
  'windows os installation': FaWindows,
};

const fallbackColors = {
  'react':               '#61DAFB',
  'reactjs':             '#61DAFB',
  'javascript':          '#F7DF1E',
  'html':                '#E34F26',
  'css':                 '#1572B6',
  'python':              '#3776AB',
  'mysql':               '#4479A1',
  'node.js':             '#339933',
  'docker':              '#2496ED',
  'git':                 '#F05032',
  'figma':               '#F24E1E',
  'php':                 '#777BB4',
  'bootstrap':           '#7952B3',
  'c++':                 '#00599C',
  'c#':                  '#68217A',
  'photoshop':           '#31A8FF',
  'adobe photoshop':     '#31A8FF',
  'autocad':             '#0696D7',
  'krita':               '#3BABFF',
  'visual studio code':  '#007ACC',
  'visual studio':       '#5C2D91',
  'matlab':              '#FF6C37',
  'capcut':              '#000000',
  'hyperledger':         '#2C9B5D',
  'chatgpt':             '#10A37F',
  'openai':              '#10A37F',
  'arduino':             '#00979D',
  'basic troubleshooting': '#FF6C37',
  'rj45 installation':   '#00979D',
  'windows os installation': '#0078D4',
};

function getColorForLabel(label) {
  const key = label.toLowerCase().trim();
  if (fallbackColors[key]) return fallbackColors[key];
  const base = key.split(' ')[0];
  return fallbackColors[base] || '#4CAF50';
}

const customImages = {
  'matlab':      'https://cdn.worldvectorlogo.com/logos/matlab.svg',
  'matlab onramp': 'https://cdn.worldvectorlogo.com/logos/matlab.svg',
  'capcut':      'https://cdn.worldvectorlogo.com/logos/capcut-3.svg',
};

function TechIcon({ label }) {
  const key = label.toLowerCase().trim();
  const color = getColorForLabel(key);
  const customImg = customImages[key];

  return (
    <span className="tech-icon-wrapper" tabIndex={0}>
      {customImg ? (
        <span className="tech-icon-circle tech-icon-circle-custom">
          <img src={customImg} alt={`${label} logo`} className="tech-icon-custom-img" />
        </span>
      ) : (
        <span className="tech-icon-circle" style={{ backgroundColor: color }}>
          {(() => {
            const IconComponent = iconMap[key] || iconMap[key.split(' ')[0]] || FaCog;
            return <IconComponent className="tech-icon-svg" />;
          })()}
        </span>
      )}
      <span className="tech-icon-tooltip">{label}</span>
    </span>
  );
}

export default TechIcon;
