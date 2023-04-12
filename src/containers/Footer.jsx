import React from "react";
import { Link } from "react-router-dom";
import LogoBar from "../components/LogoBar";

function Footer() {
  const [email, setEmail] = React.useState("");

  function handleChange(e) {
    setEmail(e.target.value);
  }
  return (
    <footer className="border-t-2 border-t-main-1">
      <LogoBar fontSize="text-2xl" />
      <div className="flex flex-col items-center md:flex-row md:justify-center md:items-start gap-10 max-w-7xl mx-auto mb-8">
        <div className="flex flex-col items-center gap-2 tracking-wider font-thin text-normal text-main-1">
          <Link to="/">Home</Link>
          <Link to="/shop-collection">Shop Collection</Link>
          <Link to="/our-story">Our Story</Link>
          <Link to="/contacts">Contact</Link>
        </div>
        <div className="flex w-1/3 justify-center gap-8">
          <button>
            <img className="w-6" src="/src/assets/fb_footer.svg" />
          </button>
          <button>
            <img className="w-6" src="/src/assets/ig_footer.svg" />
          </button>
          <button>
            <img className="w-6" src="/src/assets/p_footer.svg" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-2 tracking-wider font-thin text-normal text-main-1">
          <Link to="#">Shipping & Returns</Link>
          <Link to="policy">Store Policy</Link>
          <a href="/policy#payment">Payment Methods</a>
          <Link to="faq">FAQ</Link>
        </div>
      </div>
      <div className="text-center">
        <p className="font-thin tracking-widest text-xl mb-4">
          Join Our Mailing List
        </p>
        <form
          className="flex flex-col items-center md:flex-row md:justify-center gap-4 h-14 mb-20 md:mb-6"
          onSubmit={(e) => {
            e.preventDefault();
            setEmail("");
          }}
        >
          <input
            type="email"
            className="border border-main-1 h-full w-3/4 md:w-2/5 lg:w-1/5 py-3 px-6"
            placeholder="Enter your email here*"
            value={email}
            onChange={handleChange}
            required
          />
          <input
            className=" border px-6 py-3 h-full text-lg bg-main-1 focus:border-t-main-3 font-light text-main-2 hover:bg-main-3  hover:text-main-2 active:bg-main-1  active:text-main-2 transition-all duration-300"
            type="submit"
            value="Subscribe Now"
          />
        </form>
      </div>
      <p className="text-main-1 font-thin tracking-wider text-sm text-center pb-6">
        © 2035 by happy kids.
      </p>
    </footer>
  );
}

export default Footer;
