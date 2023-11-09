import Tilt from "react-parallax-tilt";

export default function ImageCard(props: ImageCardProps) {
    return (
        <>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="h-64">
                        <img src={props.url} alt={props.name} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{props.name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    props.removePhoto();
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </Tilt>
        </>
    );
}

interface ImageCardProps {
    url: string;
    name: string;
    removePhoto: () => void;
}
