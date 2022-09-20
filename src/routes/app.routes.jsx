import { Route, Routes } from "react-router-dom";

import { MovieCreate } from "../pages/MovieCreate";
import { Home } from "../pages/Home";
import { MoviePreview } from "../pages/MoviePreview";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movieCreate" element={<MovieCreate/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/moviePreview" element={<MoviePreview/>} />
        </Routes>
    )
}