const createPerson = (name, age) => {
    // your code here
    person = {
        'name': name,
        'age': age

    }
    return person
};

const getName = object => {
    givenName = object.name
    return givenName
};

const getProperty = (property, object) => {
    // your code here
    if (property == "age") {
        return object.age
    } else {
        return object.name
    }
};

const hasProperty = (property, object) => {
    // your code here
    let truthfulness = object.hasOwnProperty(property)
    return truthfulness
};

const isOver65 = person => {
    // your code here
    for (i in person) {
        if (person.age > 65) {
            return true
        } else {
            return false
        }
    }
};

const getAges = people => {
    // your code here
    ages = Array()
    for (i in people) {
        age = people[i].age
        ages.push(age)

    }
    return ages
};

const findByName = (name, people) => {
    // your code here
    for (i in people) {
        if (people[i].name === name) {
            return people[i]
        }
    }

};

const findHondas = cars => {
    // your code here
    const hondas = cars.filter(x => x.manufacturer === "Honda");
    return hondas
};

const averageAge = people => {
    // your code here
    ageSum = 0
    persons = people.length
    for (i in people) {
        ageSum += people[i].age
    }
    return ageSum / persons
};

const createTalkingPerson = (name, age) => {
    // your code here
    person = {
        'name': name,
        'age': age,
    }

    person.introduce = function(string) {
        introduction = 'Hi ' + string + ', my name is ' + name + ' and I am ' + age + '!'
        return introduction
    }

    return person

};

module.exports = {
    createPerson,
    getName,
    getProperty,
    hasProperty,
    isOver65,
    getAges,
    findByName,
    findHondas,
    averageAge,
    createTalkingPerson
};