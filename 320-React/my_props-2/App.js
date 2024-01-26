import { getImageUrl } from "./utils.js";

// retrieving imageSize from size prop
function Avatar({ person, size }) {
  // If size is less than 90, it uses small image ("s"),
  // else, it uses big image ("b").
  const imageSize = size < 90 ? "s" : "b";

  // avatar component converts getImageUrl call to determine imageSize
  // chooses imageSize based on size prop.
  return (
    <img
      className="avatar"
      src={getImageUrl(person, imageSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{
        name: "Gregorio Y. Zara",
        imageId: "7vQD0fP",
      }}
    />
  );
}

//OLD
// import { getImageUrl } from './utils.js';

// function Avatar({ person, size }) {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person, 'b')}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <Avatar
//       size={40}
//       person={{
//         name: 'Gregorio Y. Zara',
//         imageId: '7vQD0fP'
//       }}
//     />
//   );
// }
