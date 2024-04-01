# TV Shows Catalog React Challenge

## Instructions

In this challenge, you will find and fix bugs in a small React app that displays a list of TV shows and their episodes. You will additionally transition the codebase to use Typescript for enhanced type-safety and make future development easier.

## Completion Time
The exercise should take 30-45 minutes to complete.

## Prerequisites
* Node.JS version 16
* [yarn](https://yarnpkg.com/) package manager

## Setup

* Clone this repository and `cd` into it.
* Run `yarn install` to install your dependencies.
* Run `yarn start` and the project will be running on localhost:3000.

## Conversion to Typescript

To convert the codebase, simply change the extension on all `.js` files to `.tsx` (NOTE: DO NOT change the extension on `registerServiceWorker.js`). Typescript and related dependencies should already be installed.

You should define prop types for all components in the `Components/` folder (except `App`). Additionally, you should define types for all external data that is fetched by the app (you may omit fields that are not used).

_**NOTE:** You may find it easier to eliminate all bugs and complete the deliverables before converting the codebase to Typescript._

## Deliverables

1. A user should be able to click on a show and have the details show up on the left.
2. A user should be able to search for a show.
3. A user should be able to filter the list of shows by their rating.
4. A user should be able to display seasons and episodes when a show is selected.

> Based on [learn-co-curriculum/Binge-Finder-Debugging-Lab](https://github.com/learn-co-curriculum/Binge-Finder-Debugging-Lab/tree/master)