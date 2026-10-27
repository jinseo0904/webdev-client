export default function VariableTypes() {
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let marathonDist = 42.195;
    let stringVariable = "Hello World!";
    let secondString = "Second String!";
    let booleanVariable = true;
    let isNumber = typeof numberVariable;
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;
    let isDistNumber = typeof marathonDist;
    let isSecondString = typeof secondString;
    let sampleCount = 42;
    let sampleLabel = "Lab 3";
    let isSampleCount = typeof sampleCount;
    let isSampleLabel = typeof sampleLabel;
    return (
      <div id="wd-variable-types">
        <h4>Variables Types</h4>
        numberVariable = {numberVariable}           <br />
        floatingPointNumber = {floatingPointNumber} <br />
        stringVariable = {stringVariable}           <br />
        secondString = {secondString}           <br />
        marathonDist = {marathonDist}           <br />
        booleanVariable = {booleanVariable + ""}    <br />
        isNumber = {isNumber}                       <br />
        isString = {isString}                       <br />
        isBoolean = {isBoolean}       <br />
        isDistNumber = {isDistNumber}       <br />
        isSecondString = {isSecondString}           <br />
        sampleCount = {sampleCount}                 <br />
        sampleLabel = {sampleLabel}                 <br />
        isSampleCount = {isSampleCount}             <br />
        isSampleLabel = {isSampleLabel}
        <hr />
      </div>
    );
  }