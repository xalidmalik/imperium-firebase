import React from "react";
import SigninForm from "../../containers/Forms/SigninForm";

const Login = () => {
  return (
    <div className="flex">
      <div className="w-2/3 text-center items-center h-full m-auto">
        <h1 className="text-6xl font-bold">Hoş Geldiniz</h1>
      </div>
      <div className="w-1/3 flex p-8 h-screen bg-gray-300">
        <div className="my-auto w-full">
          <SigninForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
