import React from 'react';

// Container component to wrap content with fixed width and padding
function Container({ children }) {
  return (
    // Centers content and limits max width
    <div className='w-full max-w-7xl mx-auto px-4'>
      {children}
    </div>
  );
}

export default Container;
