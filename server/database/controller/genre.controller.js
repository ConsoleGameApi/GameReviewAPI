const addGenreModel = require('../model/add.genre.model.js');


const retrieve = () => {};

const add = (genre) => {
  // console.log('genre inside genre.controller.js inside add: ', genre);
  return genre.genre.split(', ').map((g) => {
    return addGenreModel.isGenreExists(g)
    .then((id) => {
      // console.log('id inside isgenreExists inside genre.controller: ', id);
      if (id === -1) {
        return addGenreModel.add(g)
        .then((id) => {
          return id;
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
//   // return genre.genre.split(', ').map((genre) => {
//     return addGenreModel.isGenreExists(genre)
//     .then((id) => {
//       console.log('id inside isgenreExists inside genre.controller: ', id);
//       if (id === -1) {
//         return addGenreModel.add(genre)
//         .then((id) => {
//           return id;
//         })
//         .catch((error) => {
//         console.log('error inside genre.controller inside add: ', error);
//         });
//       } else {
//         return id;
//       }
//     })
//     .catch((error) => {
//       console.log('error inside genre.controller inside isGameExists: ', error);
//       return error;
//     });
//   // });
// };


exports.genre = {
  retrieve,
  add,
};

