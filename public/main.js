import {
  htmlStructure, header, startSortingBtn
} from '../components/structure.html';

import events from '../utils/events';

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
