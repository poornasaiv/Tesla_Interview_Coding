//Exercise 1 : shallow copy and deep copy

const employee = {id:1, name:'Sai', department:{name:'energy'}};

//shallow copy

const employeeCopy = {...employee};
console.log(employee);
console.log(employeeCopy);
console.log(`Does employee and employeeCopy have same reference ?`, employee === employeeCopy);
console.log(`Does the department attribute of both the objects share same reference ?`, employee.department === employeeCopy.department);

console.log("**************************************************************************************************************************************")
//deep copy

const employeeDeep = structuredClone(employee);
console.log(employeeDeep);
console.log(`Does employee and employeeDeep have same reference ?`, employee === employeeDeep);
console.log(`Does the department attribute of both the objects share same reference ?`, employee.department === employeeDeep.department);


console.log("**************************************************************************************************************************************")

//Exercise 2 : Remove duplicates based on id and sort

const employees = [
    {id: 1, name:"A", department: {name:"energy"}},
    {id: 3, name:"B", department: {name:"energy"}},
    {id: 1, name:"A", department: {name:"energy"}},
    {id: 2, name:"C", department: {name:"vehicle"}}
    ];
    
    const seen = new Set([]);
    const uniqueEmployees = employees.filter(employee => {
        if(seen.has(employee.id)) return false;
        seen.add(employee.id);
        return true;
    });
    
uniqueEmployees.sort((x, y) => x.id - y.id);

console.log(uniqueEmployees);

//Exercise 3 : Mask the sensitive keys in allowedClient

const allowedClient = {id:1, password: '12345', secret: 'abcdefg'};
const sensitiveKeys = ['password', 'secret'];

const masked = {...allowedClient};

sensitiveKeys.forEach(key => {
    if(masked[key])
    {
        masked[key] = '*'.repeat(masked[key].length);
    }
})

console.log(masked);

//Exercise 4 : 
// - Create a function that returns "allowedClient" as a promise
// - Create a function that returns "sensitiveKeys" as a promise
// - Create a function that
// • 1) fetches "allowedClient" and "sensitiveKeys" via those functions
// • 2) takes the masking function from EXERCISE 3• as a callback
// * output → (• id: 1, password: *****, secret:

const maskedFunc = (x,y) => {
    const dupX = {...x};
    y.forEach((key) => {
        if(dupX[key])
        {
            dupX[key] = '*'.repeat(dupX[key].length)
        }
    });
    return dupX;
}

const func1 = () => new Promise((resolve) => resolve(allowedClient));
const func2 = () => new Promise((resolve) => resolve(sensitiveKeys));


const func3 = async (maskedFunc) => {
    const [allClient, sensKeys] = await Promise.all([func1(), func2()]);
    const result = maskedFunc(allClient, sensKeys);
    console.log(result);
}

func3(maskedFunc);


