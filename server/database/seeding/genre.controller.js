const addGenreModel = require('../model/add.genre.model.js');
const Promise = require('bluebird');

const retrieve = () => {};


const add = (genre) => {
  // console.log('genre inside genre.controller.js inside add: ', genre);
  const genreArray = genre.genre.split(', ')
  return genreArray.map((g) => {
    return addGenreModel.isGenreExists(g)
    .then((id) => {
      console.log('**id inside isgenreExists inside genre.controller: ', id);
      if (id === -1) {
        console.log("********** WE HIT ID === -1 HERE")
        return addGenreModel.add(g)
        .then((idAdded) => {
          return idAdded;
        })
        .catch((error) => {
        console.log('error inside genre.controller inside add: ', error);
        });
      } else {
        return id;
      }
    })
    .catch((error) => {
      console.log('error inside genre.controller inside isGameExists: ', error);
      return error;
    });
  });
};
// const add = (genre) => {
//   console.log('genre inside genre.controller.js inside add: ', genre);
//   if (genre.genre.length > 1) {
//     return genre.genre.split(', ').map((g) => {
//       console.log('G going into genreModel: ', g)
//       return addGenreModel.isGenreExists(g)
//       .then((id) => {
//         console.log('***id inside isgenreExists inside genre.controller: ', id);
//         if (id === -1) {
//           return addGenreModel.add(g)
//           .then((id) => {
//             return id;
//           })
//           .catch((error) => {
//           console.log('error inside genre.controller inside add: ', error);
//           });
//         }
//         console.log('id inside genre.controller when genre exists is: ', id);
//         return id;
//       })
//       .catch((error) => {
//         console.log('error inside genre.controller inside isGameExists: ', error);
//         return error;
//       });
//     });
//   } return addGenreModel.isGenreExists(g)
//     .then((id) => {
//       console.log('***id inside isgenreExists inside genre.controller: ', id);
//       if (id === -1) {
//         return addGenreModel.add(g)
//         .then((id) => {
//           return id;
//         })
//         .catch((error) => {
//         console.log('error inside genre.controller inside add: ', error);
//         });
//       }
//       return id;
//     })
//     .catch((error) => {
//       console.log('error inside genre.controller inside isGameExists: ', error);
//       return error;
//     });
// };



exports.genre = {
  retrieve,
  add,
};

