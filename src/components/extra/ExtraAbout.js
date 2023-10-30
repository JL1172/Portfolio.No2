import { Pagination } from "@mui/material";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function ExtraAbout() {
    const {currentPage,changePage} = useContext(GlobalContext);
    return (
        <Pagination className= "hidden-page" id="pageCount" count={3} page={currentPage} onChange={(e) => changePage(e)} defaultPage={1} variant="outlined" />
    )
}