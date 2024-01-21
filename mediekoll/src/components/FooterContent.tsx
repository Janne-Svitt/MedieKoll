import medieKollIcon from "../image/MedieKoll_Icon.png";

interface IFooterContentProps {
  darkModeFooter: string;
}

export const FooterContent = (props: IFooterContentProps) => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: props.darkModeFooter,
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={medieKollIcon} alt="" style={{ height: "40px" }} />
      <p style={{ margin: "0 0 0 0.5rem" }}>MedieKoll</p>
    </footer>
  );
};
