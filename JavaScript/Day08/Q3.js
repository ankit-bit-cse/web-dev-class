const nums = [10,20,30,40]

nums.forEach(num=> {
    console.log(num);
});

nums.forEach((num,index)=> {
  console.log(`index ${index} → ${num}`);
});
   
const doubled = []

 nums.forEach(num => {
    doubled.push(num * 2 );
 });

 console.log(doubled);

 const names = ["sam","john","mia"];

 names.forEach(name => {
    const capitalized = name[0].toUpperCase() + name.slice(1);
    console.log(`Hello,${capitalized}`);
 });



