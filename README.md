# Job Application Project

Hey {REPLACE_ME} 😊

thank you for your application for the position as a frontend developer at .
The frontend team builds modern, performant and accessible websites and web applications with the JavaScript library [React](https://reactjs.org/).

**We want you to implement a small project. This task should take approx. two hours: Create a web application, which informs about past SpaceX launches.**

> This project will use the open [SpaceX-API v4](https://github.com/r-spacex/SpaceX-API/blob/master/README.md). All used endpoints are `GET` requests without authentication.

- The desktop layout of the application is based on the wireframes in the `/wireframes` folder. (Hint: The whole application is centered on the screen.)
  - _Implement your own design based on the layout defined in the wireframes._
  - _Find also a proper responsive behaviour for the mobile layout by yourself._
- On the initial start of the application the latest three SpaceX launches are shown in a sorted order.
    - _[See endpoint documentation](https://github.com/r-spacex/SpaceX-API/blob/master/docs/launches/v4/past.md) (For the record: In our case, it's sufficient to use this endpoint here instead of creating a limiting query, even if this means you retrieve much more data than you need.)_
  - ![Wireframe for initial started application](./wireframes/wireframe-initial.png "Wireframe for initial started application")
- There is a search form (consists of text input and submit button) for requesting a launch by its ID.
  - _[See endpoint documentation](https://github.com/r-spacex/SpaceX-API/blob/master/docs/launches/v4/one.md)_
  - _The page doesn't reload when submitting the form._
- A valid request for a launch ID results in a detailed view of this launch.
  - The elapsed time since the launch is a live counter in the format hh:mm:ss.
  - ![Wireframe for valid requested launch ID](./wireframes/wireframe-detail-success.png "Wireframe for valid requested launch ID")
- An invalid request for a launch ID results in a simple error message on the screen.
  - ![Wireframe for invalid requested launch ID](./wireframes/wireframe-detail-error.png "Wireframe for invalid requested launch ID")


Happy Coding and Keep Turning Bits Into Smiles 🙌

---

### Table of contents

- [Project](job-application-project)
- [Getting started](#getting-started-🚀)
- [Developing](#developing-💻)
- [Finishing](#finishing-🏁)

### Getting started 🚀

This project is bootstrapped with [Create React App](https://create-react-app.dev/)

Make sure to install the project dependencies with `npm install`.

Start the project application with `npm start` and visit [http://localhost:3000](http://localhost:3000) in your browser.
