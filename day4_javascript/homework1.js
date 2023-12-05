// homework 1.1
const draw1 = function(n) {
    let tmp ="";
    for (let i = 0; i < n ; i++) {
        tmp += "*";
    }
    console.log(tmp);
}
console.log("-----Homework 1.1-----");
console.log("ที่ n = 2");
draw1(2);
console.log("ที่ n = 3");
draw1(3);
console.log("ที่ n = 4");
draw1(4);


// homework 1.2
const draw2 = function(n) {
    let tmp = "";
    for (let i = 0; i < n ; i++) {
        for (let j = 0; j < n; j++) {
            tmp += "*";
        }
        tmp += "\n";
    }
    console.log(tmp); 
}
console.log("-----Homework 1.2-----");
console.log("ที่ n = 2");
draw2(2);
console.log("ที่ n = 3");
draw2(3);
console.log("ที่ n = 4");
draw2(4);

// homework 1.3
const draw3 = function(n) {
    let tmp = "";
    for (let i = 0; i < n ; i++) {
        let number = 1;
        for (let j = 0; j < n; j++) {
            tmp += number.toString();
            number += 1;
        }
        tmp += "\n";
    }
    console.log(tmp); 
}
console.log("-----Homework 1.3-----");
console.log("ที่ n = 2");
draw3(2);
console.log("ที่ n = 3");
draw3(3);
console.log("ที่ n = 4");
draw3(4);

// homework 1.4
const draw4 = function(n) {
    let tmp = "";
    for (let i = 1; i <= n ; i++) {
        for (let j = 1; j <= n; j++) {
            tmp += (i).toString();

        }
        tmp += "\n";
    }
    console.log(tmp); 
}
console.log("-----Homework 1.4-----");
console.log("ที่ n = 2");
draw4(2);
console.log("ที่ n = 3");
draw4(3);
console.log("ที่ n = 4");
draw4(4);

// homework 1.5
const draw5 = function(n) {
    let tmp = "";
    let number = n;
    for (let i = 1; i <= n ; i++) {
        for (let j = 1; j <= n; j++) {
            // console.log("n:", n, " i: ", i, " j: ", j)
            tmp += number.toString();              
        }
        number--
        tmp += "\n";
    }
    console.log(tmp); 
}
console.log("-----Homework 1.5-----");
console.log("ที่ n = 2");
draw5(2);
console.log("ที่ n = 3");
draw5(3);
console.log("ที่ n = 4");
draw5(4);

// homework 1.6
const draw6 = function(n) {
    let tmp = "";
    let number = 1;
    for (let i = 1; i <= n ; i++) {
        for (let j = 1; j <= n; j++) {
            tmp += number.toString();     
            number++;         
        }
        tmp += "\n";
    }
    console.log(tmp); 
}
console.log("-----Homework 1.6-----");
console.log("ที่ n = 2");
draw6(2);
console.log("ที่ n = 3");
draw6(3);
console.log("ที่ n = 4");
draw6(4);

// homework 1.7
const draw7 = function(n) {
    let tmp = "";
    let number = n*n;
    for (let i = 1; i <= n ; i++) {
        for (let j = 1; j <= n; j++) {
            tmp += number.toString();     
            number--; 
        }
        tmp += "\n";
    }
    console.log(tmp); 
}
console.log("-----Homework 1.7-----");
console.log("ที่ n = 2");
draw7(2);
console.log("ที่ n = 3");
draw7(3);
console.log("ที่ n = 4");
draw7(4);

// homework 1.8
const draw8 = (n) => {
    let tmp = "";
    for (let i = 0; i < n ; i++) {
        tmp += 2*i;
        tmp += "\n";
    }
    console.log(tmp); 
}
console.log("-----Homework 1.8-----");
console.log("ที่ n = 2");
draw8(2);
console.log("ที่ n = 3");
draw8(3);
console.log("ที่ n = 4");
draw8(4);

// homework 1.9
const draw9 = function(n) {
    let tmp = "";
    for (let i = 1; i <= n ; i++) {
        tmp += 2*i;
        tmp += "\n";
    }
    console.log(tmp); 
}
console.log("-----Homework 1.9-----");
console.log("ที่ n = 2");
draw9(2);
console.log("ที่ n = 3");
draw9(3);
console.log("ที่ n = 4");
draw9(4);

// homework 1.10
const draw10 = (n) => {
    let tmp = "";
        for (let i = 1; i <= n ; i++) {
        for (let j = 1; j <= n; j++) {
            tmp += i*j;
        }
        tmp += "\n";
    }
    console.log(tmp); 
}
console.log("-----Homework 1.10-----");
console.log("ที่ n = 2");
draw10(2);
console.log("ที่ n = 3");
draw10(3);
console.log("ที่ n = 4");
draw10(4);

// homework 1.11
const draw11 = (n) => {
    let tmp = "";
        for (let i = 1; i <= n ; i++) {
        for (let j = 1; j <= n; j++) {
            if (i==j) {
                tmp += "-";
            } else { 
                tmp += "*"; 
            }
        }
        tmp += "\n";
    }
    console.log(tmp); 
}
console.log("-----Homework 1.11-----");
console.log("ที่ n = 2");
draw11(2);
console.log("ที่ n = 3");
draw11(3);
console.log("ที่ n = 4");
draw11(4);

// homework 1.12
const draw12 = (n) => {
    let tmp = "";
        for (let i = 1; i <= n ; i++) {
            let number = i;
        for (let j = 1; j <= n; j++) {
            if (number==n) {
                tmp += "-";
            } else { 
                tmp += "*"; 
            }
            number++;
        }
        tmp += "\n";
    }
console.log(tmp); 
}
console.log("-----Homework 1.12-----");
console.log("ที่ n = 2");
draw12(2);
console.log("ที่ n = 3");
draw12(3);
console.log("ที่ n = 4");
draw12(4);