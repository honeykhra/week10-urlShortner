import { useState } from "react";

export default function GetShortUrl({ input, url }) {
  const [copy, setCopy] = useState(false);

  if (!url) return null;
  const shrtLink = url.result.short_link;
  const orgnLink = url.result.original_link;

  const CopyOnClick = () => {
    navigator.clipboard.writeText(shrtLink);
    navigator.clipboard.readText().then((clipText) => {
      // console.log(clipText);
      if (clipText === shrtLink) {
        setCopy(true);
      }
    });
  };
  // console.log(url.result.short_link);
  // console.log(url.result.original_link);
  return (
    <div className="getshorturl">
      <h2 className="original-link">{orgnLink}</h2>
      <div className="right">
        <h2 className="short-link">{shrtLink}</h2>
        <button onClick={() => CopyOnClick()}>
          {!copy ? "Copy" : "Copied"}
        </button>
      </div>
    </div>
  );
}
