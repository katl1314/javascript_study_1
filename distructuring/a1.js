const todos = [
    {id : 0, content : 'HTML', complete : true},
    {id : 1, content : 'CSS', complete : false},
    {id : 2, content : 'Javascript', complete : true}
]

const [, {id, content}] = todos;
console.log(id, content);

const user = {
    name : 'Choi',
    address : {
        zipCode : 11111,
        city : 'Incheon'
    }
};

const { address : {zipCode, city }} = user;
console.log(zipCode, city);

const [todo, ...others] = todos;
console.log(todo, others);