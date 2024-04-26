import { useContext } from 'react';
import songContext from "../../contexts/songContext";


const SingleSongCard = ({songId, playSound}) => {
    const {songs, setCurrentSong} = useContext(songContext);
    const songInfo = songs.find(song => song.id === songId);

    console.log("**************");
    console.log(songInfo.name);

    return (
        <div
            className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-sm"
            onClick={() => {
                setCurrentSong(songInfo);
            }}
        >
            <div
                className="w-12 h-12 bg-cover bg-center"
                style={{
                    backgroundImage: `url("${songInfo.thumbnail}")`,
                }}
            ></div>
            <div className="flex w-full">
                <div className="text-white flex justify-center  flex-col pl-4 w-5/6">
                    <div className="cursor-pointer hover:underline">
                        {songInfo.name}
                    </div>
                    <div className="text-xs text-gray-400 cursor-pointer hover:underline">
                        {songInfo.artist.firstName + " " + songInfo.artist.lastName}
                    </div>
                </div>
                <div className="w-1/6 flex items-center justify-center text-gray-400 text-sm">
                    <div>3:44</div>
                </div>
            </div>
        </div>
    );
};

export default SingleSongCard;




