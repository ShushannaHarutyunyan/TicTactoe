import GameState from "./GameState";

function Reset ({gameState, onReset}){
    if (gameState === GameState.inProgres){
        return;
    }
    return <button className="reset-button" onClick={onReset}>Rest</button>
}
export default Reset;
