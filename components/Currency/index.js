const Currency = (props) => {
  const currency = (props.value / 100).toFixed(2);
  return (
    <p className="font-semibold">
      <sup>$</sup>&nbsp;{currency}
    </p>
  );
};

export default Currency;
