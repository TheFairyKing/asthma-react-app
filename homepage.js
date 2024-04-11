import React from "react";

const navItems = [
  { label: "Dashboard", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contact", href: "#" },
  {
    label: "Patient Data",
    href: "#",
    icon: "{{ext_20}}",
  },
];

const contactInfo = [
  {
    title: "Email",
    description: "Send us an email and we'll get back to you.",
    contact: "johndoe@st.ug.edu.gh",
    icon: "{{ext_21}}",
  },
  {
    title: "Phone",
    description: "Give us a call during business hours.",
    contact: "+233 27 000 0000",
    icon: "{{ext_22}}",
  },
];

const footerLinks = [
  "Homepage",
  "Dashboard",
  "Patient Diagnostics",
  "Spirometry Results",
  "Patient Symptoms",
];

const socialIcons = [
  "{{ext_23}}",
  "{{ext_24}}",
  "{{ext_25}}",
  "{{ext_26}}",
  "{{ext_27}}",
];

function Header() {
  return (
    <header className="flex flex-col w-full bg-white max-md:max-w-full">
      <div className="flex overflow-hidden relative flex-col gap-0 items-center px-5 min-h-[110px] max-md:flex-wrap">
        <img
          loading="lazy"
          src="{{ext_28}}"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch aspect-[0.91] w-[100px]">
          <img
            loading="lazy"
            src="{{ext_29}}"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <img
            loading="lazy"
            src="{{ext_30}}"
            alt=""
            className="w-full aspect-[0.91]"
          />
        </div>
        <img
          loading="lazy"
          src="{{ext_31}}"
          alt=""
          className="shrink-0 self-stretch my-auto border border-white border-solid aspect-[2.33] stroke-[1px] stroke-white w-[63px]"
        />
        <nav className="flex relative gap-5 self-stretch pl-20 my-auto text-base leading-6 max-md:flex-wrap">
          <ul className="flex gap-5 justify-between my-auto text-white">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.icon ? (
                  <a href={item.href} className="flex gap-1 justify-center">
                    {item.label}
                    <img
                      loading="lazy"
                      src={item.icon}
                      alt=""
                      className="shrink-0 w-6 aspect-square"
                    />
                  </a>
                ) : (
                  <a href={item.href}>{item.label}</a>
                )}
              </li>
            ))}
          </ul>
          <div className="flex gap-4 justify-center">
            <button className="justify-center px-5 py-2 text-white border border-white border-solid shadow-sm">
              Learn More
            </button>
            <button className="justify-center px-5 py-2 text-white bg-black border border-black border-solid">
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="flex overflow-hidden relative flex-col items-start px-14 py-20 w-full text-white min-h-[915px] max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="{{ext_32}}"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <h1 className="relative mt-52 text-6xl font-bold leading-[77px] w-[841px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
        Transforming Asthma Diagnosis and Detection
      </h1>
      <p className="relative mt-6 text-2xl leading-9 w-[841px] max-md:max-w-full">
        Welcome to our medical web app designed for accurate and efficient
        asthma diagnosis and detection.
      </p>
      <div className="flex relative gap-4 items-start pt-4 mt-6 mb-36 text-base leading-6 max-md:mb-10">
        <button className="justify-center px-6 py-3 whitespace-nowrap bg-black border border-black border-solid max-md:px-5">
          Login
        </button>
        <button className="justify-center px-6 py-3 border border-white border-solid max-md:px-5">
          Sign Up
        </button>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="flex flex-col justify-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="mt-8 mb-2.5 max-md:mr-1 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
            >
              <div className="flex flex-col grow text-base leading-6 text-center text-black max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src={info.icon}
                  alt=""
                  className="self-center w-12 aspect-square"
                />
                <h3 className="mt-6 text-3xl font-bold leading-10 max-md:max-w-full">
                  {info.title}
                </h3>
                <p className="mt-4 max-md:max-w-full">{info.description}</p>
                <a
                  href="#"
                  className="mt-6 text-black underline max-md:max-w-full"
                >
                  {info.contact}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col px-16 py-20 mt-64 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="{{ext_33}}"
          alt=""
          className="shrink-0 my-auto aspect-[2.33] w-[63px]"
        />
        <div className="flex gap-5 max-md:flex-wrap">
          <ul className="flex gap-5 justify-between items-start text-base font-semibold leading-6 text-black max-md:flex-wrap">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
          <div className="flex flex-1 gap-3 pl-20 my-auto">
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                loading="lazy"
                src={icon}
                alt=""
                className="shrink-0 w-6 aspect-square"
              />
            ))}
          </div>
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
}

function MyComponent() {
  const handleLearnMoreClick = () => {
    console.log("Learn More button clicked");
  };

  const handleSignUpClick = () => {
    console.log("Sign Up button clicked");
  };

  const handleLoginClick = () => {
    console.log("Login button clicked");
  };

  return (
    <div className="flex flex-col">
      <Header
        onLearnMoreClick={handleLearnMoreClick}
        onSignUpClick={handleSignUpClick}
      />
      <Hero onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default MyComponent;