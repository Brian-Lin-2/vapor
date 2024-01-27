import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";

export default function ProductInfo() {
  const [info, setInfo] = useState(null);

  useEffect(() => {}, []);

  if (!info) {
    return <Loading />;
  }
}
