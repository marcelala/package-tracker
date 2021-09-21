import { useEffect, useState } from "react";
import backup from "../data/backup.json";

export default function FetchData() {
  // Local state
  const [status, setStatus] = useState(0); // 0 = "loading", 1 = "data ok", 2 = "data error"
  const [data, setData] = useState([]);

  // Constants
  const DEBUG_MODE = false;
  const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  // Methods
  useEffect(() => {
    fetch(API_URL, { mode: "cors" })
      .then((response) => response.json())
      .then((json) => onSucess(json))
      .catch((error) => onFail(error));
  }, [setStatus, setData]);

  function onSucess(json) {
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
