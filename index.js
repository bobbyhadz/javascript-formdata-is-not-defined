// FormData is not defined Error in JavaScript

// EXAMPLE 1 - Importing the FormData constructor in Node.js

import FormData from 'form-data';
import fs from 'fs';

const form = new FormData();
form.append('field', 'my value');
form.append('file', fs.createReadStream('/pictures/avatar.png'));

console.log(form);

// ------------------------------------------------------------------

// EXAMPLE 2 - Using URLSearchParams

// import fs from 'fs';

// const form = new URLSearchParams();
// form.append('field', 'my value');
// form.append('file', fs.createReadStream('/pictures/avatar.png'));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using axios to send a POST request with form data to a server

// import axios from 'axios';

// const form = new URLSearchParams();

// form.append('abc', 'xyz');
// form.append('qwe', 'asd');

// async function makeRequest() {
//   try {
//     const res = await axios.get('https://example.com', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       data: form,
//     });
//     const data = res.data;
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// makeRequest();
