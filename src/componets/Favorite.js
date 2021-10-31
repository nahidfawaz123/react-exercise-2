import { useState } from "react";
import broken from "./broken.png"
import heart from "./heart.png"
function Favorite({list, setList ,element}) {
  const [fav, setFav] = useState(0)
  const [image, setImage] = useState(broken)

  const changeicon =()=>{
    if(fav == 0){
        setImage(heart)
      setFav(fav+1)
    }else {
        setImage(broken)
      setFav(fav-1)
    }
  }
  console.log(fav);
  return (
          <div className="Fav">
            <input type="image" src={image} name="submit" onClick={changeicon} alt="submit"/>
          </div>
  );
}

export default Favorite;