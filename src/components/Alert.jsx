const Alert = ({ text, type }) => {
  return (
    <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
      <div
        className={`${
          type == "danger" ? "bg-red-800" : "bg-blue-800"
        } p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center`}
      >
        <p
          className={`${
            type == "danger" ? "bg-red-500" : "bg-blue-500"
          } flex rounded-full uppercase px-2 py-1 text-xs font-semibold mr-3 items-center lg:my-auto lg:mx-3`}
        >
          {type == "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left items-center"> {text} </p>
      </div>
    </div>
  );
};

export default Alert;
