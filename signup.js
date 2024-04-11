/**
 * Navigation item component
 * @param {Object} props - Component props
 * @param {string} props.label - Navigation item label
 * @param {string} props.href - Navigation item link
 */
const NavItem = ({ label, href }) => (
  <a href={href} className="text-white">
    {label}
  </a>
);

/**
 * Header
 */
const Header = () => {
  const navItems = [
    { label: "Dashboard", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <header className="flex overflow-hidden relative flex-col gap-5 w-full min-h-[110px] max-md:flex-wrap max-md:max-w-full">
      <img
        loading="lazy"
        src="{{ext_28}}"
        className="object-cover absolute inset-0 size-full"
        alt=""
      />
      <div className="flex overflow-hidden relative flex-col justify-center items-center aspect-[0.91] w-[100px]">
        <img
          loading="lazy"
          src="{{ext_29}}"
          className="object-cover absolute inset-0 size-full"
          alt=""
        />
        <img
          loading="lazy"
          src="{{ext_30}}"
          className="w-full aspect-[0.91]"
          alt=""
        />
      </div>
      <nav className="flex relative flex-auto gap-5 pl-20 my-auto text-base leading-6 max-md:flex-wrap">
        <div className="flex gap-5 justify-between my-auto text-white">
          {navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
          <div className="flex gap-1 justify-center">
            <div>Patient Data</div>
            <img
              loading="lazy"
              src="{{ext_31}}"
              className="shrink-0 w-6 aspect-square"
              alt=""
            />
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <a
            href="#"
            className="justify-center px-5 py-2 text-white border border-white border-solid shadow-sm"
          >
            Learn More
          </a>
          <a
            href="#"
            className="justify-center px-5 py-2 text-white bg-black border border-black border-solid"
          >
            Sign Up
          </a>
        </div>
      </nav>
    </header>
  );
};

/**
 * Hero section component
 */
const Hero = () => (
  <section className="flex overflow-hidden relative flex-col justify-center items-center p-2.5 w-full text-center text-white min-h-[200px] max-md:px-5 max-md:max-w-full">
    <img
      loading="lazy"
      src="{{ext_32}}"
      className="object-cover absolute inset-0 size-full"
      alt=""
    />
    <h1 className="relative text-6xl font-bold leading-[67.2px] max-md:max-w-full max-md:text-4xl">
      Sign Up
    </h1>
    <p className="relative mt-6 text-lg leading-7 max-md:max-w-full">
      Create an account to access the full features of our medical web app.
    </p>
  </section>
);

/**
 * Form field component
 * @param {Object} props - Component props
 * @param {string} props.label - Field label
 * @param {string} [props.type="text"] - Field type
 */
const FormField = ({ label, type = "text" }) => (
  <div className="flex flex-col flex-1">
    <label htmlFor={label} className="text-base leading-6 text-black">
      {label}
    </label>
    <input
      type={type}
      id={label}
      className="shrink-0 mt-2 h-12 bg-white border border-black border-solid"
    />
  </div>
);

/**
 * Sign up form component
 */
const SignUpForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="flex justify-center items-center px-16 py-6 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[768px]">
        <h2 className="self-center text-5xl font-bold text-center text-black leading-[57.6px] max-md:text-4xl">
          Sign Up Form
        </h2>
        <p className="self-center mt-6 text-lg leading-7 text-center text-black">
          Enter your credentials to create your account
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 text-base leading-6 text-black max-md:flex-wrap">
            <FormField label="Name (Surname, First Name)" />
            <FormField label="Email" type="email" />
          </div>
          <div className="flex gap-5 mt-6 text-base leading-6 text-black max-md:flex-wrap">
            <FormField label="Phone Number" type="tel" />
            <FormField label="Create Password" type="password" />
          </div>
          <label
            htmlFor="institution"
            className="mt-6 text-base leading-6 text-black max-md:max-w-full"
          >
            Choose a Medical Institution
          </label>
          <div className="flex gap-4 p-3 mt-2 text-base leading-6 bg-white border border-black border-solid text-stone-500 max-md:flex-wrap">
            <select
              id="institution"
              className="flex-1 max-md:max-w-full"
              aria-label="Select a medical institution"
            >
              <option>Select One...</option>
            </select>
            <img
              loading="lazy"
              src="{{ext_33}}"
              className="shrink-0 w-6 aspect-square"
              alt=""
            />
          </div>
          <fieldset>
            <legend className="mt-10 text-base leading-6 text-black max-md:max-w-full">
              Which Best Describes You?
            </legend>
            <div className="mt-4 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start pr-20 text-base leading-6 text-black max-md:mt-6">
                    <label className="flex gap-3 whitespace-nowrap">
                      <input
                        type="radio"
                        name="role"
                        className="shrink-0 my-auto bg-white border border-black border-solid h-[18px] rounded-[100px] w-[18px]"
                      />
                      <span>Doctor</span>
                    </label>
                    <label className="flex gap-3 mt-3.5">
                      <input
                        type="radio"
                        name="role"
                        className="shrink-0 my-auto bg-white border border-black border-solid h-[18px] rounded-[100px] w-[18px]"
                      />
                      <span>Specialized Medical Personnel</span>
                    </label>
                    <label className="flex gap-3 mt-3.5">
                      <input
                        type="radio"
                        name="role"
                        className="shrink-0 my-auto bg-white border border-black border-solid h-[18px] rounded-[100px] w-[18px]"
                      />
                      <span>ENT Doctor</span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start pr-20 text-base leading-6 text-black max-md:mt-6">
                    <label className="flex gap-3">
                      <input
                        type="radio"
                        name="role"
                        className="shrink-0 my-auto bg-white border border-black border-solid h-[18px] rounded-[100px] w-[18px]"
                      />
                      <span>Respiratory Therapist</span>
                    </label>
                    <label className="flex gap-3 mt-3.5">
                      <input
                        type="radio"
                        name="role"
                        className="shrink-0 my-auto bg-white border border-black border-solid h-[18px] rounded-[100px] w-[18px]"
                      />
                      <span>Other Medical Professional</span>
                    </label>
                    <label className="flex gap-3 mt-3.5 whitespace-nowrap">
                      <input
                        type="radio"
                        name="role"
                        className="shrink-0 my-auto bg-white border border-black border-solid h-[18px] rounded-[100px] w-[18px]"
                      />
                      <span>Other</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          <button
            type="submit"
            className="justify-center self-center px-6 py-3 mt-10 text-base leading-6 text-white bg-black border border-black border-solid max-md:px-5"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

/**
 * Contact info component
 * @param {Object} props - Component props
 * @param {string} props.icon - Contact icon URL
 * @param {string} props.title - Contact title
 * @param {string} props.description - Contact description
 * @param {string} props.contact - Contact information
 */
const ContactInfo = ({ icon, title, description, contact }) => (
  <div className="flex flex-col grow px-5 text-base leading-6 text-center text-black max-md:mt-10 max-md:max-w-full">
    <img loading="lazy" src={icon} className="self-center w-12 aspect-square" alt="" />
    <h3 className="mt-6 text-3xl font-bold leading-10 max-md:max-w-full">{title}</h3>
    <p className="mt-4 max-md:max-w-full">{description}</p>
    <a
      href={contact.startsWith("mailto") ? contact : `tel:${contact}`}
      className="mt-6 text-black underline max-md:max-w-full"
    >
      {contact}
    </a>
  </div>
);

/**
 * Contact section component
 */
const Contact = () => {
  const contactData = [
    {
      icon: "{{ext_34}}",
      title: "Email",
      description: "Send us an email and we'll get back to you.",
      contact: "johndoe@st.ug.edu.gh",
    },
    {
      icon: "{{ext_35}}",
      title: "Phone",
      description: "Give us a call during business hours.",
      contact: "+233 27 000 0000",
    },
  ];

  return (
    <section className="self-center pb-6 mt-72 w-full max-w-[1312px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {contactData.map((data, index) => (
          <div
            key={data.title}
            className={`flex flex-col w-6/12 max-md:ml-0 max-md:w-full ${
              index === 1 ? "ml-5" : ""
            }`}
          >
            <ContactInfo {...data} />
          </div>
        ))}
      </div>
    </section>
  );
};

/**
 * Footer component
 */
const Footer = () => {
  const navItems = [
    "Homepage",
    "Dashboard",
    "Patient Diagnostics",
    "Spirometry Results",
    "Patient Symptoms",
  ];

  const socialIcons = [
    "{{ext_36}}",
    "{{ext_37}}",
    "{{ext_38}}",
    "{{ext_39}}",
    "{{ext_40}}",
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookies Settings", href: "#" },
  ];

  return (
    <footer className="flex flex-col px-16 py-20 mt-20 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="{{ext_41}}"
          className="shrink-0 my-auto aspect-[2.33] w-[63px]"
          alt=""
        />
        <div className="flex gap-5 max-md:flex-wrap">
          <nav className="flex gap-5 justify-between items-start text-base font-semibold leading-6 text-black max-md:flex-wrap">
            {navItems.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex flex-1 gap-3 pl-20 my-auto">
            {socialIcons.map((icon) => (
              <img
                key={icon}
                loading="lazy"
                src={icon}
                className="shrink-0 w-6 aspect-square"
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
      <hr className="shrink-0 mt-20 h-px bg-black border border-black border-solid max-md:mt-10 max-md:max-w-full" />
      <div className="flex gap-5 justify-between self-center mt-8 text-sm leading-5 max-md:flex-wrap">
        <div className="text-black">© 2024 King&Eben. All rights reserved.</div>
        <div className="flex gap-5 justify-between text-black">
          {legalLinks.map(({ label, href }) => (
            <a key={label} href={href} className="underline">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

/**
 * Main component
 */
function MyComponent() {
  return (
    <div className="flex flex-col">
      <div className="flex flex