import React from 'react';



const VerticalLine = ({color,width}) => {
  return (
    <div style={{
      position: 'absolute',
      top: 30,
      bottom: 10,
      width: width,
      backgroundColor: color,
      borderRadius: "3px",
      marginLeft: "10px",
      // left:10,
      // paddingLeft:1,
      height: "75vh"
    }} />
  );
};

export default VerticalLine;
