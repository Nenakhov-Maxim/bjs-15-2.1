// Задание 1

function getSolutions(a, b, c) {
    let D = b ** 2 - 4 * a * c;
    if (D < 0) {
        return {D: D, roots: []};
    } else if (D === 0) {
        let x1 = -b / (2 * a);
        return {D: D, roots: x1};
    } else {
        let x1 = (-b + D **(1 / 2)) / (2 * a);
        let x2 = (-b - D **(1 / 2)) / (2 * a); 
        return {D: D, roots: [x1, x2]};
    }
}
function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    switch (true) {
        case result.D < 0:
            console.log(`Уравнение не имеет вещественных корней`);
            break;
        case result.D === 0:
            console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
            break;    
        default:
            console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
            break;
    }
}

// Задание 2

function getAverageScore(data) {    
    let averageSumm = 0;
    let average = 0;
    if (Object.keys(data).length == 0) {        
        data['average'] = average; 
        return data;    
    } else {
        for (const property in data) {        
            let marks = data[property];            
            let mediumMarks = getAverageMark(marks);
            data[property] = mediumMarks;
            averageSumm = averageSumm + mediumMarks;        
        }
        average = averageSumm / Object.keys(data).length;
        data['average'] = average;
        return data;  
    }           
}
function getAverageMark(marks) {    
    let mediumSumm = 0;
    if (marks.length == 0) {
        medium = 0;
        return medium;
    } else {
        for (let i = 0, len = marks.length; i < len; i++) {
        mediumSumm = mediumSumm + marks[i];        
    }
    let medium = mediumSumm / marks.length;
    return medium;
    }  
}

// Задача 3

function getPersonData(secretData) {
   for (const prop in secretData) {
       if (secretData.hasOwnProperty(prop)) {
           const secretCode = secretData[prop];
           let name = getDecodedValue(secretCode);
           secretData[prop] = name; 
       }
   } 
   let decodedData = {firstName: '', lastName: ''};
   decodedData.firstName = secretData['aaa'];
   decodedData.lastName = secretData['bbb'];
   return decodedData;
}
function getDecodedValue(secret) {
    if (secret  === 0) {
        let decodedName = 'Родриго';
        return decodedName;
    } else {
        let decodedName = 'Эмильо';
        return decodedName;
    }
}