const randomDate = (fromParam = [2020, 3, 20], toParam = []) => {
  const from = fromParam;
  const to = toParam;

  // Convert months to zero based index
  from[1] -= 1;
  if (to.length) to[1] -= 1;

  const fromDate = new Date(...from);
  const toDate = new Date(...to);
  const generatedRandomDate = new Date(fromDate.getTime() + (Math.random() * (toDate.getTime() - fromDate.getTime())));

  return [
    generatedRandomDate.getMonth() + 1,
    generatedRandomDate.getDate(),
    generatedRandomDate.getFullYear(),
  ];
};

export default randomDate;
