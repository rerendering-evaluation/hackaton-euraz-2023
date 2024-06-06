import React from 'react';
const Space = ({
  w,
  h,
  flexGrow
}: {
  w?: number | string | undefined;
  h?: number | string | undefined;
  flexGrow?: number | undefined;
}) => {
  console.log(window.globalCount++);
  return <div style={{
    width: w,
    height: h,
    flexGrow: flexGrow
  }} />;
};
export default React.memo(Space);