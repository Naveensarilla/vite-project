import logo from "./Screenshot_2024-01-04_105202-removebg-preview.png";

export const Landing = () => {
  return (
    <div className="container mx-auto sm:bg-red-500 md:bg-green-500 lg:bg-yellow-500 xl:bg-pink-500">
      <section className="flex items-center justify-between m-12 sm:bg-blue-500 sm:items-center">
        <img className=" max-w-80" src={logo} alt="" />
        <h2 className="text-custom ">...tutoring by grads from IIT/IISc <span>...tutoring by grads from IIT's/IISc</span></h2>
      </section>
    </div>
  );
};
