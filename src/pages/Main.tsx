import axios from "axios";
import React, { useEffect, useState } from "react";

import Search from "../components/Search";

const Main: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [genres, setGenres] = useState<string[]>([]);
  const [genre, setGenre] = useState<string>();
  const [bestBook, setBestBook] = useState<string>();
  const [checkoutImagePath, setCheckoutImagePath] = useState<string>();

  const handleSelectChange = (e: any) => {
    setGenre(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/api/get-all-genres`)
      .then((res: any) => setGenres(res.data))
      .catch((err) => console.log("err :>> ", err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    console.log(`genre`, genre);
    if (genre !== undefined) {
      setBestBook("");
      setLoading(true);
      axios
        .get(`http://localhost:5000/api/get-best-book/${genre}`)
        .then((res: any) => setBestBook(res.data))
        .catch((err) => console.log("err :>> ", err))
        .finally(() => setLoading(false));
    }
  }, [genre]);

  useEffect(() => {
    console.log(`bestBook`, bestBook);
    if (bestBook !== undefined) {
      setLoading(true);
      axios
        .get(`http://localhost:5000/api/get-checkout-screen/${bestBook}`)
        .then((res: any) => {
          const bufferData = res.data.data;
          setCheckoutImagePath(
            "data:image/jpeg;base64," +
              Buffer.from(bufferData).toString("base64")
          );
        })
        .catch((err) => console.log("err :>> ", err))
        .finally(() => setLoading(false));
    }
  }, [bestBook]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {genres.length !== 0 && (
        <Search genres={genres} onSelectChanged={handleSelectChange} />
      )}
      {bestBook && (
        <p>
          Best Book In {genre} Genre Is: {bestBook}{" "}
        </p>
      )}
      {checkoutImagePath && (
        <img src={checkoutImagePath} width={400} height={400} />
      )}
    </div>
  );
};

export default Main;
