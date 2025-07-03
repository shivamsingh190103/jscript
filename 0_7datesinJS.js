//date

let myDate=new Date()

console.log(myDate);//2025-07-03T13:57:28.797Z
console.log(myDate.toString());//Thu Jul 03 2025 19:11:34 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//Thu Jul 03 2025
console.log(myDate.toLocaleDateString());//7/3/2025
console.log(typeof(myDate));//object

let myCreatedDate =new Date(2023,0,23)
console.log(myCreatedDate.toDateString());// Mon Jan 23 2023
//indexing starts from 0 in months
console.log(myCreatedDate.toLocaleDateString());//1/23/2023
//in case of DD/MM//yyyy months stats from 01
let createNewDate=new Date("2023-01-14")
console.log(createNewDate.toLocaleString())//1/14/2023, 5:30:00 AM
//but in india we dont follow the yyyy-mm-dd
let mycreatedDate=new Date("01-14-2023")
console.log(mycreatedDate.toLocaleString());//1/14/2023, 12:00:00 AM
//calculate time from jan 1 1970
let myTimeStamp=Date.now()//give date of now

console.log(myTimeStamp);//1751553698101
console.log(mycreatedDate.getTime());//1673634600000
console.log(Math.floor(Date.now()/1000))//1751554098

let newDate=new Date()
console.log(newDate)//2025-07-03T14:51:34.929Z
console.log(newDate.getMonth()+1);//7
console.log(newDate.getDay());//4

console.log(newDate.toLocaleString(`default`,{
    weekday:"long",
}))//Thursday




// +++++++++++++++ JAVASCRIPT DATE OBJECT THEORY +++++++++++++++

// ✅ JavaScript provides a built-in object called `Date` to work with dates and times.
// ✅ It stores time internally as **milliseconds since January 1, 1970 UTC** (called the Unix Epoch).
// ✅ A Date object is NOT a primitive; it is an object.
// ✅ You can create, format, modify, compare, and extract parts of the date using built-in methods.

// ✅ 1. Create a Date Object:

// - Current date and time
let now = new Date();

// - From a string (ISO format is safest)
let fromString = new Date("2025-07-03"); // July 3, 2025

// - From individual numbers: new Date(year, month (0-based), day, hour?, min?, sec?, ms?)
let fromNumbers = new Date(2025, 6, 3); // July 3, 2025

// - From timestamp (milliseconds since Jan 1, 1970)
let fromTimestamp = new Date(1000000000000); // Sat Sep 08 2001


// ✅ 2. Date Output Methods:

console.log(now);                     // Full ISO format (2025-07-03T13:57:28.797Z)
console.log(now.toString());         // Human-readable (Thu Jul 03 2025 19:27:28 GMT+0530)
console.log(now.toDateString());     // Only date (Thu Jul 03 2025)
console.log(now.toLocaleDateString()); // Localized date (e.g. 7/3/2025)
console.log(typeof now);             // 'object'


// ✅ 3. Get Date Parts (Individual components):

now.getFullYear();     // Year → 2025
now.getMonth();        // Month → 6 (July, because Jan = 0)
now.getDate();         // Day of month → 3
now.getDay();          // Day of week → 4 (Thursday, where 0 = Sunday)
now.getHours();        // Hour → 0-23
now.getMinutes();      // Minutes
now.getSeconds();      // Seconds
now.getMilliseconds(); // Milliseconds


// ✅ 4. Set / Modify Date Parts:

now.setFullYear(2030);  // Change year
now.setMonth(11);       // Change month to December (11)
now.setDate(25);        // Set day to 25
// Similar methods: setHours(), setMinutes(), setSeconds(), etc.


// ✅ 5. Get Timestamp:

Date.now();           // Current time in milliseconds since Jan 1, 1970
now.getTime();        // Timestamp of the 'now' date object
Math.floor(Date.now() / 1000); // Unix timestamp in seconds


// ✅ 6. Format Custom Date:

let custom = new Date();
let formatted = `${custom.getDate()}/${custom.getMonth() + 1}/${custom.getFullYear()}`;
console.log(formatted); // 3/7/2025


// ✅ 7. Localized Date Formatting:

now.toLocaleString();                // Full localized string (date + time)
now.toLocaleDateString();            // Just date part
now.toLocaleTimeString();            // Just time part
now.toLocaleString('en-IN');         // Indian format → 3/7/2025
now.toLocaleString('en-US');         // US format → 7/3/2025


// ✅ 8. Weekday Name (Full):

now.toLocaleString('default', { weekday: 'long' }); // "Thursday"


// ✅ 9. Important Notes:

// - Month is always 0-indexed (Jan = 0, Dec = 11)
// - Dates are mutable (you can change their values)
// - Date math (difference, add days) needs conversion via milliseconds
// - For advanced usage (like time zones), use libraries like `date-fns` or `moment.js`

// ✅ Interview/Project Use Cases:
// - Show createdAt/updatedAt timestamps
// - Calculate days left for deadline
// - Display user’s DOB in local format
// - Generate logs and format dates
