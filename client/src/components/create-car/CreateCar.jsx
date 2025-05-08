import CreateCarForm from "../Cars/CreateCarForm";

export default function CreateCar() {
  const [showCreate, setShowCreate] = useState(false);
  const showCreateHandler = () => {
    setShowCreate(true);
  };

  const closeCreateHandler = () => {
    setShowCreate(false);
  };

  const createCarHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const newCar = await carsService.createCar(formData);
    setCarsData((oldData) => [...oldData, newCar]);
    setShowCreate(false);
  };
  return (
    <div>
      {showCreate ? (
        <CreateCarForm
          onClose={closeCreateHandler}
          onCreate={createCarHandler}
        />
      ) : (
        <span
          className="btn btn-primary rounded-pill py-3 px-5 mt-3"
          onClick={showCreateHandler}
        >
          Create Car
        </span>
      )}
    </div>
  );
}
