import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setResults } from "../redux/features/searchSlice";
import { fetchPhotos, fetchVideos, fetchGifs } from "../api/mediaApi";
import ResultCart from "./ResultCart";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, error, loading, results } = useSelector(
    (state) => state.search,
  );

  const getData = async () => {
    let data;

    if (activeTab === "photos") {
      let response = await fetchPhotos(query);
      data = response.map((item) => ({
        id: item.id,
        type: "photo",
        title: item.alt_description,
        thumbnail: item.urls.small,
        src: item.urls.full,
      }));
    }

    if (activeTab === "videos") {
      let response = await fetchVideos(query);
      data = response.map((item) => ({
        id: item.id,
        type: "video",
        title: item.user?.name || "Video",
        thumbnail: item.image,
        src: item.video_files?.[0]?.link,
      }));
    }

    if (activeTab === "gifs") {
      let response = await fetchGifs(query);
      data = response.map((item) => ({
        id: item.id,
        type: "gif",
        title: item.title,
        thumbnail: item.images.fixed_height?.url || item.images.original?.url,
        src: item.images.original.url,
      }));
    }

    console.log(data);
    dispatch(setResults(data));
  };

  useEffect(() => {
    if (!query.trim()) return;

    getData();
  }, [query, activeTab]);

  if (error)
    return (
      <div className="flex justify-center items-center py-20 text-red-400 font-medium">
        Error loading results...
      </div>
    );
  if (loading)
    return (
      <div className="flex justify-center items-center py-20 text-gray-400 font-medium animate-pulse">
        Loading results...
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto w-full">
      {results.map((item) => {
        return <ResultCart key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ResultGrid;
