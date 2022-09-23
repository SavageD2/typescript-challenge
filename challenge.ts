// challenge.ts
const prettyPrintWilder = (users : Wilders[]) => {
    users.map((user : Wilders) => {
      console.log(`${user.name} is ${user.age} years old`);
    });
  };
  
  interface Wilders {
    name:string;
    age?:number;
    birthday?:string;
  }
  
  const wilders: Wilders[] = [];

  /*interface user {
    name: string;
    age?: number;
    birthday?: string;
  }*/
  
  const user1:Wilders = { name: "Pierre", age: 23 };
  const user2:Wilders = { name: "Paul", birthday: "10/02/1990" };
  const user3:Wilders = { name: "Jacques", age: 25 };
  
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  
  prettyPrintWilder(wilders);
