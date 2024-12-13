import { useNavigate } from "react-router-dom";

export default function Country({ info }) {
  const {
    name: { common },
    population,
    region,
    capital,
    flags: { svg, alt },
  } = info;
  const navigate = useNavigate()
  return (
    <div 
    className="card bg-base-100 shadow-xl">
      <div 
      // onClick={()=>{navigate("/info")}} 
      className="card-body">
      <figure>
        <img
          className="w-full !min-h-[200px] object-cover"
          style={{
            height: "200px",
          }}
          src={svg}
          alt={alt}
        />
      </figure>
      <button type="submit"  className="card-title">{common}</button>

        <div>
          <p>
            <strong>Population:</strong> {population}
          </p>
          <p>
            <strong>Region:</strong> {region}
          </p>
          <p>
            <strong>Capital:</strong> {capital}
          </p>
        </div>
      </div>
     
    </div>
  );
}
