/** Libraries */
import React from 'react';
import Linkify from 'react-linkify';

/**
 * I could not figure out in time how to
 * convert linkify user mentions as well
 * as URLs all in one tweet. Hopefully,
 * after submitting the test, I'll fix it!
 */
// const convertHandlesToLinks = (text, entities) => {
// 	if (!entities.user_mentions) {
// 		return text;
// 	}

// 	return entities.user_mentions.reduce((reduction, userMention) => {
// 		return reduction.replace(
// 			`@${userMention.screen_name}`,
// 			`<a href="${`https://twitter.com/${
// 				userMention.screen_name
// 			}`}" target="_blank" rel="noopener noreferrer">@${
// 				userMention.screen_name
// 			}</a>`
// 		);
// 	}, text);
// };

export const getLinkifyComponent = (text, entities) => {
	return (
		<p>
			<Linkify properties={{ target: '_blank', rel: 'noopener noreferrer' }}>
				{text}
			</Linkify>
		</p>
	);
};
