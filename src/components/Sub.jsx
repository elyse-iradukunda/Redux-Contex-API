import { useDispatch, useSelector } from "react-redux";
import { subScribe } from "../features/Subscribe";

export default function Sub() {

  const dispatch = useDispatch();

  const isSubscribed = useSelector((state) => state.subscribe.isSubscribed);

  return (
    <>
      <button type="button" onClick={() => dispatch(subScribe())}>
        {isSubscribed ? "subscribed" : "subscribe"}
      </button>
    </>
  );
}