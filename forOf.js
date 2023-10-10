const stuffs = [{
    id: 1001,
    name: 'Mahadi Hasan',
    profession: 'Typist',
    salary: 1000,
    dutyTime: '6 Days in week'
}, {
    id: 1002,
    name: 'Tawhidul Islam',
    profession: 'Messenger',
    salary: 1000,
    dutyTime: '6 Days in week'
}];

for(const stuff of stuffs){
    // console.log(stuff.name, stuff.profession, stuff.salary);
    const stuffName = stuff.name[1];
    for(const names of stuffName){
        console.log(names);
    }
}