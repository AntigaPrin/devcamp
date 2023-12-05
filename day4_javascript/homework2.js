// homework 2.1
const draw1 = function(n) {
    let tmp = "";
        for (let i = 1; i <= n ; i++) {
        for (let j = 1; j <= n; j++) {
            if (i<j) {
                tmp += "-";
            } else { 
                tmp += "*"; 
            }
        }
        tmp += "\n";
    }
    console.log(tmp); 
}
console.log("-----Homework 2.1-----");
console.log("ที่ n = 2");
draw1(2);
console.log("ที่ n = 3");
draw1(3);
console.log("ที่ n = 4");
draw1(4);

// homework 2.2
const draw2 = function(n) {
    let tmp = "";
    let number1 = n+1;
        for (let i = 1; i <= n ; i++) {
            for (let j = 1; j <= n; j++) {
                let number2 = i+j;
                if (number1<number2) {
                    tmp += "-";
                } else { 
                    tmp += "*"; 
                }
        }
        tmp += "\n";
    }
    console.log(tmp); 
}
console.log("-----Homework 2.2-----");
console.log("ที่ n = 2");
draw2(2);
console.log("ที่ n = 3");
draw2(3);
console.log("ที่ n = 4");
draw2(4);

// homework 2.3
const draw3 = function(n) {
    let tmp = "";
    let left = 1;
    for (let row = 1; row <= 2 * n - 1; row++) {
      for (let col = 1; col <= n; col++) {
          if (col > left) {
              tmp += "-";
          } else {
              tmp += "*";
          }
      }
      tmp += "\n";
      if (row < n) {
          left += 1;
      } else {
          left -= 1;
      }
    }
    console.log(tmp);
  }
console.log("-----Homework 2.3-----");
console.log("ที่ n = 2");
draw3(2);
console.log("ที่ n = 3");
draw3(3);
console.log("ที่ n = 4");
draw3(4);

// homework 2.4
const draw4 = function(n) {
    let tmp = "";
    let left = 1;
    let number = 1;
    for (let row = 1; row <= 2 * n - 1; row++) {
      for (let col = 1; col <= n; col++) {
          if (col > left) {
              tmp += "-";
          } else {
            tmp += number.toString();
          }
      }
      tmp += "\n";
      if (row < n) {
          left += 1;
          number += 1;
      } else {
          left -= 1;
          number -= 1;
      }
    }
    console.log(tmp);
  }
console.log("-----Homework 2.4-----");
console.log("ที่ n = 2");
draw4(2);
console.log("ที่ n = 3");
draw4(3);
console.log("ที่ n = 4");
draw4(4);

// homework 2.5
const draw5 = function(n) {
    let tmp = "";
    let number1 = n+1;
        for (let i = 1; i <= n ; i++) {
            for (let j = 1; j <= n; j++) {
                let number2 = i+j;
                if (number2<number1) {
                    tmp += "-";
                } else { 
                    tmp += "*"; 
                }
            }
        tmp += "\n";
    }
    console.log(tmp); 
}
console.log("-----Homework 2.5-----");
console.log("ที่ n = 2");
draw5(2);
console.log("ที่ n = 3");
draw5(3);
console.log("ที่ n = 4");
draw5(4);

// homework 2.6
const draw6 = function(n) {
    let tmp = "";
        for (let i = 1; i <= n ; i++) {
            for (let j = 1; j <= n; j++) {
                let number1 = i*2;
                let number2 = i+j;
                if (number2<number1) {
                    tmp += "-";
                } else { 
                    tmp += "*"; 
                }
            }
        tmp += "\n";
    }
    console.log(tmp); 
}
console.log("-----Homework 2.6-----");
console.log("ที่ n = 2");
draw6(2);
console.log("ที่ n = 3");
draw6(3);
console.log("ที่ n = 4");
draw6(4);

// homework 2.7
const draw7 = function(n) {
    let tmp = "";
    let left = n;
    let number = 1;
    for (let row = 1; row <= 2 * n - 1; row++) {
      for (let col = 1; col <= n; col++) {
          if (col >= left) {
              tmp += "*";
              number += 1;
          } else {
              tmp += "-";
          }
      }
      tmp += "\n";
      if (row < n) {
          left -= 1;
      } else {
          left += 1;
      }
    }
    console.log(tmp);
  }
console.log("-----Homework 2.7-----");
console.log("ที่ n = 2");
draw7(2);
console.log("ที่ n = 3");
draw7(3);
console.log("ที่ n = 4");
draw7(4);

// homework 2.8
const draw8 = function(n) {
    let tmp = "";
    let left = n;
    let number = 1;
    for (let row = 1; row <= 2 * n - 1; row++) {
      for (let col = 1; col <= n; col++) {
          if (col >= left) {
              tmp += number.toString();
              number += 1;
          } else {
              tmp += "-";
          }
      }
      tmp += "\n";
      if (row < n) {
          left -= 1;
      } else {
          left += 1;
      }
    }
    console.log(tmp);
  }
console.log("-----Homework 2.8-----");
console.log("ที่ n = 2");
draw8(2);
console.log("ที่ n = 3");
draw8(3);
console.log("ที่ n = 4");
draw8(4);

// homework 2.9
