import React, { useState, useEffect } from "react";
import "./index.css";
import api from "../../../api/index";

export default function Search() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        searchApi();
    }, []);

    async function searchApi() {
        try {
            const response = await api().get();
            setData(response.data);
            setSearchResult(response.data);
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        if (search === "") {
            setSearchResult([]);
            return;
        }

        const filteredData = data.filter(
            (d) =>
                d.title.toLowerCase().startsWith(search.toLowerCase())
        );
        setSearchResult(filteredData);
    }, [search, data]);

    return (
        <div>
            <input
                type="text"
                className="input-search"
                placeholder="O que está procurando?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul className="list-search">
                {searchResult.map((s) => (
                    <li 
                    key={s.id}
                    className="item-search"
                    >{s.title}</li>
                ))}
            </ul>
        </div>
    );
}
