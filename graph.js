// npm i node-dijkstra
// https://www.npmjs.com/package/node-dijkstra

"use strict";
const Graph = require('node-dijkstra');

const route = new Graph();

route.addNode('A', {B: 1});
route.addNode('B', {A: 1, C: 2, D: 4});
route.addNode('C', {B: 2, D: 1});
route.addNode('D', {B:4, C:1});

route.path('A', 'D')