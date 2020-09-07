import React from "react";
import AProject from "components/AProject";
import "pages/Projects.css";

const Projects = (props) => {
  // JSON variable that contains data for all of my projects and their details
  // title: name of project
  // hasGitHub: whether the project has a GitHub repo
  // githubLink: link to the GitHub repo
  // hasWebsite: whether the project has a website deployed
  // websiteLink: link to the website
  // timeframe: time period for when I was working on the project
  // description: what the project does
  // description2: how the project is built
  // description3: history of the project and challenges I faced when building it
  // technologies: what I used to build the project
  const myProjects = {
    streetcred: {
      title: "Street Cred",
      hasGitHub: "true",
      githubLink: "https://github.com/samuel-ping/street-cred",
      timeframe:
        "Capital One Software Engineering Summit Hackathon (August 2020)",
      description:
        "A web application that calculates your credit score and generates feedback based on the five main categories that make up your credit score.",
      description2:
        "3rd place finalist for the Capital One Software Engineering Summit hackathon!",
      technologies: "React.js, Python, AWS API Gateway & Lambda",
    },
    reviewscraper: {
      title: "Yelp Review Scraper",
      hasGitHub: "true",
      githubLink: "https://github.com/samuel-ping/yelp-review-scraper",
      timeframe: "May 2020 - Present",
      description:
        "I created a Yelp review scraper that is intended to gather a large dataset of Yelp Reviews, as a possible extension for Food Mood.",
      technologies: "Python, Beautiful Soup 4",
    },
    foodmood: {
      title: "Food Mood v2",
      hasGitHub: "true",
      githubLink: "https://github.com/samuel-ping/food-mood",
      hasWebsite: "true",
      websiteLink: "https://foodmood.samuelping.me",
      timeframe: "March 2020 - Present",
      description:
        "A web app that takes your photo, detects your visible mood, and suggests a restaurant based off of that mood! The frontend is built with React.js, while the backend uses Express.js and Node.js. The emotions are detected from the photo using Amazon's Rekognition API, and then I search for a restaurant using Yelp's Fusion API. The website is deployed on an AWS EC2 instance, using Nginx as a reverse proxy. Updates to the application are automatically deployed with AWS CodePipeline and CodeDeploy.",
      description2:
        "The <a href='https://oldmyfoodmood.herokuapp.com' target='_blank' rel='noopener noreferrer'>original Food Mood</a> was my first ever website, and I built it as an entry to Capital One's Software Engineering Summit challenge. I originally was going to use solely HTML, CSS, and JavaScript, but I quickly learned that I had no way of hiding my API keys from the client. After much frustration, I found Node.js and Express.js and decided to hail mary it and learn how to create a backend. I'm really proud of this project, because I decided to pursue this project at the last minute and had less than two days to complete it. After the competition ended (I was accepted into the summit!), I decided to continue working on this project. I revamped the whole website with React and deployed it on an AWS EC2 Ubuntu instance to avoid the yucky slow loading times of Heroku.",
      technologies:
        "React.js, Express.js, Node.js, Nginx, AWS EC2, CodePipeline & CodeDeploy",
    },
    wildwalk: {
      title: "Wild Walk",
      hasGitHub: "true",
      githubLink: "https://github.com/samuel-ping/wildwalk",
      hasWebsite: "true",
      websiteLink: "http://100.26.167.92/",
      timeframe: "BackyardHacks 2020 (May 2020)",
      description:
        "A web app built for mobile devices, where you can check native species of plants and animals in your state, and upload pictures of them to your collection. You can view your collection to see the past species that you collected.",
      description2:
        "I built this as an entry to BackyardHacks 2020 and is not a finished product. It was my first time using a database in an application and while it worked locally, the deployed version does not work. I did learn how to use Postman, which I used to test the endpoints of the NatureServe REST API.",
      technologies: "React.js, Express.js, MongoDB Atlas",
    },

    personalwebsite: {
      title: "Personal Website v2",
      hasGitHub: "true",
      githubLink: "https://github.com/samuel-ping/personal-website",
      hasWebsite: "true",
      websiteLink: "https://samuelping.me",
      timeframe: "April 2020 - Present",
      description:
        "My personal website! I didn't like my first one, so I remade it.",
      description2:
        "The <a href='https://samuel-ping.github.io/personal-website-v1' target='_blank' rel='noopener noreferrer'>original version of my personal website</a> was also my first time using React. I built it after Food Mood v1, so I had a basic understanding of web development and wanted to transfer that knowledge to React. Frankly, my first website was a bit of a mess, but I do think I'm a bit better at web development now. While I'm not the best at it, at least I know I'm capable of cranking out a website if I need to!",
      technologies: "React.js",
    },
    rutgersbusfinder: {
      title: "Rutgers Bus Finder",
      hasGitHub: "true",
      githubLink: "https://github.com/samuel-ping/rutgers-bus-finder",
      timeframe: "HackRU Fall 2019 (October 2020)",
      description:
        "This program takes in the names of any two bus stops at Rutgers, and spits out all the buses that are currently running between those two stops.",
      description2:
        "This project was built during HackRU Fall 2019, and was me and my group's first time using an API! I helped work on the algorithm which parsed the list of buses and bus routes retrieved from the Rutgers bus API for the currently running buses. Looking back on it, the time complexity of our algorithm was like O(n^2), if not worse...",
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
            timeframe={myProjects.foodmood.timeframe}
            description={myProjects.foodmood.description}
            description2={myProjects.foodmood.description2}
            technologies={myProjects.foodmood.technologies}
          />
          <AProject
            isMobile={props.isMobile}
            title={myProjects.streetcred.title}
            hasGitHub={myProjects.streetcred.hasGitHub}
            githubLink={myProjects.streetcred.githubLink}
            timeframe={myProjects.streetcred.timeframe}
            description={myProjects.streetcred.description}
            technologies={myProjects.streetcred.technologies}
          />
          <AProject
            isMobile={props.isMobile}
            title={myProjects.reviewscraper.title}
            hasGitHub={myProjects.reviewscraper.hasGitHub}
            githubLink={myProjects.reviewscraper.githubLink}
            timeframe={myProjects.reviewscraper.timeframe}
            description={myProjects.reviewscraper.description}
            description2={myProjects.reviewscraper.description2}
            technologies={myProjects.reviewscraper.technologies}
          />
          <AProject
            isMobile={props.isMobile}
            title={myProjects.wildwalk.title}
            hasGitHub={myProjects.wildwalk.hasGitHub}
            githubLink={myProjects.wildwalk.githubLink}
            hasWebsite={myProjects.wildwalk.hasWebsite}
            websiteLink={myProjects.wildwalk.websiteLink}
            timeframe={myProjects.wildwalk.timeframe}
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
            timeframe={myProjects.personalwebsite.timeframe}
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
            timeframe={myProjects.rutgersbusfinder.timeframe}
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
            timeframe={myProjects.foodmood.timeframe}
            description={myProjects.foodmood.description}
            description2={myProjects.foodmood.description2}
            technologies={myProjects.foodmood.technologies}
          />
          <AProject
            title={myProjects.streetcred.title}
            hasGitHub={myProjects.streetcred.hasGitHub}
            githubLink={myProjects.streetcred.githubLink}
            timeframe={myProjects.streetcred.timeframe}
            description={myProjects.streetcred.description}
            technologies={myProjects.streetcred.technologies}
          />
          <AProject
            title={myProjects.reviewscraper.title}
            hasGitHub={myProjects.reviewscraper.hasGitHub}
            githubLink={myProjects.reviewscraper.githubLink}
            timeframe={myProjects.reviewscraper.timeframe}
            description={myProjects.reviewscraper.description}
            description2={myProjects.reviewscraper.description2}
            technologies={myProjects.reviewscraper.technologies}
          />
          <AProject
            title={myProjects.wildwalk.title}
            hasGitHub={myProjects.wildwalk.hasGitHub}
            githubLink={myProjects.wildwalk.githubLink}
            hasWebsite={myProjects.wildwalk.hasWebsite}
            websiteLink={myProjects.wildwalk.websiteLink}
            timeframe={myProjects.wildwalk.timeframe}
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
            timeframe={myProjects.personalwebsite.timeframe}
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
            timeframe={myProjects.rutgersbusfinder.timeframe}
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
