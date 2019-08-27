import React from 'react';
function PlayerWidget({ result }) {
	const songUrl = result.url;
	const playerSrc = `https://w.soundcloud.com/player/?url=${songUrl}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
	if(songUrl){
		return(
			<div>
			<iframe
				width="100%"
				height="300"
				scrolling="no"
				title="player"
				allow="autoplay"
				src={playerSrc}
			/>
		</div>
		)
	}else{
		return(<div></div>)
	}
}

export default PlayerWidget;
