import { connect } from "react-redux";
import { buyCake } from "../redux/cakeReducer";

function CakeContainer(props) {
  return (
    <div>
      <h2>number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numOfCakes: state.numberOfCake,
});

const mapDispatchToProps = {
  buyCake,
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
