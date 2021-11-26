import React from 'react';
import { FaStar } from 'react-icons/fa';
import Star from './Star.js';

const createArray = length => [...Array(length)];

export default function StarRating({ totalStars = 5 }) {
  return createArray(totalStars).map((n, i) => <Star key={i} />);
}