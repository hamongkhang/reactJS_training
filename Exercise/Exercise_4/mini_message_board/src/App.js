import './App.css';
import Header from './Components/FormHeader/Header';
import InputAuthorName from './Components/FormInput/InputAuthorName';
import InputTitle from './Components/FormInput/InputTitle';
import InputMessage from './Components/FormInput/InputMessage';
import SubmitButton from './Components/FormButton/SubmitButton';
import DisplayAuthor from './Components/FormDisplay/FormDisplayAuthor';
import DisplayTitle from './Components/FormDisplay/DisplayTitle';
import DisplayMessage from './Components/FormDisplay/DisplayMessage';
import DisplayDate from './Components/FormDisplay/DisplayDate';
import { useState } from 'react';
import React from 'react';


function App() {
  const [authorName, setAuthorName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [post, setPost] = useState({});
  var current = new Date();
  const date = `${current.getFullYear()}-${(current.getMonth() + 1)}-${current.getDate()}`;

  const AddAuthorName = (event) => {
    setAuthorName(event.target.value);
    console.log(authorName);
  }

  const AddTitle = (event) => {
    setTitle(event.target.value);
    console.log(title);
  }

  const AddMessage = (event) => {
    setMessage(event.target.value);
    console.log(message);
  }

  const Submit = () => {
    var updatePost = {};
    updatePost = { tt: title, name: authorName, mess: message, date: date }
    setPost(post => ({
      ...post,
      ...updatePost
    }));
  }

  return (
    <div className="App">
      <center>
        <Header />
        <div className='Input'>
          <div className='Input_AuthorTitle'>
            <InputAuthorName AddAuthorName={AddAuthorName} />
            <InputTitle AddTitle={AddTitle} />
          </div>
          <div className='InputMessage'>
            <InputMessage AddMessage={AddMessage} />
          </div>
          <SubmitButton button="Submit" Submit={Submit} />
        </div>
        <div className='post'>
          <div className='tt'>
            <DisplayTitle post={post.tt} />
          </div>
          <div className='name'>
            <DisplayAuthor post={post.name} />
          </div>
          <div className='message'>
            <DisplayMessage post={post.mess} />
          </div>
          <div className='date'>
            <DisplayDate date={post.date} />
          </div>
        </div>
      </center>
    </div>
  );
}
export default App;