const Addnumber = ({ add }) => {
  return (
    <p className="adnumber">
      ADVICE # <span>{add.slip.id}</span>
    </p>
  );
};

export default Addnumber;
