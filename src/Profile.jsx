import Card from "./Card";
import Button from "./Button";

function Profile() {
  return (
    <Card>
      <h2 className="text-xl font-bold">Laila Alaa</h2>
      <p className="text-gray-300">Frontend Developer</p>

      <p className="mt-2 text-sm">
        Passionate about React and building UI components.
      </p>

      <div className="mt-4">
        <Button text="Follow" />
      </div>
    </Card>
  );
}

export default Profile;