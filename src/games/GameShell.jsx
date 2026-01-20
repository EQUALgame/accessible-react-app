import './game-shell.css';

export default function GameShell({ children }) {
  return (
    <div className="games-scope">
      {children}
    </div>
  );
}