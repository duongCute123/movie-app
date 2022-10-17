import React from "react";
import { Component } from "react";
import { useState, useEffect } from "react";
import HomePage from "../HomePage/HomePage";
import { BrowserRouter, Route, Router, Routes, NavLink, Link } from "react-router-dom"
const NavBar = () => (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <a class="navbar-brand" href="#">DuongMoVies</a>

        <ul class="navbar-nav">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    Movies
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Phim nổi tiếng</a>
                    <a class="dropdown-item" href="#">Top Phim</a>
                    <a class="dropdown-item" href="#">Phim sắp có</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    TvShows
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">TvShow nổi tiếng</a>
                    <a class="dropdown-item" href="#">Top TvShow</a>
                    <a class="dropdown-item" href="#">TvShow sắp diễn ra</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    PeoPle
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Người nổi tiếng</a>
                </div>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                    More
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Thảo luận</a>
                    <a class="dropdown-item" href="#">Bảng xếp hạng phim</a>
                    <a class="dropdown-item" href="#">Danh sách tin tức</a>
                </div>
            </li>
            {/* <li>
                <form class="form-inline" action="/action_page.php">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button class="btn btn-success" type="submit">Search</button>
                </form>
            </li> */}
        </ul>
    </nav>
)
const MenuPage = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default MenuPage