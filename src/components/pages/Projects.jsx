import React from "react";
import AProject from "../AProject";
import "./Projects.css";

const Projects = (props) => {
  // JSON variable that contains data for all of my projects and their details
  const myProjects = {
    foodmood: {
      title: "Food Mood v2",
      hasGitHub: "true",
      githubLink: "https://github.com/samuel-ping/food-mood",
      hasWebsite: "true",
      websiteLink: "https://foodmood.samuelping.me",
      description:
        "A web app that uses Amazon's Rekognition API and Yelp's Fusion API to suggest a restaurant based off of your visible emotion! The website is deployed on an AWS EC2 instance, using Nginx as a reverse proxy.",
      description2:
        "The original Food Mood (https://oldmyfoodmood.herokuapp.com) was my first ever website, and I built it as an entry to Capital One's Software Engineering Summit challenge. I originally was going to use solely HTML, CSS, and JavaScript, but quickly learned that hiding any API keys was a no go this way. I learned about Node.js and Express.js and decided to hail mary it and learn how to create a backend. This is one of my greatest accomplishments, because I decided to pursue this project at the last minute and had less than two days to complete it. After the competition ended, I decided to continue working on this project, and revamped the whole website with React and deployed it on AWS EC2 to avoid the slow loading times of Heroku.",
      technologies:
        "React.js, Express.js, Node.js, Nginx, AWS EC2, CodePipeline & CodeDeploy",
    },
    wildwalk: {
      title: "Wild Walk",
      hasGitHub: "true",
      githubLink: "https://github.com/samuel-ping/wildwalk",
      hasWebsite: "true",
      websiteLink: "http://100.26.167.92/",
      description:
        "A web app built for mobile devices, where you can check native species of plants and animals in your state, and upload pictures of them to your collection. You can view your collection to see the past species that you collected.",
      description2:
        "I built this as an entry to BackyardHacks 2020 and is not a finished product. It was my first time using a database in an application and while it worked locally, the deployed version does not work. I did learned how to use Postman, which I used to test the endpoint for the NatureServe rest API.",
      technologies: "React.js, Express.js, MongoDB Atlas",
    },

    personalwebsite: {
      title: "Personal Website v2",
      hasGitHub: "true",
      githubLink: "https://github.com/samuel-ping/personal-website",
      hasWebsite: "true",
      websiteLink: "https://samuelping.me",
      description:
        "My personal website! I didn't like my first one, so I remade it.",
      description2:
        "The original version of my personal website (https://samuel-ping.github.io/personal-website-v1) was also my first time using React. I built it after Food Mood, so I had a basic understanding of web development and wanted to transfer that knowledge to React. While my first website was a bit of a mess, I do think my skills are now much more polished. While I'm not the best at it, at least I know I'm capable of cranking out a website now!",
      technologies: "React.js",
    },
    rutgersbusfinder: {
      title: "Rutgers Bus Finder",
      hasGitHub: "true",
      githubLink: "https://github.com/samuel-ping/rutgers-bus-finder",
      description:
        "This project was built during HackRU Fall 2019. It takes in any two bus stops at Rutgers, and spits out all the buses that are currently running between those two stops.",
      description2:
        "This was my and my group's first time using an API! I helped work on the algorithm which parsed the list of buses and bus routes retrieved from the Rutgers bus API for the currently running buses.",
      technologies: "Java",
    },
  };

  if (props.isMobile) {
    return (
      <div className="projects-wrapper-mobile">
        <div className="projects-header-mobile">Projects</div>
        <hr className="divider" />
        <div className="projects-list-container-mobile">
          <AProject
            isMobile={props.isMobile}
            title={myProjects.foodmood.title}
            hasGitHub={myProjects.foodmood.hasGitHub}
            githubLink={myProjects.foodmood.githubLink}
            hasWebsite={myProjects.foodmood.hasWebsite}
            websiteLink={myProjects.foodmood.websiteLink}
            description={myProjects.foodmood.description}
            description2={myProjects.foodmood.description2}
            technologies={myProjects.foodmood.technologies}
          />
          <AProject
            isMobile={props.isMobile}
            title={myProjects.wildwalk.title}
            hasGitHub={myProjects.wildwalk.hasGitHub}
            githubLink={myProjects.wildwalk.githubLink}
            hasWebsite={myProjects.wildwalk.hasWebsite}
            websiteLink={myProjects.wildwalk.websiteLink}
            description={myProjects.wildwalk.description}
            description2={myProjects.wildwalk.description2}
            technologies={myProjects.wildwalk.technologies}
          />
          <AProject
            isMobile={props.isMobile}
            title={myProjects.personalwebsite.title}
            hasGitHub={myProjects.personalwebsite.hasGitHub}
            githubLink={myProjects.personalwebsite.githubLink}
            hasWebsite={myProjects.personalwebsite.hasWebsite}
            websiteLink={myProjects.personalwebsite.websiteLink}
            description={myProjects.personalwebsite.description}
            description2={myProjects.personalwebsite.description2}
            technologies={myProjects.personalwebsite.technologies}
          />
          <AProject
            isMobile={props.isMobile}
            title={myProjects.rutgersbusfinder.title}
            hasGitHub={myProjects.rutgersbusfinder.hasGitHub}
            githubLink={myProjects.rutgersbusfinder.githubLink}
            hasWebsite={myProjects.rutgersbusfinder.hasWebsite}
            websiteLink={myProjects.rutgersbusfinder.websiteLink}
            description={myProjects.rutgersbusfinder.description}
            description2={myProjects.rutgersbusfinder.description2}
            technologies={myProjects.rutgersbusfinder.technologies}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="projects-wrapper">
        <div className="projects-header">Projects</div>
        <hr className="divider" />
        <div className="projects-list-container">
          <AProject
            title={myProjects.foodmood.title}
            hasGitHub={myProjects.foodmood.hasGitHub}
            githubLink={myProjects.foodmood.githubLink}
            hasWebsite={myProjects.foodmood.hasWebsite}
            websiteLink={myProjects.foodmood.websiteLink}
            description={myProjects.foodmood.description}
            description2={myProjects.foodmood.description2}
            technologies={myProjects.foodmood.technologies}
          />
          <AProject
            title={myProjects.wildwalk.title}
            hasGitHub={myProjects.wildwalk.hasGitHub}
            githubLink={myProjects.wildwalk.githubLink}
            hasWebsite={myProjects.wildwalk.hasWebsite}
            websiteLink={myProjects.wildwalk.websiteLink}
            description={myProjects.wildwalk.description}
            description2={myProjects.wildwalk.description2}
            technologies={myProjects.wildwalk.technologies}
          />
          <AProject
            title={myProjects.personalwebsite.title}
            hasGitHub={myProjects.personalwebsite.hasGitHub}
            githubLink={myProjects.personalwebsite.githubLink}
            hasWebsite={myProjects.personalwebsite.hasWebsite}
            websiteLink={myProjects.personalwebsite.websiteLink}
            description={myProjects.personalwebsite.description}
            description2={myProjects.personalwebsite.description2}
            technologies={myProjects.personalwebsite.technologies}
          />
          <AProject
            title={myProjects.rutgersbusfinder.title}
            hasGitHub={myProjects.rutgersbusfinder.hasGitHub}
            githubLink={myProjects.rutgersbusfinder.githubLink}
            hasWebsite={myProjects.rutgersbusfinder.hasWebsite}
            websiteLink={myProjects.rutgersbusfinder.websiteLink}
            description={myProjects.rutgersbusfinder.description}
            description2={myProjects.rutgersbusfinder.description2}
            technologies={myProjects.rutgersbusfinder.technologies}
          />
        </div>
      </div>
    );
  }
};

export default Projects;
