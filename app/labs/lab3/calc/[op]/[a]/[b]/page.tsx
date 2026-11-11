"use client";

import { useParams } from "next/navigation";

export default function Question10() {
  const { op, a, b } = useParams();

  const operator = op as string;
  const numA = parseInt(a as string);
  const numB = parseInt(b as string);

  let result = 0;
  let symbol = "";

  switch (operator) {
    case "add":
      result = numA + numB;
      symbol = "+";
      break;
    case "sub":
      result = numA - numB;
      symbol = "-";
      break;
    case "mul":
      result = numA * numB;
      symbol = "*";
      break;
    case "div":
      result = numB !== 0 ? numA / numB : 0;
      symbol = "/";
      break;
    default:  
      result = 0;
      symbol = "";
  }

  return (
    <div id="wd-calculator">
      <h4>Calculator</h4>
      <h3 id="wd-calc-result">
        {a} {symbol} {b} = {result}
      </h3>
    </div>
  );
}