const user = {
  shop: "ALom store",
  owner: "alom",
  adress: "Tangail",
  product: ["biscuit", "canacur", "sopa", "alu"],
  publised: 2010,
  newOwner: {
    adress: "dhaka",
    shop: "dhaka",
  },
};

//console.log(user);

const stringfy = JSON.stringify({ sname: "siam", roll: 3 });
console.log(stringfy.sname);

const newWrap = JSON.parse(stringfy);
console.log(newWrap.name);

const premikas = { name: "keka ferdousi", cars: { brand: "toyota" } };
const {name} = premikas
console.log(name);
