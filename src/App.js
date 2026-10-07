export default function App() {
  function handleClick() {
    console.log("Ich wurde gefickt");
  }
  // Oprion 2 vom meinButton2 ist praktisch für Event Handler, welche nur eine Funktion ausführen sollen

  return (
    <div className="App">
      <button id="meinButton" onClick={handleClick}>
        Fick Mich
      </button>
      <button
        id="meinButton2"
        onClick={() => {
          console.log("Ich wurde auch gefickt");
        }}
      >
        Fick Mich auch
      </button>
      <input
        onChange={() => {
          console.log("Ich wurde geschändet");
        }}
        type="text"
      ></input>
      <input
        onChange={(event) => {
          console.log(event.target.value);
        }}
        type="text"
      ></input>
    </div>
  );
}
