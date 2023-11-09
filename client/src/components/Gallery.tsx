import ImageCard from "./ImageCard";
import { Image } from "../types/types";

export default function Gallery(props: GalleryProps) {
    function removePhoto(i: number) {
        props.updateImgList(props.imgList.filter((img, index) => index !== i));
    }

    return (
        <div className="flex flex-1 flex-wrap justify-around gap-y-4">
            {props.imgList.map((img, index) => {
                return (
                    <ImageCard
                        name={img.name}
                        url={img.url}
                        removePhoto={() => {
                            removePhoto(index);
                        }}
                    />
                );
            })}
        </div>
    );
}

interface GalleryProps {
    imgList: Image[];
    updateImgList: (newImgList: Image[]) => void;
}
