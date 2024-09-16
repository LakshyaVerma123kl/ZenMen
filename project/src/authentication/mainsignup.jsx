import SignUptemplate from "./signup";

const Signup = () => {
  return (
    <div className="flex flex-wrap w-full h-full max-sm:space-y-0">
      <div className="w-[45%] max-sm:hidden text-left h-full p-10 bg-[url('./assets/photo.avif')] bg-cover bg-no-repeat">
        <h1 className="font-[Forte] text-[1.8rem] mb-8 font-light">Zen-Men</h1>
      </div>

      <div className="flex justify-end w-[55%] max-sm:w-full max-sm:h-auto h-full px-5 py-5">
        <SignUptemplate />
      </div>
    </div>
  );
};

export default Signup;
