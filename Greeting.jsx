export default function Greeting({ isLoggedIn }) {
  return (
    <h2 style={{ color: isLoggedIn ? "green" : "red" }}>
      {isLoggedIn ? "خوش اومدی!" : "لطفاً وارد شو"}
    </h2>
  );
}
