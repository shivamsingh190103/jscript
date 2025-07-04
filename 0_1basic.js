const accountId = 14453;
let accountEmail = "sshivamsingh0480@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;
console.table({
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState
});
//var is not prefered to use because of issue in the block scope and functional scope means { }
//always use lets and const
// accountId=123; we cannot change the const variable
accountEmail="shivam@gmail.com"
console.log(accountId)