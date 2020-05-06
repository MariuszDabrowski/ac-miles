let randomDate = (from = [2020, 3, 20], to = []) => {
  // Convert months to zero based index
  from[1] -= 1;
  if (to.length) to[1] -= 1;

  const fromDate = new Date(...from);
  const toDate = new Date(...to);
  const randomDate = new Date(fromDate.getTime() + (Math.random() * (toDate.getTime() - fromDate.getTime())));
  
  return [
    randomDate.getMonth() + 1,
    randomDate.getDate(),
    randomDate.getFullYear()
  ];
};

export default randomDate;