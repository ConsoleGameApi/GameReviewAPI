const addGenreModel = require('../model/add.genre.model.js');


const retrieve = () => {};

// check the control on how the result knows if it exists or not, the result.length thing may not be accurate. 

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

// const add = (genre) => {
//   console.log('genre inside genre.controller.js inside add: ', genre);
//   const genreArray = genre.genre.split(', ')
//   Promise.each(genreArray, (item) => {
//     return addGenreModel.isGenreExists(item)
//     .then((id) => {
//       console.log('id inside isgenreExists inside genre.controller: ', id);
//       if (id === -1) {
//         return addGenreModel.add(g)
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
//   });
// };

exports.genre = {
  retrieve,
  add,
};

