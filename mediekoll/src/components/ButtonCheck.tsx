// Berättar för typescript vad det är för types som ska skickas in i komponenten
interface IButtonCheckProps {
  onClick: () => void;
  darkmode: string;
  darkmodeicon: string;
}

// Komponenten som ska användas i App.tsx
export function ButtonCheck(props: IButtonCheckProps) {
  return (
    <>
      <button
        onClick={() => {
          props.onClick();
        }}
      >
        tryck på mig
      </button>
      <h1>{props.darkmode}</h1>
      <h2>{props.darkmodeicon}</h2>
    </>
  );
}
