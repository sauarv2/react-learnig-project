import React from "react";

function card({ name, address = "put address" }) {
  return (
    <div>
      {" "}
      <figure classNameName="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 my-5">
        <img
          classNameName="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="https://images.pexels.com/photos/20002322/pexels-photo-20002322/free-photo-of-young-woman-in-warm-clothing-and-sunglasses-standing-outside-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          width="384"
          height="512"
        />
        <div classNameName="pt-6 md:p-8 text-center md: space-y-4">
          <blockquote>
            <p classNameName="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption classNameName="font-medium">
            <div classNameName="text-sky-500 dark:text-sky-400">{name}</div>
            <div classNameName="text-slate-700 dark:text-slate-500">
              {address}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default card;
