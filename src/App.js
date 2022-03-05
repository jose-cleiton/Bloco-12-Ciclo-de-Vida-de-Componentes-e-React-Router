import "./styles.css";

export default function App() {
  return (
    <div className="main">
      <ComponentePai>
        <p>SUPIMPA</p>
        <h1>BACANA</h1>
        <span>INCRÍVEL</span>
      </ComponentePai>
    </div>
  );
}
const ComponentePai = (props) => {
  const { children } = props;
  return (
    <div>
      {children}
      {children}
    </div>
  );
};
