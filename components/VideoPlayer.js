import React from "react";
import {PlayIcon, playIcon} from "@heroicons/react/solid"

function VideoPlayer() {
  return (
    <div className="bg-[url('/background/video-bg.png')] rounded-full bg-no-repeat w-[447px] h-[447px] bg-auto flex items-center justify-center">
      <button className="w-[96px] h-[96px] text-white hover:text-orange-600 rounded-full bg-orange-600 hover:p-4 hover:bg-white hover:border hover:border-orange-600">
          <PlayIcon className="h-12 w-12 mx-auto"/>
      </button>
    </div>
  );
}

export default VideoPlayer;
