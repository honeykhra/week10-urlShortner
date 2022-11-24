import HashLoader from "react-spinners/HashLoader";

function Loader({ loading }) {
  return (
    <div className="loader">
      <HashLoader color="#382f50" loading={loading} size={100} />
    </div>
  );
}

export default Loader;
