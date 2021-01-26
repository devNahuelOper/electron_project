const $ = require("jquery");
const fs = require("fs");
const PDFDocument = require("pdfkit");
// const blobStream = require("blob-stream");

const plugText =
  "Denizen Confidant (https://denizen-confidant.herokuapp.com),";
let content;
// let preview = document.getElementById("preview");

$(".form-control").each((index, input) => {
  let field = input.id;
  $(input).on("input", () => {
    $(`.${field}`).each((idx, item) => $(item).text($(input).val().trim()));
    content = document.getElementById("letter").innerText;
  });
});

$("#link").on("click", () =>
  makePdf(`${$("#Company").val().trim()}_CL`, content)
);

function makePdf(title, text) {
  text = text.split(plugText);
  const pdfDoc = new PDFDocument();
  window.pdfDoc = pdfDoc;

  pdfDoc.pipe(
    fs.createWriteStream(`/Users/nahuelgorosito/Desktop/${title}.pdf`)
  );

  pdfDoc
    .fontSize(24)
    .font("Helvetica-Bold")
    .fill("#666666")
    .text("Nahuel Gorosito", 140, 72, {
      continued: true,
      characterSpacing: -1,
    })
    .fontSize(14)
    // .fill("#848181")
    .fill("#aba9a9")
    .strokeColor("#848181")
    .text("Full Stack Software Engineer", 158, 77, {
      characterSpacing: -1,
    });

  // pdfDoc.moveTo(370, 68).lineTo(370, 96).lineWidth(4).fillAndStroke("#666666");

  pdfDoc
    // .rect(368, 68, 2, 28)
    .rect(320, 68, 2, 28)
    .fillAndStroke("#666666", "#848181");
    

  pdfDoc
    .font("Helvetica", 13)
    .fill("#000")
    .moveDown(2)
    .text(text[0], 56, 150, {
      paragraphGap: 10,
      indent: 10,
      width: 512,
      continued: true,
    })
    // .fillColor("#ffa200")
    .fillColor("#6b96c2")
    .font("Helvetica", 13)
    .link(
      368,
      pdfDoc.y,
      pdfDoc.widthOfString("Denizen Confidant"),
      pdfDoc.currentLineHeight(),
      "https://denizen-confidant.herokuapp.com"
    )
    .text("Denizen Confidant", { continued: true })
    .font("Helvetica", 13)
    .fill("#000")
    .text(text[1], {
      paragraphGap: 10,
      indent: 10,
      width: 512,
    });

  pdfDoc
    .font("Helvetica-Bold", 15)
    // .fontSize(15)
    .fill("#666666")
    .fillOpacity(0.7)
    .text("Nahuel Gorosito", {
      indent: 10,
    });

  pdfDoc.end();

}

// text.slice(0, text.search(/\s(?=Nahuel)/));

// function blobPdf(text) {
//   const pdfDoc = new PDFDocument();
//   const stream = pdfDoc.pipe(blobStream());
//   pdfDoc.text(text);
//   pdfDoc.end();

//   stream.on("finish", function() {
//     const url = stream.toBlobURL("application/pdf");
//     preview.src = url;
//   });
// }

