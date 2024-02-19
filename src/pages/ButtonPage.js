import Button from "../components/Button";
import { GoBellSlash } from "react-icons/go";

function ButtonPage() {
  return (
    <div className="App">
      <div>
        <Button primary outline className={'mb-5'}>click</Button>
      </div>
      <div>
        <Button><GoBellSlash/>click</Button>
      </div>
      <div>
        <Button secondary rounded outline>Buy Now!</Button>
      </div>
      <div>
        <Button success rounded>See Deal!</Button>
      </div>
      <div>
        <Button warning outline>Hide Adds</Button>
      </div>
      <div>
        <Button danger outline rounded>Something</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
