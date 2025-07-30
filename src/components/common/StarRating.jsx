import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating, reviewCount = null, size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" />);
  }

  // Half star
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
  }

  // Empty stars
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" />);
  }

  return (
    <div className={`flex items-center ${sizeClasses[size]}`}>
      <div className="flex mr-1">
        {stars.map((star, index) => (
          <span key={index} className="mr-0.5">
            {star}
          </span>
        ))}
      </div>
      <span className="font-medium ml-1">{rating.toFixed(1)}</span>
      {reviewCount && (
        <span className="text-gray-500 ml-2">({reviewCount} reviews)</span>
      )}
    </div>
  );
};

export default StarRating;