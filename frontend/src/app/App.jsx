import React from "react";
import "./App.css";
import { Editor } from "@monaco-editor/react";
const App = () => {
  return (
    <main className="h-screen w-full bg-gray-950 flex gap-4 p-3">
      <aside className="h-full w-1/5 bg-amber-200 rounded-md"></aside>

      <section className="h-full w-4/5 bg-amber-700 rounded-md overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue="// some comments"
          theme="vs-dark"
        />
      </section>
    </main>
  );
};

export default App;
