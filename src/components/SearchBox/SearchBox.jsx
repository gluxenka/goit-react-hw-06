import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice.js";

export default function SearchBox() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.filters.searchTerm);

  return (
    <div className={css.SearchBox}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
