import { Storage } from "aws-amplify";
import React, { useEffect, useState } from "react";

export function S3(props) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    async function fetchImageUrl() {
      try {
        const url = await Storage.get(props.image);
        setImageUrl(url);
      } catch (err) {
        console.log("Error fetching image:", err);
      }
    }

    fetchImageUrl();
  }, [props.image]);

  return (
    <>
      <p>title={props.title}</p>
      <p>description={props.description}</p>
      {props.image && <img src={imageUrl} alt={props.title} />}
    </>
  );
}
