import useCustemTimer from './useCustemTimer';
const Custom2 = () => {
  const timer = useCustemTimer(100);
  return <div>{timer}</div>;
};

export default Custom2;
