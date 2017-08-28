const myName = 'Nizar';

// console.log( 'Hello, ' + myName + '!' );
//
// console.log( `Hello, ` + myName + `!` );

console.log( `Hello, ${myName}!` );


const song = {
  id: 9999,
  name: 'Despacito',
  source: 'http://example.com/despcito.mp3'
};

// const badHtml = `
//   <h1 data-id="` + song.id + `">` + song.name + `</h1>
//   <audio src="` + song.source + `"></audio>
// `;

const html = `
  <h1 data-id="${song.id}">${song.name}</h1>
  <audio src="${song.source}"></audio>
`;
