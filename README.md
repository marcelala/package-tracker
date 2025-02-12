# Busy Bees 2.0 - Package Tracker

[![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
[![MIT](https://camo.githubusercontent.com/3dbcfa4997505c80ef928681b291d33ecfac2dabf563eb742bb3e269a5af909c/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f496c65726961796f2f6d61726b646f776e2d6261646765733f7374796c653d666f722d7468652d6261646765)](https://professionalprograms.mit.edu/?utm_source=google&utm_medium=cpc&utm_campaign=MIT_BRAND_PROTECTION&utm_medium=ppc&utm_term=massachusetts%20institute%20of%20technology%20mit&utm_campaign=MIT_BRAND_PROTECTION&utm_source=adwords&hsa_mt=e&hsa_src=g&hsa_tgt=kwd-325879874370&hsa_acc=2660252290&hsa_ad=406000382319&hsa_cam=8546883354&hsa_kw=massachusetts%20institute%20of%20technology%20mit&hsa_net=adwords&hsa_ver=3&hsa_grp=85551586934&gclid=CjwKCAjwr56IBhAvEiwA1fuqGvMJK9N0hVJ40ns4Qil_4byBgG-0AKpD5gEImBRlcJ1cmbHUsDzoohoCMK4QAvD_BwE)

## Overview

Welcome to Busy Bees 2.0, an assignment from Novare Potencial Academy. The goal of this project was to fetch data from a
RESTful API and display the user's packages on a simple web application. Additionally, a map displays the pick-up
location and its coordinates for each package. This application supports english and swedish languages.
Click [here](https://busy-bees-tracking.web.app/)
to visit.

<br/>

## Table of Contents

<br/>

- [Overview](#overview)
- [Specification](#specification)
- [Project Organisation](#project-organisation)
- [How to run the project](#how-to-run-the-project)
- [Dependencies](#dependencies-&-tools-used)
- [Attributions](#attributions-&-helpful-links)
  <br/>

<br/>

## Specification

<br/>

The goal of this project was to build a multiple page application for a Vegan Restaurant as an assignment from Novare
Potential Academy.
<br/>

## Project Organisation

<br/>

### Requirement gathering

<br/>

[Assignment](https://docs.google.com/document/d/1u1OE_DjhYwKrULZW7N4PXOFDELVyTiu9caupUZfVc34/edit?usp=sharing)

<br/>

### Project analysis

<br/>

[Google Spreadsheets link](https://docs.google.com/spreadsheets/d/1GK9bxZXX2TxtLVIdm4M9MF5fafqBIA3JiXMFXAztSyI/edit?usp=sharing)

<br/>

### Component tree

<br/>

The component tree allows the visualization of the different parts of the application.
<br/>

[View on Whimsical](https://whimsical.com/package-tracker-EbTKhEaZMLHGAAk9eCeGaD)
<br/>

### Design mockup

<br/>

[Figma mockup](https://www.figma.com/file/CUrkTTSzargAYudIgApGmL/BusyBees?node-id=1%3A7)

<br/>

## How to run the project

<br/>

To run the project in the **development mode**, follow the instructions below:

Download or clone the repository in your computer:

```
$ git clone https://github.com/marcelala/package-tracker.git
```

In the repository folder:

- install project dependencies with

```
npm install
```

- start the development server with

```
npm start
```

- open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To run the project in the **production mode**, use this command intstead:

```
npm run build
```

<br/>

<br/>

## Dependencies & Tools Used

<br/>

- As a project generated with `create-react-app`, it includes React and ReactDOM as dependencies. It also includes a set
  of scripts used by Create React App as a development dependency.
- [Webpack](https://webpack.js.org/) for handling all assets, as Webpack offers a custom way of “extending” the concept
  of `import` beyond JavaScript.
- [React Router Dom](https://www.npmjs.com/package/react-router-dom) for routing Navigation.
- [Node-SASS](https://github.com/sass/) Sassy CSS for styling
- [Firebase](https://firebase.google.com/) for hosting the application.
- [Mapbox](https://www.mapbox.com/maps/) for maps.
- [Moment.js](https://momentjs.com/) for formatting dates and times.
- [i18next](https://www.i18next.com/) for internationalization.
- [Worker-loader](https://www.npmjs.com/package/worker-loader) enables the transpilation of mapbox in react
  applications.

<br/>

## DevDependencies

<br/>

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

<br/>

## Attributions & Helpful Links

<br/>

- This project was developed by Marcela Felix Fortis mentored by [Eduardo Alvarez](https://github.com/elalienx) with
  support from [Novare Potential](https://www.novarepotential.com/).
- Fonts are by from Google Fonts.
- Icons by FontAwesome [(Creative Commons Attribution 4.0 International license)](https://fontawesome.com/license).
- Images from Unsplash.
- Vectors by [PNGWING](https://www.pngwing.com/en/free-png-zbytj).
- The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). For more
  information on how to perform common tasks,
  visit [this page](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)
  .
