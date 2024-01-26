// create new Card component to replace wrapper
// for multiple elements within the "card" and "card-content"
function Card({ children }) {
    return (
      <div className="card">
        <div className="card-content">{children}</div>
      </div>
    );
  }
  
  // use Card component to prop "Photo" and "About" content
  // for cards passed as children to the Card component
  export default function Profile() {
    return (
      <div>
        <Card>
          <div>
            <h1>Photo</h1>
            <img
              className="avatar"
              src="https://i.imgur.com/OKS67lhm.jpg"
              alt="Aklilu Lemma"
              width={70}
              height={70}
            />
          </div>
        </Card>
        <Card>
          <div>
            <h1>About</h1>
            <p>
              Aklilu Lemma was a distinguished Ethiopian scientist who discovered
              a natural treatment to schistosomiasis.
            </p>
          </div>
        </Card>
      </div>
    );
  }
  
  //OLD
  // export default function Profile() {
  //   return (
  //     <div>
  //       <div className="card">
  //         <div className="card-content">
  //           <h1>Photo</h1>
  //           <img
  //             className="avatar"
  //             src="https://i.imgur.com/OKS67lhm.jpg"
  //             alt="Aklilu Lemma"
  //             width={70}
  //             height={70}
  //           />
  //         </div>
  //       </div>
  //       <div className="card">
  //         <div className="card-content">
  //           <h1>About</h1>
  //           <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  