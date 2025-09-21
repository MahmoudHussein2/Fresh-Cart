import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { useOnlineStatus } from "../../Hooks/useOnlineStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OffLineScreen({ children }) {
  const { isOnline } = useOnlineStatus();

  if (!isOnline) {
    return (
      <>
        {children}

        <div class="fixed inset-0 flex items-end justify-center pb-10 pointer-events-none z-50">
          <div class="bg-red-700 text-white px-6 py-3 rounded-full shadow-lg animate-bounce">
            <p>
              <FontAwesomeIcon icon={faSignal} className="me-2" />
              check your internet Connections
            </p>
          </div>
        </div>
      </>
    );
  }

  return children;
}
