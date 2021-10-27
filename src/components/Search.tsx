import React from "react";

interface Props {
  genres: string[];
  onSelectChanged: any;
}

const Search: React.FC<Props> = ({ genres, onSelectChanged }) => {
  return (
    <select className="bg-red-50" onChange={onSelectChanged}>
      {genres.map((genre, idx) => (
        <option key={idx} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
};

export default Search;
