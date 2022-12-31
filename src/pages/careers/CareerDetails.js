import { useLoaderData } from "react-router-dom";

const CareerDetails = () => {
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed
          sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!
        </p>
      </div>
    </div>
  );
};

export default CareerDetails;
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);
  if (!res.ok) throw Error("Couldn't  find this career");
  return res.json();
};
