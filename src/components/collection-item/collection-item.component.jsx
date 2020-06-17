import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        {" "}
        Add to cart
      </CustomButton>
    </div>
  );
};

// Making a new function that is a prop called addItem that will go into our
// CollectionItem as the addItem function. Whenver we dispatch / or use this function,
// function will receive item as the property, pass it into addItem action creator,
// which returns an object where the type is ADD_ITEM and payload is item. We will dispatch
// that item into store.
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
