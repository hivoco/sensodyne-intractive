import { useSearchParams } from "react-router-dom";
import Interaction from "./Interaction";
import IOSInteraction from "./IOSInteraction";

const PlateformWisePages = () => {
  const [searchParams] = useSearchParams();
  const platform = searchParams.get("platform");
  return (
    <div>
      {platform == "iOS" ? (
        <IOSInteraction platform={platform} />
      ) : (
        <Interaction platform={platform} />
      )}
    </div>
  );
};

export default PlateformWisePages;
