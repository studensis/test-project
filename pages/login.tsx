import React, { useState, useEffect } from "react";
import data from "../components/data.json" assert { type: "JSON" };
import Home from "./index";
import { useRouter } from "next/router";
import { Button } from "../components/Button";

function Login() {
  const [username, setUsername] = useState<string>("");
  const router = useRouter();
  const [route, setRoute] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {}, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const studenti: any = data[0].studenti;
    const studentiFiltered: any = studenti.filter(
      (s: any) => e.target[0].value === s.username
    );
    const student: object = studentiFiltered[0];
    if (studentiFiltered.length < 1 || student.password !== e.target[1].value) {
      setError(true);
      e.target[1].value = "";
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <div className="bg-light-neutral-weak h-full w-[53%] absolute right-[47%] ">
        <div className="flex justify-center items-center h-full">
          <div>
            <h1 className="display2 mb-7">Log in</h1>
            <p className="body1 mb-3 ">Get accesss to xyz</p>
            <p className="body1 mb-3 ">Eat some pizza</p>
            <p className="body1 mb-3 ">Listen to music</p>
            <p className="body1 mb-3 ">Eat some pizza</p>
            <p className="body1 mb-3 ">Listen to music</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-full w-[47%] absolute left-[53%] ">
        <div className="flex items-center h-full">
          <div className="flex flex-col justify-start items-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-start items-center"
            >
              <div className="flex flex-col m-2 relative">
                <label
                  htmlFor="email"
                  className=" absolute caption top-[-0.4rem] left-3 w-10 text-center bg-white "
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className=" border-2 border-light-accent-weak rounded-xl lg:w-[480px] sm:w-[250px] hover:border-light-accent-medium focus:border-light-accent-medium transition-all ease-in outline-none px-3 py-4 "
                />
              </div>
              <div className="flex flex-col m-5 relative">
                <label
                  htmlFor="email"
                  className="absolute caption top-[-0.4rem] left-3 w-16 text-center bg-white "
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border-2 border-light-accent-weak rounded-xl lg:w-[480px] sm:w-[250px] hover:border-light-accent-medium focus:border-light-accent-medium transition-all ease-in outline-none px-3 py-4 "
                />
              </div>

              <Button
                outline={false}
                style={{ padding: "16px", width: "480px" }}
                className="mb-12"
              >
                <button type="submit">Log in with email</button>
              </Button>
            </form>
            <Button
              outline={true}
              style={{ padding: "16px", width: "480px" }}
              className="mb-4"
            >
              Log in with email
            </Button>
            <Button outline={true} style={{ padding: "16px", width: "480px" }}>
              Log in with email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
