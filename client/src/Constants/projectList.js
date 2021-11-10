// import eCarryParent from "../Images/eCarry/eCarryParent.PNG";
// import eCarryPr1 from "../Images/eCarry/eCarryPr1.PNG";
// import eCarryPr2 from "../Images/eCarry/eCarryPr2.PNG";
// import eCarryPr3 from "../Images/eCarry/eCarryPr3.PNG";
import todo from "../Images/To-do/todoParent.PNG";
import todoPr1 from "../Images/To-do/todoPr1.PNG";
import todoPr2 from "../Images/To-do/todoPr2.PNG";
import todoPr3 from "../Images/To-do/todoPr3.PNG";
import egyWorst from "../Images/egyworst/ewParent.PNG";
import egyWorstPr1 from "../Images/egyworst/ewPr1.PNG";
import egyWorstPr2 from "../Images/egyworst/ewPr2.PNG";
import egyWorstPr3 from "../Images/egyworst/ewPr3.PNG";
import egyWorstPr4 from "../Images/egyworst/ewPr4.PNG";
import egyWorstPr5 from "../Images/egyworst/ewPr5.PNG";
import blogR from "../Images/BlogR/blogrParent.PNG";
import blogRPr1 from "../Images/BlogR/blogrPr1.PNG";
import blogRPr2 from "../Images/BlogR/blogrPr2.PNG";
import blogRPr3 from "../Images/BlogR/blogrPr3.PNG";
import rnParent from "../Images/RN-Shopping/rnParent.png";
// import rnPr1 from "../Images/RN-Shopping/rnPr1.png";
import rnPr2 from "../Images/RN-Shopping/rnPr2.png";
import rnPr3 from "../Images/RN-Shopping/rnPr3.png";
import rnPr4 from "../Images/RN-Shopping/rnPr4.png";
import rnPr5 from "../Images/RN-Shopping/rnPr5.png";
import rnPr6 from "../Images/RN-Shopping/rnPr6.png";
import mbnParent from "../Images/MyBestNanny/mbnParent.PNG";
import mbnPr1 from "../Images/MyBestNanny/mbnPr1.PNG";
import mbnPr2 from "../Images/MyBestNanny/mbnPr2.PNG";
import mbnPr3 from "../Images/MyBestNanny/mbnPr3.PNG";
import mbnPr4 from "../Images/MyBestNanny/mbnPr4.PNG";
import mbnPr5 from "../Images/MyBestNanny/mbnPr5.PNG";
import mbnPr6 from "../Images/MyBestNanny/mbnPr6.PNG";
import mbnPr7 from "../Images/MyBestNanny/mbnPr7.PNG";

class Projects {
  constructor(
    id,
    title,
    smallDescription,
    imgUrl,
    preview,
    description,
    techs,
    githubLink,
    website
  ) {
    this.id = id;
    this.title = title;
    this.smallDescription = smallDescription;
    this.imgUrl = imgUrl;
    this.preview = preview;
    this.description = description;
    this.techs = techs;
    this.githubLink = githubLink;
    this.website = website;
  }
}

const projectList = [
  // new Projects(
  //   1,
  //   "eCarry",
  //   "A simple shopping cart website",
  //   eCarryParent,
  //   [eCarryParent, eCarryPr1, eCarryPr2, eCarryPr3],
  //   "A shopping cart website made mainly with Document Object Model and JavaScript, a core feature to any eCommerce website that allows it's users to add or remove products they want to proceed to purchase",
  //   ["HTML", "CSS", "JavaScript", "DOM", "Bootstrap"],
  //   "https://github.com/hamada1008/ShoppingCart",
  //   ""
  // ),
  new Projects(
    2,
    "EgyWorst",
    "A movie app",
    egyWorst,
    [egyWorst, egyWorstPr1, egyWorstPr2, egyWorstPr3, egyWorstPr4, egyWorstPr5],
    "A movie app created with the help of the React framework, using the potential of react hooks , router, state and functional components. This application allows it's users to explore a list of movies, filter them by title/rating/genre , to explore the movies details and trailer in different routes , or even to add their favourite movie to the list.",
    ["JavaScript", "React"],
    "https://github.com/hamada1008/Movie-App-EgyWorst",
    "https://wn2kj.csb.app/"
  ),
  new Projects(
    3,
    "To-Not-Do List",
    "Your typical To-do list",
    todo,
    [todo, todoPr1, todoPr2, todoPr3],
    "A to-do list created with React, and the state management tool Redux, it allows you to keep track and organize(add, remove, check,filter) the tasks you need to do.",
    ["JavaScript", "React", "Redux"],
    "https://github.com/hamada1008/React-Redux-To-do-App",
    "https://pi59o.csb.app/"
  ),

  new Projects(
    4,
    "BlogR",
    "A Blog Web application",
    blogR,
    [blogR, blogRPr1, blogRPr2, blogRPr3],
    "A back-end web application that has the core feature of a blogging website, a place where you can create new blogs and another place where you can view all the blogs, made possible with Node Js and essentially with Express Js and the template engine EJS.",
    ["JavaScript", "Node Js", "Express", "EJS"],
    "https://github.com/hamada1008/Blog-Website",
    "https://ejs-blogr.herokuapp.com/"
  ),
  new Projects(
    5,
    "Native Shopping",
    "A shopping application for mobile devices",
    rnParent,
    [rnParent, rnPr2, rnPr3, rnPr4, rnPr5, rnPr6],
    "A mobile shopping application designed with React Native (Expo CLI), a small eCommerce application for mobile user that allows you to add items to a shopping cart, order those products, view each product detail, even add and/or delete products for each user.",
    [
      "JavaScript",
      "React Native",
      "React Navigation",
      "Expo",
      "Redux",
      "Redux Toolkit",
    ],
    "https://github.com/hamada1008/React-Native-Shopping-App",
    ""
  ),
  new Projects(
    6,
    "My Best Nanny",
    "A babysitting app made for Parents who want to hire nannies for their children, and for babysitters who seek job opportunities",
    mbnParent,
    [mbnParent, mbnPr1, mbnPr2, mbnPr3, mbnPr4, mbnPr5, mbnPr6, mbnPr7],
    `A web application designed for busy parents to easily hire nearby 
    nannies that could take care of their children, and for babisitter who want to find more and better job opportunities.
    Parent can search for nannies following their preferences, view nearby nannies in their area, view their profile & 
    eventually hire them to take care of their children in an exact date, they can also view their orders made & change their informations to make searching easier. This is a MERN application,
     based on many technologies with the most important one among them is Google maps Api ,Geolocation & reverse-Geolocation Api, 
     that made the search operation more precise. `,
    [
      "JavaScript",
      "React",
      "Material UI",
      "Redux",
      "Redux Toolkit",
      "Redux thunk",
      "Node Js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Passport Js",
    ],
    "https://github.com/hamada1008/MERN-App-My-Best-Nanny",
    "https://mybestnannys.herokuapp.com/"
  ),
];

export default projectList.reverse();
