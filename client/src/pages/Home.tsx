import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import Gallery from "../components/Gallery";
import SearchBar from "../components/SearchBar";
import { Image } from "../types/types";

export default function Home() {
    const [imgList, setImgList] = useState<Image[]>([]);
    const [displayImgList, setDisplayImageList] = useState<Image[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8000/").then((response) => {
            setImgList(response.data);
            setDisplayImageList(response.data);
        });
    }, []);

    function updateImgList(newImgList: Image[]) {
        setImgList(newImgList);
        setDisplayImageList(newImgList);
    }

    function updateDisplayImgList(search: string) {
        if (search === "") {
            setDisplayImageList(imgList);
        } else {
            setDisplayImageList(
                imgList.filter((img) => img.name.toLowerCase().startsWith(search.toLowerCase()))
            );
        }
    }

    function addImage(name: string, url: string) {
        setImgList([...imgList, { name: name, url: url }]);
        setDisplayImageList([...displayImgList, { name: name, url: url }]);
    }

    return (
        <>
            <SearchBar updateDisplayImgList={updateDisplayImgList} addImage={addImage} />
            <div className="m-5 h-px border-solid border-2 border-white"></div>
            <Gallery imgList={displayImgList} updateImgList={updateImgList} />
        </>
    );
}
