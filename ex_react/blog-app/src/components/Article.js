import blogImg from '../pictures/blog-image-1.jpg';

function Article() {
  return (
    <article>
      <p>11/12/20</p>
      <h2>On the Street in Brooklyn</h2>
      <img
        src={blogImg}
        alt=""
        style={{ width: "90%" }}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maiores
        sunt ipsam a tenetur exercitationem. Culpa distinctio quia aliquam, unde
        incidunt ipsum accusamus, sint quae odit magnam tempora, ea quo? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Nam maiores sunt
        ipsam a tenetur exercitationem. Culpa distinctio quia aliquam, unde
        incidunt ipsum accusamus, sint quae odit magnam tempora, ea quo? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Nam maiores sunt
        ipsam a tenetur exercitationem. Culpa distinctio quia aliquam, unde
        incidunt ipsum accusamus, sint quae odit magnam tempora, ea quo?
      </p>
    </article>
  );
}

export default Article;
