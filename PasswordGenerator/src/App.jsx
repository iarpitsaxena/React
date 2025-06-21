import { useState, useCallback, useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) characters += "0123456789";
    if (charAllowed) characters += "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let index = 0; index < length; index++) {
      let char = Math.floor(Math.random() * characters.length);
      pass += characters.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password);
    passwordRef.current
      ?.writeText(password)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy password: ", err);
      });
  }, [password]);

  useEffect(() => {
    // Generate a password when the component mounts or when dependencies change
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
    <div className="h-screen w-screen bg-gray-900 flex justify-center items-center">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-red-500 bg-gray-800">
        <h1 className="text-center text-white my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3 rounded"
            placeholder="Password"
            readOnly
            ref={passwordRef} // Attach the ref to the input element
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-2 py-0.5 shrink-0 rounded"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 mb-5">
          <div className="flex items-center gap-x-1 mb-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
        <button
          className="w-full bg-green-700 text-white py-2 mt-4 rounded"
          onClick={passwordGenerator}
        >
          Generate Password
        </button>
      </div>
      </div>
    
    </>
  );
}

export default App;
