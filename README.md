## AC Miles

Achievement visualizer for the game [Animal Crossing: New Horizons](https://www.animal-crossing.com/new-horizons).

Includes all achievements in the latest game update (version`1.2.0a`).

A process outlining the steps I took to take this project from an idea phase to its final form can be [read here](https://codepen.io/MarioD/post/animal-crossing-the-web).

<img src="https://acmiles.com/site-thumb-1200x600.jpg" width="600">

<br>

## Fun facts about the site

- All the stamp dates are dynamic and are generated to reflect how they would be achieved in the game to a certain degree of realism (northern hemisphere).
- The Nook Miles counter in the top right corner shows the total miles received once all achievements have been obtained.
- The 'New!' tab appears on achievements that have been introduced in the latest game update.

<br>

## Assets

The assets are all based on the original assets found in [Animal Crossing: New Horizons](https://www.animal-crossing.com/new-horizons/). I did not design these assets. However, I did spend many days recreating these assets from scratch. You can use these assets on your own website, but I ask that you please provide a link back to [AC Miles](https://acmiles.com) to acknowledge my efforts.

<br>

## Data

The initial data for the achievements came from [this wonderful Google Sheets data spreadsheet](https://docs.google.com/spreadsheets/d/13d_LAJPlxMa_DubPTuirkIV4DERBMXbrWQsmSh8ReK4) that is maintained by the amazing Animal Crossing: New Horizons community.

When converting the data from the spreadsheet to JSON be careful of the following:

- Sometimes 0 values will be converted to string. Look through the converted data to ensure "0" values are not present.

<br>

## Running the project locally

This project was created using [React Create App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) with two additional plugins.

1. [Flickity](https://flickity.metafizzy.co/) - for the carousel functionality
2. [Simplebar](https://github.com/Grsmto/simplebar) - for styling the custom scrollbar

It uses [ESLint](https://eslint.org/) to keep the code uniform across all contributors following the [AirBnB Javascript style guide](https://github.com/airbnb/javascript) with a few minor rule changes.

#### To start the project locally:

- Clone the project
- `npm install`
- `npm run start`

#### To build the project:

- `npm run build`