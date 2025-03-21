import React from "react";
import TodoList from "@/components/TodoList";
import Header from "@/components/Header";
import styles from './page.module.css';


function App() {
  return (
    <div className={styles.container}>
      <Header />
      <TodoList />
    </div>
  );
}
export default App;

