import * as React from "react";

const navItems = [
  { label: "Dashboard", url: "#" },
  { label: "FAQ", url: "#" },
  { label: "Contact", url: "#" },
];

const socialIcons = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b374903b3b58f19a20b6f17412e6ef64138924ca84fc6958d2fc69c6506b998f?apiKey=89206080c3424bb49f51c7c3e49c6f3b&", alt: "Twitter" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/973ae2f4bac06b359363caa91c8fe840470c8c5a065f3d76266dc2c16e296983?apiKey=89206080c3424bb49f51c7c3e49c6f3b&", alt: "Facebook" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed46b9abb949e8a22ffc48b3d7a136e1ac7e46ec75a01a045e5cdf8f55d5534c?apiKey=89206080c3424bb49f51c7c3e49c6f3b&", alt: "Instagram" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/13a02d80b8bb97dfdba0b258be17959dd7ae5710974b47563f547fe30fd24d95?apiKey=89206080c3424bb49f51c7c3e49c6f3b&", alt: "LinkedIn" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e2ce7235ca0e4c6e3a232ba9d5446e48344031ec56f2183025799bad000a8cf?apiKey=89206080c3424bb49f51c7c3e49c6f3b&", alt: "YouTube" },
];

const Header = () => (
  <header className="flex flex-col w-full bg-white max-md:max-w-full">
    <div className="flex overflow-hidden relative flex-col gap-5 w-full min-h-[110px] max-md:flex-wrap max-md:max-w-full">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3451f31189bd28f151e4f81c7f80439a9a390de4215bcbfbb556854b1d64c4f?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="" className="object-cover absolute inset-0 size-full" />
      <div className="flex overflow-hidden relative flex-col justify-center items-center aspect-[0.91] w-[100px]">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1511d6ed1c7c094c7067b667e2d580f7294369fbfffa45c05c062ffae4ab213e?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="" className="object-cover absolute inset-0 size-full" />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9f15d2d4b9805c684c70135f05e2eaa5175667c244a447a7208a196bf3f7186?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Logo" className="w-full aspect-[0.91]" />
      </div>
      <nav className="flex relative flex-auto gap-5 pl-20 my-auto text-base leading-6 max-md:flex-wrap">
        <ul className="flex gap-5 justify-between my-auto text-white">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
          <li className="flex gap-1 justify-center">
            <span>Patient Data</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fda752d4b20b01dbb0e3dc10d54e95f457b6308cbfef41dc018d4ed032865d0f?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Arrow Down" className="shrink-0 w-6 aspect-square" />
          </li>
        </ul>
        <div className="flex gap-4 justify-center">
          <a href="#" className="justify-center px-5 py-2 text-white border border-white border-solid shadow-sm">
            Learn More
          </a>
          <a href="#" className="justify-center px-5 py-2 text-white bg-black border border-black border-solid">
            Sign Up
          </a>
        </div>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section className="flex overflow-hidden relative flex-col justify-center items-center p-2.5 w-full text-center text-white min-h-[200px] max-md:px-5 max-md:max-w-full">
    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9c09a570f3190ec8f82c1cdaa639531cc2e42196413afd5e32acb10f0bc76c0?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="" className="object-cover absolute inset-0 size-full" />
    <h1 className="relative text-6xl font-bold leading-[67.2px] max-md:max-w-full max-md:text-4xl">Log In</h1>
    <p className="relative mt-6 text-lg leading-7 max-md:max-w-full">
      Enter your credentials to access your account
    </p>
  </section>
);

const LoginForm = () => (
  <section className="flex flex-col self-center p-12 max-w-full text-base leading-6 border border-black border-solid w-[480px] max-md:px-5">
    <h2 className="text-5xl font-bold text-center text-black leading-[57.6px] max-md:text-4xl">Log In</h2>
    <p className="mt-6 text-lg text-center text-black">Enter your email address and password</p>
    <form>
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Email"
        className="justify-center p-3 mt-8 whitespace-nowrap bg-white border border-black border-solid text-stone-500"
      />
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        className="justify-center p-3 mt-4 whitespace-nowrap bg-white border border-black border-solid text-stone-500"
      />
      <button
        type="submit"
        className="justify-center items-center px-6 py-3 mt-4 text-white bg-black border border-black border-solid max-md:px-5"
      >
        Log In
      </button>
    </form>
    <hr className="shrink-0 mt-8 h-px bg-black border border-black border-solid" />
    <a href="#" className="self-center mt-10 text-center text-black underline">
      Forgot your password?
    </a>
    <div className="flex gap-1.5 self-center mt-4 mb-24 text-center text-black max-md:mb-10">
      <span>Don't have an account?</span>
      <a href="#" className="underline">
        Sign Up
      </a>
    </div>
  </section>
);

const ContactInfo = () => (
  <section className="self-center pb-6 mt-72 w-full max-w-[1312px] max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow px-5 text-base leading-6 text-center text-black max-md:mt-10 max-md:max-w-full">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/826a2c5311a186209812185d9aaff45808d3c505a13bf5563244efc109cafd9f?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Email Icon" className="self-center w-12 aspect-square" />
          <h3 className="mt-6 text-3xl font-bold leading-10 max-md:max-w-full">Email</h3>
          <p className="mt-4 max-md:max-w-full">Send us an email and we'll get back to you.</p>
          <a href="mailto:johndoe@st.ug.edu.gh" className="mt-6 text-black underline max-md:max-w-full">
            johndoe@st.ug.edu.gh
          </a>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow px-5 text-base leading-6 text-center text-black max-md:mt-10 max-md:max-w-full">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/05d8311d1d64212a2f7a19f8f155a9ec1d2dc873677c6266667c84c89e8a4933?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Phone Icon" className="self-center w-12 aspect-square" />
          <h3 className="mt-6 text-3xl font-bold leading-10 max-md:max-w-full">Phone</h3>
          <p className="mt-4 max-md:max-w-full">Give us a call during business hours.</p>
          <a href="tel:+233270000000" className="mt-6 text-black underline max-md:max-w-full">
            +233 27 000 0000
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="flex flex-col px-16 py-20 mt-20 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/933e22f40f786faf066e99d6cc3ce0ef9a0b015c9e4bc7d4ff342dca891bf6c0?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Logo" className="shrink-0 my-auto aspect-[2.33] w-[63px]" />
      <div className="flex gap-5 max-md:flex-wrap">
        <ul className="flex gap-5 justify-between items-start text-base font-semibold leading-6 text-black max-md:flex-wrap">
          <li>
            <a href="#">Homepage</a>
          </li>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Patient Diagnostics</a>
          </li>
          <li className="self-stretch leading-6">
            <a href="#">Spirometry Results</a>
          </li>
          <li>
            <a href="#">Patient Symptoms</a>
          </li>
        </ul>
        <ul className="flex flex-1 gap-3 pl-20 my-auto">
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <a href="#">
                <img src={icon.src} alt={icon.alt} className="shrink-0 w-6 aspect-square" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <hr className="shrink-0 mt-20 h-px bg-black border border-black border-solid max-md:mt-10 max-md:max-w-full" />
    <div className="flex gap-5 justify-between self-center mt-8 text-sm leading-5 max-md:flex-wrap">
      <p className="text-black">© 2024 King&Eben. All rights reserved.</p>
      <ul className="flex gap-5 justify-between text-black">
        <li>
          <a href="#" className="underline">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="underline">
            Terms of Service
          </a>
        </li>
        <li>
          <a href="#" className="underline">
            Cookies Settings
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

function MyComponent() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <Hero />
        <LoginForm />
      </main>
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default MyComponent;

/**
 * Header component
 * @returns {JSX.Element} Header component JSX
 */ const Header = () => { /**
 * Handle patient data click event
 */ const handlePatientDataClick = () => { console.log("Patient data clicked"); }; return ( <header className="flex flex-col w-full bg-white max-md:max-w-full"> <div className="flex overflow-hidden relative flex-col gap-5 w-full min-h-[110px] max-md:flex-wrap max-md:max-w-full"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3451f31189bd28f151e4f81c7f80439a9a390de4215bcbfbb556854b1d64c4f?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="" className="object-cover absolute inset-0 size-full" /> <div className="flex overflow-hidden relative flex-col justify-center items-center aspect-[0.91] w-[100px]"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1511d6ed1c7c094c7067b667e2d580f7294369fbfffa45c05c062ffae4ab213e?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="" className="object-cover absolute inset-0 size-full" /> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9f15d2d4b9805c684c70135f05e2eaa5175667c244a447a7208a196bf3f7186?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Logo" className="w-full aspect-[0.91]" /> </div> <nav className="flex relative flex-auto gap-5 pl-20 my-auto text-base leading-6 max-md:flex-wrap"> <ul className="flex gap-5 justify-between my-auto text-white"> {navItems.map((item, index) => ( <li key={index}> <a href={item.url}>{item.label}</a> </li> ))} <li> <button onClick={handlePatientDataClick} className="flex gap-1 justify-center" > <span>Patient Data</span> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fda752d4b20b01dbb0e3dc10d54e95f457b6308cbfef41dc018d4ed032865d0f?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Arrow Down" className="shrink-0 w-6 aspect-square" /> </button> </li> </ul> <div className="flex gap-4 justify-center"> <a href="#" className="justify-center px-5 py-2 text-white border border-white border-solid shadow-sm" > Learn More </a> <a href="#" className="justify-center px-5 py-2 text-white bg-black border border-black border-solid" > Sign Up </a> </div> </nav> </div> </header> );
}; /**
 * Hero component
 * @returns {JSX.Element} Hero component JSX
 */ const Hero = () => ( <section className="flex overflow-hidden relative flex-col justify-center items-center p-2.5 w-full text-center text-white min-h-[200px] max-md:px-5 max-md:max-w-full"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9c09a570f3190ec8f82c1cdaa639531cc2e42196413afd5e32acb10f0bc76c0?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="" className="object-cover absolute inset-0 size-full" /> <h1 className="relative text-6xl font-bold leading-[67.2px] max-md:max-w-full max-md:text-4xl">Log In</h1> <p className="relative mt-6 text-lg leading-7 max-md:max-w-full"> Enter your credentials to access your account </p> </section>
); /**
 * LoginForm component
 * @returns {JSX.Element} LoginForm component JSX
 */ const LoginForm = () => { /**
 * Handle form submission
 * @param {React.FormEvent<HTMLFormElement>} event - Form submit event
 */ const handleSubmit = (event) => { event.preventDefault(); console.log("Form submitted"); }; /**
 * Handle forgot password click event
 */ const handleForgotPasswordClick = () => { console.log("Forgot password clicked"); }; /**
 * Handle sign up click event
 */ const handleSignUpClick = () => { console.log("Sign up clicked"); }; return ( <section className="flex flex-col self-center p-12 max-w-full text-base leading-6 border border-black border-solid w-[480px] max-md:px-5"> <h2 className="text-5xl font-bold text-center text-black leading-[57.6px] max-md:text-4xl">Log In</h2> <p className="mt-6 text-lg text-center text-black">Enter your email address and password</p> <form onSubmit={handleSubmit}> <label htmlFor="email" className="sr-only"> Email </label> <input type="email" id="email" placeholder="Email" className="justify-center p-3 mt-8 whitespace-nowrap bg-white border border-black border-solid text-stone-500" /> <label htmlFor="password" className="sr-only"> Password </label> <input type="password" id="password" placeholder="Password" className="justify-center p-3 mt-4 whitespace-nowrap bg-white border border-black border-solid text-stone-500" /> <button type="submit" className="justify-center items-center px-6 py-3 mt-4 text-white bg-black border border-black border-solid max-md:px-5" > Log In </button> </form> <hr className="shrink-0 mt-8 h-px bg-black border border-black border-solid" /> <button onClick={handleForgotPasswordClick} className="self-center mt-10 text-center text-black underline" > Forgot your password? </button> <div className="flex gap-1.5 self-center mt-4 mb-24 text-center text-black max-md:mb-10"> <span>Don't have an account?</span> <button onClick={handleSignUpClick} className="underline" > Sign Up </button> </div> </section> );
}; /**
 * ContactInfo component
 * @returns {JSX.Element} ContactInfo component JSX
 */ const ContactInfo = () => ( <section className="self-center pb-6 mt-72 w-full max-w-[1312px] max-md:mt-10 max-md:max-w-full"> <div className="flex gap-5 max-md:flex-col max-md:gap-0"> <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"> <div className="flex flex-col grow px-5 text-base leading-6 text-center text-black max-md:mt-10 max-md:max-w-full"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/826a2c5311a186209812185d9aaff45808d3c505a13bf5563244efc109cafd9f?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Email Icon" className="self-center w-12 aspect-square" /> <h3 className="mt-6 text-3xl font-bold leading-10 max-md:max-w-full">Email</h3> <p className="mt-4 max-md:max-w-full">Send us an email and we'll get back to you.</p> <a href="mailto:johndoe@st.ug.edu.gh" className="mt-6 text-black underline max-md:max-w-full" > johndoe@st.ug.edu.gh </a> </div> </div> <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"> <div className="flex flex-col grow px-5 text-base leading-6 text-center text-black max-md:mt-10 max-md:max-w-full"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/05d8311d1d64212a2f7a19f8f155a9ec1d2dc873677c6266667c84c89e8a4933?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Phone Icon" className="self-center w-12 aspect-square" /> <h3 className="mt-6 text-3xl font-bold leading-10 max-md:max-w-full">Phone</h3> <p className="mt-4 max-md:max-w-full">Give us a call during business hours.</p> <a href="tel:+233270000000" className="mt-6 text-black underline max-md:max-w-full" > +233 27 000 0000 </a> </div> </div> </div> </section>
); /**
 * Footer component
 * @returns {JSX.Element} Footer component JSX
 */ const Footer = () => ( <footer className="flex flex-col px-16 py-20 mt-20 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full"> <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full"> <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/933e22f40f786faf066e99d6cc3ce0ef9a0b015c9e4bc7d4ff342dca891bf6c0?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Logo" className="shrink-0 my-auto aspect-[2.33] w-[63px]" /> <div className="flex gap-5 max-md:flex-wrap"> <ul className="flex gap-5 justify-between items-start text-base font-semibold leading-6 text-black max-md:flex-wrap"> <li> <a href="#">Homepage</a> </li> <li> <a href="#">Dashboard</a> </li> <li> <a href="#">Patient Diagnostics</a> </li> <li className="self-stretch leading-6"> <a href="#">Spirometry Results</a> </li> <li> <a href="#">Patient Symptoms</a> </li> </ul> <ul className="flex flex-1 gap-3 pl-20 my-auto"> {socialIcons.map((icon, index) => ( <li key={index}> <a href="#"> <img src={icon.src} alt={icon.alt} className="shrink-0 w-6 aspect-square" /> </a> </li> ))} </ul> </div> </div> <hr className="shrink-0 mt-20 h-px bg-black border border-black border-solid max-md:mt-10 max-md:max-w-full" /> <div className="flex gap-5 justify-between self-center mt-8 text-sm leading-5 max-md:flex-wrap"> <p className="text-black">© 2024 King&Eben. All rights reserved.</p> <ul className="flex gap-5 justify-between text-black"> <li> <a href="#" className="underline"> Privacy Policy </a> </li> <li> <a href="#" className="underline"> Terms of Service </a> </li> <li> <a href="#" className="underline"> Cookies Settings </a> </li> </ul> </div> </footer>
); /**
 * MyComponent component
 * @returns {JSX.Element} MyComponent component JSX
 */ function MyComponent() { return ( <div className="flex flex-col"> <Header /> <main> <Hero /> <LoginForm /> </main> <ContactInfo /> <Footer /> </div> );
} export default MyComponent;      <div className="flex gap-5 max-md:flex-wrap">