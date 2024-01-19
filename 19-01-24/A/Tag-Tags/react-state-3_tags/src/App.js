import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTags) {
    setTags([...tags,newTags])
  }

  function handleDeleteTag(deleteTag) {
    const del= tags.filter((elemet) => elemet !==deleteTag);
    setTags([del]);
  }
  return (
    <main className="app">
      <Form onAddTag={handleAddTag}/>

      <List tags={tags} onDeleteTag={handleDeleteTag}/>

    </main>
  );
}
