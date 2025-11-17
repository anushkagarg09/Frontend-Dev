const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];
let report = [];

for (let item of apiData) {
    
    let num = Number(item);        
    let bool = Boolean(item);     
    let str = String(item);        


    if (!isNaN(num) && str.trim() !== "" && item !== "NaN" && !str.includes("px")) {
        validNumbers.push(num);
    } else {
        invalidNumbers.push(item);
    }

  
    report.push({
        original: item,
        asNumber: num,
        asBoolean: bool,
        asString: str,
        isValidNumber: !isNaN(num) && str.trim() !== "" && item !== "NaN" && !str.includes("px")
    });
}

console.log("===== Detailed Type Conversion Report =====");
for (let r of report) {
    console.log(`
Original Value: ${r.original}
 → Number : ${r.asNumber}
 → Boolean: ${r.asBoolean}
 → String : "${r.asString}"
 → Valid Number? : ${r.isValidNumber ? "YES" : "NO"}
    `);
}

// 🔵 Valid & Invalid Arrays
console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Numeric Data:", invalidNumbers);
