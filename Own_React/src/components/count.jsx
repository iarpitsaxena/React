function counter(){
    const [count, setCount] = useState(0)
    function handleDecrement() {
        setCount(count - 1)
    }
    function handleIncrement() {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}