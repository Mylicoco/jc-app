import './custom-button.styles.scss'
const Costombotom = ({children,color,...othersProps}) => {
  return (
    <div>
      <button
        className="custom-button"
        style={{ backgroundColor:color  }}
        {...othersProps}
      >
        {children}
      </button>
    </div>
  );
};

export default Costombotom;
