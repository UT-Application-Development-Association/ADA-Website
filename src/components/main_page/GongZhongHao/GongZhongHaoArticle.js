import React from "react";

// Import data file
import articles from "./articles.json";

export default function GongZhongHaoArticle(props) {
	// id is the index of this article in articles.json
	const id = props.id;
	const info = articles[id];
	return (
		<article>
			<a href={info.href}>
				<img src={info.image} alt="Sample photo"></img>
			</a>
			<div className="MainText">
				<br></br>
				<h5>{info.title}</h5>
				<p>{info.subtitle}</p>
			</div>
		</article>
	);
}
