import postInfo from './data';

export default function Post() {
	return (
		<div>
			<h3>{postInfo.title}</h3>
			<img src={postInfo.imageLink} alt='post' width='200' height='200' />
			<p>{postInfo.description}</p>
		</div>
	);
}
