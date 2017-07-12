import * as firebase from "firebase";

import { set_stories } from './actions';
import store from './store';

var config = {
  databaseURL: "https://hacker-news.firebaseio.com",
};

firebase.initializeApp(config);

var database = firebase.database();

database.ref('/v0/topstories')
  .on('value', function(stories) {
    store.dispatch(set_stories(stories.val()));
  });

export default database;
