type Cm = { __brand: "cm" };
type Kg = { __brand: "kg" };

const lengthNum = 80 as number & Cm;
const weightNum = 80 as number & Kg;

const changeWidthDouble = (width: Cm) => {
  console.log(width);
};

// weightNum >> 에러발생!
// changeWidthDouble(weightNum);
