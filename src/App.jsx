import './App.css';
import ContactList from './ContactList';
import Post from './Post';

function formatName(user) {
	return `${user.firstName} ${user.lastName}`;
}

const user = {
	firstName: 'Michael',
	lastName: 'Kleemoff',
};

const peace = <h1>Peace Earth 🖖🌍. My name is {formatName(user)}!</h1>;

function App() {
	return (
		<div className='App'>
			{peace}
			<h2>Feed</h2>
			<Post />
			<Post />
			<ContactList />
		</div>
	);
}

export default App;
