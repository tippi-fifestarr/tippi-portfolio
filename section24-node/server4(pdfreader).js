const express = require('express')
const fs = require('fs')

const app = express();

// boilerplate for 
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(express.static(__dirname + '/public'))

// https://stackoverflow.com/questions/41635540/how-to-read-the-content-of-a-pdf-file-using-nodejs
// got an error =           callback();
// ReferenceError: callback is not defined
// var PdfReader = require('pdfreader').PdfReader;
//  fs.readFile("./public/sage_publications_inc_-_30_essential_skills_for_the_qualitative_researcher_-_2021-03-04.pdf", (err, pdfBuffer) => {
//    // pdfBuffer contains the file content
//    new PdfReader().parseBuffer(pdfBuffer, function(err, item){
//       if (err)
//           callback(err);
//        else if (!item)
//            callback();
//         else if (item.text)
//            console.log(item.text);
//          });
//       }); 

//fs.readFile('./public/sage_publications_inc_-_30_essential_skills_for_the_qualitative_researcher_-_2021-03-04.pdf', (err, data) => {
//   if (err) {
//     fs.appendFile('./public/error.txt', 'error:', err)
//   }
//     console.log(data)  
//   // console.log(data.toString('uft8'))
// }
  
// )


app.listen(3000);