import useCustemTimer from './useCustemTimer';
const Custom = () => {
  const timer = useCustemTimer();
  const timer2 = useCustemTimer(1000);
  return <div>
    {timer} <br />
    {timer2}
  </div>;
};

export default Custom;
