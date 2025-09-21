import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";

export default function UnderConstruction() {
  return (
    <div className="container min-h-[60vh] flex flex-col justify-center items-center text-center p-6">
      <FontAwesomeIcon
        icon={faWrench}
        className="text-5xl text-primary-500 mb-4 animate-bounce"
      />
      <h2 className="text-2xl font-bold mb-2 text-gray-700">
        This page is under construction
      </h2>
      <p className="text-gray-500">
        We're working hard to bring you this feature soon. Stay tuned!
      </p>
    </div>
  );
}
