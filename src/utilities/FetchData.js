import { useEffect, useState } from "react";
import backup from "../data/backup.json";

export default function FetchData() {
  // Local state
  const [status, setStatus] = useState(0); // 0 = "loading", 1 = "data loaded", 2 = "error"
  const [data, setData] = useState([]);

  // Constants
  const DEBUG_MODE = true;
  const API_URL = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  // Methods
  useEffect(() => {
    fetch(API_URL, { mode: "cors" })
      .then((response) => response.json())
      .then((json) => onSuccess(json))
      .catch((error) => onFail(error));
  }, [setStatus, setData]);

  function onSuccess(json) {
    setData(json);
    setStatus(1);
  }

  function onFail() {
    if (DEBUG_MODE) {
      setData(backup);
      setStatus(1);
    } else {
      setStatus(2);
    }
  }

  return { status, data };
}
