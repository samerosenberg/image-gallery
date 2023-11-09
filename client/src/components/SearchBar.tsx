import axios from "axios";
import { FormEvent } from "react";

export default function SearchBar(props: SearchBarProps) {
    function openModal() {
        const modal = document.getElementById("upload_modal") as HTMLDialogElement;
        modal.showModal();
    }

    function hideModal() {
        const modal = document.getElementById("upload_modal") as HTMLDialogElement;
        modal.close();
    }

    function uploadImage(e: React.SyntheticEvent) {
        const target = e.target as typeof e.target & {
            name: { value: string };
            url: HTMLInputElement;
        };
        const formdata = new FormData();
        if (target.url.files) {
            formdata.append("photo", target.url.files[0]);
        }
        axios.post("/upload", formdata).then((response) => {
            props.addImage(target.name.value, response.data);
        });
    }

    return (
        <>
            <div className="flex flex-1">
                <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered input-primary w-full max-w-xs ml-10"
                    onChange={(e) => {
                        props.updateDisplayImgList(e.target.value);
                    }}
                />
                <button
                    className="ml-auto mr-10 btn btn-outline btn-primary"
                    onClick={() => {
                        openModal();
                    }}
                >
                    Upload Image
                </button>
            </div>
            <dialog id="upload_modal" className="modal">
                <div className="modal-box">
                    <form
                        method="dialog"
                        onSubmit={(e) => {
                            uploadImage(e);
                        }}
                    >
                        <h3 className="font-bold text-lg mb-5">Upload Image</h3>
                        <div className="form-control w-full max-w-xs mb-10">
                            <label className="label">
                                <span className="label-text">Image Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                required
                            />
                        </div>
                        <input
                            type="file"
                            name="url"
                            className="file-input file-input-bordered w-full max-w-xs"
                            required
                        />
                        <div className="modal-action">
                            <button className="btn mr-2" type="submit">
                                Upload
                            </button>
                            <button
                                className="btn btn-secondary"
                                type="button"
                                onClick={() => {
                                    hideModal();
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
}

interface SearchBarProps {
    updateDisplayImgList: (search: string) => void;
    addImage: (name: string, url: string) => void;
}
