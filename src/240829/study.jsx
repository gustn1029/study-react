import { useEffect, useState } from "react";
import ImageList from "./components/ImageList";
import useScoll from "./Hook/useScroll";
import { useLoading } from "./Context/loadingContext";

const Study = () => {
  const { isBottom, isScroll } = useScoll();
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(3);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://picsum.photos/v2/list?page=1&limit=${limit}`
        );

        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [limit, setIsLoading]);

  useEffect(() => {
    if (isBottom && isScroll) {
      setLimit((prev) => prev + 3);
    }
  }, [isBottom, isScroll]);

  return (
    <div>
      <h1>240829 강의</h1>
      <ImageList data={data} />
    </div>
  );
};

export default Study;
