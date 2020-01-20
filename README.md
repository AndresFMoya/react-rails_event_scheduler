<p>
  <h1 align="center">Rails API, React & Redux - Event Scheduler</h1>
</p>
<br>
<p align="center">
  <a href="https://www.ruby-lang.org/en/">
    <img src="https://img.shields.io/badge/Ruby-v2.6.4-brightgreen.svg" alt="ruby version">
  </a>
  <a href="http://rubyonrails.org/">
    <img src="https://img.shields.io/badge/Rails-v6.0.2.1-brightgreen.svg" alt="rails version">
  </a>
</p>

This project consist of building a mobile web app for an Events Scheduler using Rails API as backend, and ReactJS as frontend. This is the Final Project for the Microverse Technical Curriculum 

### Live Verion
[Events Scheduler Web App](https://floating-inlet-93283.herokuapp.com)

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

## Getting Started

This section provides a high-level quick start guide. If you're looking for the
installation guide, you'll want to refer to
our complete Developer Documentation.

We run on a [Rails](https://rubyonrails.org/) backend, and we are running a [React](https://reactjs.org/) frontend.

A more complete overview of our stack is available in
our docs.

### Prerequisites

- [Ruby](https://www.ruby-lang.org/en/): we recommend using
  [rbenv](https://github.com/rbenv/rbenv) to install the Ruby version listed on
  the badge.
- [Yarn](https://yarnpkg.com/): please refer to their
  [installation guide](https://yarnpkg.com/en/docs/install).
- [PostgreSQL](https://www.postgresql.org/) 11.5 or higher.

### Installation
- To get started with the app, first clone the repo and `cd` into the directory:
  
  ```
  $ git clone https://github.com/AndresFMoya/react-rails_event_scheduler.git
  $ cd react-rails_event_scheduler
  ```
- You need to install the gems:
   - You may need to first run `bundle install` if you have older gems in your environment from previous Rails work. If you get an error message like `Your Ruby version is 2.x.x, but your Gemfile specified 2.4.4` then you need to install the ruby version 2.6.4 using `rvm` or `rbenv`.
     - Using **rvm**: `rvm install 2.6.4` followed by `rvm use 2.6.4`
     - Using **rbenv**: `rbenv install 2.6.4` followed by `rbenv local 2.6.4`
   - Install gems with `bundle install --without production` from the rails root folder, to install the gems you'll need, excluding those needed only in production.
- Run `rails db:create` followed by `rails db:migrate` to set up the database
- Install static assets (like external javascript libraries, fonts) with `yarn install`    

<p align="center">
  <strong>
    <a href="https://github.com/AndresFMoya">Contributor: Andres Moya</a>
</strong>
</p>