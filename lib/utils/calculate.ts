const calculateTip = ({
  numOfPeople,
  bill,
  percent,
  customPercent,
}: {
  numOfPeople: number;
  bill: number;
  percent: number;
  customPercent: string;
}): string => {
  let tipValue: string = "";
  if (numOfPeople > 0 && bill > -1) {
    customPercent === ""
      ? (tipValue = ((bill * (percent / 100)) / numOfPeople).toFixed(2))
      : (tipValue = ((bill * (+customPercent / 100)) / numOfPeople).toFixed(2));
  }
  return tipValue;
};

const calculateTotal = ({
  numOfPeople,
  bill,
  tip,
}: {
  numOfPeople: number;
  bill: number;
  tip: string;
}): string => {
  let total: string = "";
  if (numOfPeople > 0 && bill > -1) {
    total = (bill + +tip / numOfPeople).toFixed(2);
  }
  return total;
};

export { calculateTip, calculateTotal };
