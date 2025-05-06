import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AppProvider } from "../context";

export const Stories = () => {

  const api = "https://hn.algolia.com/api/v1/search?query=html";
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fatchApiData = async () => {
    try {
      const res = await fetch(api);
      const data = await res.json();

      setLoading(false)

      setApiData(data);

    } catch (error) {
      console.log(error.message);

    }
  }

  useEffect(() => {
    fatchApiData();
  }, [])

  console.log(apiData);

  if (loading) {
    return (
      <>Loading...</>
    )
  }


  return <>
    <h2>My Tech News Post</h2>

    {

        apiData?.hits?.map((value, key) => {
          return (
            <div key={key}>
              { value.title}
            </div>
          )
        })
    }


  </>
}