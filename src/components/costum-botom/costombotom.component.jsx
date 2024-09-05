import './custom-button.styles.scss'
const Costombotom = ({children,...othersProps}) => {
  return (
    <div>
      <button className="custom-button" {...othersProps}>
        {children}
      </button>
    </div>
  );
};

export default Costombotom;
