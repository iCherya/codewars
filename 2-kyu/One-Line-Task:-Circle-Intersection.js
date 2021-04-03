/* eslint-disable arrow-spacing */
/* eslint-disable no-undef */
/* eslint-disable no-with */
/**
 * 2 kyu - One Line Task: Circle Intersection
 * https://www.codewars.com/kata/5908242330e4f567e90000a3
 */
with(Math)circleIntersection=([a,b],[c,d],r)=>(r*r*(-sin(D=2*acos(hypot(a-c,b-d)/2/r))+D))|0