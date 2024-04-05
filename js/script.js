// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateTheVolume() {

  // input
  const radius = parseFloat(document.getElementById('radius').value)


  // process
  const volume = 4/3 * Math.PI * Math.pow(radius , 3)


  // output
  document.getElementById('volume').innerHTML = 'volume is : ' + volume.toFixed(2)
}