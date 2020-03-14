import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";

const Home = () => (
  <div>
    <h1>Hello Norway!</h1>
    <Button>Kom i gang</Button>
    <Card>
      <h3>Kort</h3>
      <Input type="text" placeholder="Navn" label="Navn" />
    </Card>
  </div>
);

export default Home;
