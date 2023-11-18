const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach(function(element,index,list){
      if(element.profession ==="developer")
      {
        console.log(element);
      }
    });
    
  }
  
  // 2. Add Data
  function addData() {
      let name=prompt("Enter name");
      let age=prompt("Enter age");
      let profession=prompt("Enter profession");
  
      if (!name || isNaN(age) || !profession) {
        alert('Invalid input. Please enter valid details.');
        return;
      }
    
  
      let newData={
        name:name,
        age:+age,
        profession:profession.toLocaleLowerCase
      }
  
      data.push(newData);
      console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    let admins=data.filter(emp=> emp.profession==="admin");
    console.log(admins);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let demoArray=[
      { name: "atharv", age: 30, profession: "designer" },
      { name: "jiya", age: 45, profession: "developer" },
    ];
  
    data.concat(demoArray);
    console.log("Concated array",data);
    
  }
  
  // 5. Average Age
  function averageAge() {
    let sum=data.reduce((prev,curr)=>prev+curr.age,0);
    let avg=sum/data.length;
    console.log(avg);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let isAbove=data.some(emp=> emp.age > 25)
    console.log("at least one person in the array who's older than 25:",isAbove);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let professionsSet = new Set(data.map(dev => dev.profession));
    console.log("Unique Professions:", [...professionsSet]);
  
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b)=>a.age-b.age);
    console.log("Sort by Age",data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const updatedData = data.map((person) => {
      if (person.name === 'john') {
        return { ...person, profession: 'manager' };
      }
      return person;
    });
    console.log(updatedData);
  
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const professionCount = data.reduce((count, person) => {
      count[person.profession] = (count[person.profession] || 0) + 1;
      return count;
    }, {});
    console.log(professionCount);
  
  }
  