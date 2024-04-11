import * as React from "react";

function Header() {
  return (
    <header className="flex flex-col w-full bg-white max-md:max-w-full">
      <div className="flex overflow-hidden relative flex-col gap-5 w-full min-h-[110px] max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3451f31189bd28f151e4f81c7f80439a9a390de4215bcbfbb556854b1d64c4f?apiKey=8f7fb22b499d46a09bcf20703b6309bc&"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex overflow-hidden relative flex-col justify-center items-center aspect-[0.91] w-[100px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1511d6ed1c7c094c7067b667e2d580f7294369fbfffa45c05c062ffae4ab213e?apiKey=8f7fb22b499d46a09bcf20703b6309bc&"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/91ca5f80be893231da9854eeb769d014c59057a7654a82532b6df4e774f623e2?apiKey=8f7fb22b499d46a09bcf20703b6309bc&"
            alt=""
            className="w-full aspect-[0.91]"
          />
        </div>
        <nav className="flex relative flex-auto gap-5 pl-20 my-auto text-base leading-6 max-md:flex-wrap">
          <div className="flex gap-5 justify-between my-auto text-white">
            <button>Dashboard</button>
            <button>FAQ</button>
            <button>Contact</button>
            <button className="flex gap-1 justify-center">
              <span>Patient Data</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fda752d4b20b01dbb0e3dc10d54e95f457b6308cbfef41dc018d4ed032865d0f?apiKey=8f7fb22b499d46a09bcf20703b6309bc&"
                alt=""
                className="shrink-0 w-6 aspect-square"
              />
            </button>
          </div>
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
    <section className="flex overflow-hidden relative flex-col items-start px-14 py-20 w-full text-white leading-[150%] min-h-[914px] max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d2cb105e5385591666a8a58fc2ff0cb71d8fbcc91ee38e214e76ad3360f36c0?apiKey=8f7fb22b499d46a09bcf20703b6309bc&"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <h1 className="relative mt-56 text-6xl font-bold leading-[77px] w-[841px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
        Welcome to the Dashboard. Manage Patients Efficiently
      </h1>
      <p className="relative mt-6 text-2xl max-md:max-w-full">
        Access patient's records, view diagnostic results, and track treatment
        progress
      </p>
      <div className="flex relative gap-4 items-start pt-4 mt-6 mb-40 text-base max-md:mb-10">
        <button className="justify-center px-6 py-3 whitespace-nowrap bg-black border border-black border-solid max-md:px-5">
          Explore
        </button>
        <button className="justify-center px-6 py-3 border border-white border-solid max-md:px-5">
          Learn More
        </button>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, primaryAction, secondaryAction }) {
  return (
    <div className="flex flex-col grow text-base leading-6 text-black max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="self-center w-12 aspect-square"
      />
      <h3 className="mt-6 text-3xl font-bold leading-10 text-center max-md:max-w-full">
        {title}
      </h3>
      <p className="mt-6 text-center max-md:max-w-full">{description}</p>
      <div className="flex gap-5 justify-between items-start self-center pt-4 mt-6 whitespace-nowrap">
        <button
          className="justify-center px-6 py-3 border border-black border-solid max-md:px-5"
          onClick={primaryAction.onClick}
        >
          {primaryAction.label}
        </button>
        <button
          className="flex gap-2 justify-center mt-3"
          onClick={secondaryAction.onClick}
        >
          <span>{secondaryAction.label}</span>
          <img
            loading="lazy"
            src={secondaryAction.icon}
            alt=""
            className="shrink-0 w-6 aspect-square"
          />
        </button>
      </div>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?apiKey=8f7fb22b499d46a09bcf20703b6309bc&",
      title: "Immediate Actions",
      description: "View recent diagnostic results and access patient records.",
      primaryAction: {
        label: "View",
        onClick: () => {
          console.log("View clicked");
        },
      },
      secondaryAction: {
        label: "Manage",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4aed70e652b9a334e2a683ba9bfef5c04d880fcb9b8ad7514c3dabef58a54d7?apiKey=8f7fb22b499d46a09bcf20703b6309bc&",
        onClick: () => {
          console.log("Manage clicked");
        },
      },
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?apiKey=8f7fb22b499d46a09bcf20703b6309bc&",
      title: "Patient Profiles",
      description: "Add, update, and delete patient profiles.",
      primaryAction: {
        label: "Add",
        onClick: () => {
          console.log("Add clicked");
        },
      },
      secondaryAction: {
        label: "Update",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee5bdbc32bbc53684deecb2f9d63712884517174ee790d5d45a4eae8116d726d?apiKey=8f7fb22b499d46a09bcf20703b6309bc&",
        onClick: () => {
          console.log("Update clicked");
        },
      },
    },
  ];

  return (
    <section className="flex flex-col w-full bg-white max-md:max-w-full">
      <div className="flex flex-col justify-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-8 mb-2.5 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section className="flex z-10 flex-col px-16 py-20 mt-0 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="mt-8 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full">
              <h2 className="text-base font-semibold leading-6 max-md:max-w-full">
                Overview
              </h2>
              <h3 className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Key Statistics for Asthma Treatment
              </h3>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full">
              <p className="text-lg leading-7 max-md:max-w-full">
                Get a quick snapshot of your asthma treatment progress. Track
                the number of patients you've treated, the number of diagnoses
                made, and the number of treatments pending.
              </p>
              <div className="flex gap-5 justify-between items-start self-start pt-4 mt-4 text-base leading-6">
                <button className="justify-center px-6 py-3 border border-black border-solid max-md:px-5">
                  Learn More
                </button>
                <button className="flex gap-2 justify-center mt-3">
                  <span>View Details</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee5bdbc32bbc53684deecb2f9d63712884517174ee790d5d45a4eae8116d726d?apiKey=8f7fb22b499d46a09bcf20703b6309bc&"
                    alt=""
                    className="shrink-0 w-6 aspect-square"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="flex flex-col grow pl-8 font-bold text-black border-l-2 border-solid border-l-black max-md:mt-10">
      <div className="text-7xl leading-[104px] max-md:text-4xl">{value}</div>
      <div className="mt-2 text-xl leading-7">{label}</div>
    </div>
  );
}

function Stats() {
  const stats = [
    { value: 30, label: "Patients Treated" },
    { value: 30, label: "Diagnoses Made" },
    { value: 30, label: "Treatments Pending" },
  ];

  return (
    <section className="mt-20 mb-2.5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"
          >
            <StatCard {...stat} />
          </div>
        ))}
      </div>
    </section>
  );
}

function NewDiagnosis() {
  return (
    <section className="flex flex-col w-full bg-white max-md:max-w-full">
      <div className="flex z-10 flex-col justify-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="mt-8 mb-2.5 max-md:mr-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <h2 className="text-5xl font-bold text-black leading-[57.6px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                Start a New Diagnosis
              </h2>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow leading-[150%] max-md:mt-10 max-md:max-w-full">
                <p className="text-lg text-black max-md:max-w-full">
                  Easily begin a new diagnosis or review critical alerts for
                  diagnostic results.
                </p>
                <div className="flex gap-4 items-start self-start pt-4 mt-6 text-base">
                  <button className="justify-center px-6 py-3 text-white bg-black border border-black border-solid max-md:px-5">
                    Get Started
                  </button>
                  <button className="justify-center px-6 py-3 text-black border border-black border-solid max-md:px-5">
                    Review Alerts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col px-16 pt-20 pb-5 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/933e22f40f786faf066e99d6cc3ce0ef9a0b015c9e4bc7d4ff342dca891bf6c0?apiKey=8f7fb22b499d46a09bcf20703b6309bc&"
          alt=""
          className="shrink-0 my-auto aspect-[2.33] w-[63px]"
        />
        <nav className="flex gap-5 max-md:flex-wrap">
          <div className="flex gap-5 justify-between items-start text-base font-semibold leading-6 text-black max-md:flex-wrap">
            <button>Homepage</button>
            <button>Dashboard</button>
            <button>Patient Diagnostics</button>
            <button className="self-stretch leading-6">
              Spirometry Results
            </button>
            <button>Patient Symptoms</button>
          </div>
          <div className="flex flex-1 gap-3 pl-20 my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b374903b3b58f19a20b6f17412e6ef64138924ca84fc6958d2fc69c6506b998f?apiKey=8f7fb22b499d46a09bcf20703b6309bc&"
              alt=""
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/973ae2f4bac06b359363caa91c8fe840470c8c5a065f3d76266dc2c16e296983?apiKey=8f7fb22b499d46a09bcf20703b6309bc&"
              alt=""
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed46b9abb949e8a22ffc48b3d7a136e1ac7e46ec75a01a045e5cdf8f55d5534c?apiKey=8f7fb22b499d46a09bcf20703b6309bc&"
              alt=""
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/13a02d80b8bb97dfdba0b258be17959dd7ae5710974b47563f547fe30fd24d95?apiKey=8f7fb22b499d46a09bcf20703b6309bc&"
              alt=""
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea3edad2a146eef63e9ffb809b4271aa7dd12d834fd2e1640cee793debe10b44?apiKey=8f7fb22b499d46a09bcf20703b6309bc&"
              alt=""
              className="shrink-0 w-6 aspect-square"
            />
          </div>
        </nav>
      </div>
      <div className="shrink-0 mt-20 h-px bg-black border border-black border-solid max-md:mt-10 max-md:max-w-full" />
      <div className="flex gap-5 justify-between self-center mt-8 text-sm leading-5 max-md:flex-wrap">
        <div className="text-black">
          © 2024 King&Eben. All rights reserved.
        </div>
        <div className="flex gap-5 justify-between text-black">
          <button className="underline">Privacy Policy</button>
          <button className="underline">Terms of Service</button>
          <button className

            /**
             * Header component
             * @returns {JSX.Element} Header component JSX
             */ function Header() { return ( <header className="flex flex-col w-full bg-white max-md:max-w-full"> <div className="flex overflow-hidden relative flex-col gap-5 w-full min-h-[110px] max-md:flex-wrap max-md:max-w-full"> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3451f31189bd28f151e4f81c7f80439a9a390de4215bcbfbb556854b1d64c4f?apiKey=8f7fb22b499d46a09bcf20703b6309bc&" alt="" className="object-cover absolute inset-0 size-full" /> <div className="flex overflow-hidden relative flex-col justify-center items-center aspect-[0.91] w-[100px]"> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1511d6ed1c7c094c7067b667e2d580f7294369fbfffa45c05c062ffae4ab213e?apiKey=8f7fb22b499d46a09bcf20703b6309bc&" alt="" className="object-cover absolute inset-0 size-full" /> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/91ca5f80be893231da9854eeb769d014c59057a7654a82532b6df4e774f623e2?apiKey=8f7fb22b499d46a09bcf20703b6309bc&" alt="" className="w-full aspect-[0.91]" /> </div> <nav className="flex relative flex-auto gap-5 pl-20 my-auto text-base leading-6 max-md:flex-wrap"> <div className="flex gap-5 justify-between my-auto text-white"> <button>Dashboard</button> <button>FAQ</button> <button>Contact</button> <button className="flex gap-1 justify-center"> <span>Patient Data</span> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fda752d4b20b01dbb0e3dc10d54e95f457b6308cbfef41dc018d4ed032865d0f?apiKey=8f7fb22b499d46a09bcf20703b6309bc&" alt="" className="shrink-0 w-6 aspect-square" /> </button> </div> <div className="flex gap-4 justify-center"> <button className="justify-center px-5 py-2 text-white border border-white border-solid shadow-sm"> Learn More </button> <button className="justify-center px-5 py-2 text-white bg-black border border-black border-solid"> Sign Up </button> </div> </nav> </div> </header> );
            } /**
             * Hero component
             * @returns {JSX.Element} Hero component JSX
             */ function Hero() { return ( <section className="flex overflow-hidden relative flex-col items-start px-14 py-20 w-full text-white leading-[150%] min-h-[914px] max-md:px-5 max-md:max-w-full"> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d2cb105e5385591666a8a58fc2ff0cb71d8fbcc91ee38e214e76ad3360f36c0?apiKey=8f7fb22b499d46a09bcf20703b6309bc&" alt="" className="object-cover absolute inset-0 size-full" /> <h1 className="relative mt-56 text-6xl font-bold leading-[77px] w-[841px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]"> Welcome to the Dashboard. Manage Patients Efficiently </h1> <p className="relative mt-6 text-2xl max-md:max-w-full"> Access patient's records, view diagnostic results, and track treatment progress </p> <div className="flex relative gap-4 items-start pt-4 mt-6 mb-40 text-base max-md:mb-10"> <button className="justify-center px-6 py-3 whitespace-nowrap bg-black border border-black border-solid max-md:px-5"> Explore </button> <button className="justify-center px-6 py-3 border border-white border-solid max-md:px-5"> Learn More </button> </div> </section> );
            } /**
             * FeatureCard component
             * @param {Object} props - Component props
             * @param {string} props.icon - Icon URL
             * @param {string} props.title - Card title
             * @param {string} props.description - Card description
             * @param {Object} props.primaryAction - Primary action object
             * @param {string} props.primaryAction.label - Primary action label
             * @param {Function} props.primaryAction.onClick - Primary action click handler
             * @param {Object} props.secondaryAction - Secondary action object
             * @param {string} props.secondaryAction.label - Secondary action label
             * @param {string} props.secondaryAction.icon - Secondary action icon URL
             * @param {Function} props.secondaryAction.onClick - Secondary action click handler
             * @returns {JSX.Element} FeatureCard component JSX
             */ function FeatureCard({ icon, title, description, primaryAction, secondaryAction }) { return ( <div className="flex flex-col grow text-base leading-6 text-black max-md:mt-10 max-md:max-w-full"> <img loading="lazy" src={icon} alt="" className="self-center w-12 aspect-square" /> <h3 className="mt-6 text-3xl font-bold leading-10 text-center max-md:max-w-full"> {title} </h3> <p className="mt-6 text-center max-md:max-w-full">{description}</p> <div className="flex gap-5 justify-between items-start self-center pt-4 mt-6 whitespace-nowrap"> <button className="justify-center px-6 py-3 border border-black border-solid max-md:px-5" onClick={primaryAction.onClick} > {primaryAction.label} </button> <button className="flex gap-2 justify-center mt-3" onClick={secondaryAction.onClick} > <span>{secondaryAction.label}</span> <img loading="lazy" src={secondaryAction.icon} alt="" className="shrink-0 w-6 aspect-square" /> </button> </div> </div> );
            } /**
             * Features component
             * @returns {JSX.Element} Features component JSX
             */ function Features() { const features = [ { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?apiKey=8f7fb22b499d46a09bcf20703b6309bc&", title: "Immediate Actions", description: "View recent diagnostic results and access patient records.", primaryAction: { label: "View", onClick: () => { console.log("View clicked"); }, }, secondaryAction: { label: "Manage", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4aed70e652b9a334e2a683ba9bfef5c04d880fcb9b8ad7514c3dabef58a54d7?apiKey=8f7fb22b499d46a09bcf20703b6309bc&", onClick: () => { console.log("Manage clicked"); }, }, }, { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?apiKey=8f7fb22b499d46a09bcf20703b6309bc&", title: "Patient Profiles", description: "Add, update, and delete patient profiles.", primaryAction: { label: "Add", onClick: () => { console.log("Add clicked"); }, }, secondaryAction: { label: "Update", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee5bdbc32bbc53684deecb2f9d63712884517174ee790d5d45a4eae8116d726d?apiKey=8f7fb22b499d46a09bcf20703b6309bc&", onClick: () => { console.log("Update clicked"); }, }, }, ]; return ( <section className="flex flex-col w-full bg-white max-md:max-w-full"> <div className="flex flex-col justify-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full"> <div className="mt-8 mb-2.5 max-md:mr-1 max-md:max-w-full"> <div className="flex gap-5 max-md:flex-col max-md:gap-0"> {features.map((feature, index) => ( <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full" > <FeatureCard {...feature} /> </div> ))} </div> </div> </div> </section> );
            } /**
             * Overview component
             * @returns {JSX.Element} Overview component JSX
             */ function Overview() { return ( <section className="flex z-10 flex-col px-16 py-20 mt-0 w-full bg-white max-md:px-5 max-md:max-w-full"> <div className="mt-8 max-md:max-w-full"> <div className="flex gap-5 max-md:flex-col max-md:gap-0"> <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"> <div className="flex flex-col text-black max-md:mt-10 max-md:max-w-full"> <h2 className="text-base font-semibold leading-6 max-md:max-w-full"> Overview </h2> <h3 className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]"> Key Statistics for Asthma Treatment </h3> </div> </div> <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"> <div className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full"> <p className="text-lg leading-7 max-md:max-w-full"> Get a quick snapshot of your asthma treatment progress. Track the number of patients you've treated, the number of diagnoses made, and the number of treatments pending. </p> <div className="flex gap-5 justify-between items-start self-start pt-4 mt-4 text-base leading-6"> <button className="justify-center px-6 py-3 border border-black border-solid max-md:px-5"> Learn More </button> <button className="flex gap-2 justify-center mt-3"> <span>View Details</span> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee5bdbc32bbc53684deecb2f9d63712884517174ee790d5d45a4eae8116d726d?apiKey=8f7fb22b499d46a09bcf20703b6309bc&" alt="" className="shrink-0 w-6 aspect-square" /> </button> </div> </div> </div> </div> </div> </section> );
            } /**
             * StatCard component
             * @param {Object} props - Component props
             * @param {number} props.value - Stat value
             * @param {string} props.label - Stat label
             * @returns {JSX.Element} StatCard component JSX
             */ function StatCard({ value, label }) { return ( <div className="flex flex-col grow pl-8 font-bold text-black border-l-2 border-solid border-l-black max-md:mt-10"> <div className="text-7xl leading-[104px] max-md:text-4xl">{value}</div> <div className="mt-2 text-xl leading-7">{label}</div> </div> );
            } /**
             * Stats component
             * @returns {JSX.Element} Stats component JSX
             */ function Stats() { const stats = [ { value: 30, label: "Patients Treated" }, { value: 30, label: "Diagnoses Made" }, { value: 30, label: "Treatments Pending" }, ]; return ( <section className="mt-20 mb-2.5 max-md:mt-10 max-md:max-w-full"> <div className="flex gap-5 max-md:flex-col max-md:gap-0"> {stats.map((stat, index) => ( <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full" > <StatCard {...stat} /> </div> ))} </div> </section> );
            } /**
             * NewDiagnosis component
             * @returns {JSX.Element} NewDiagnosis component JSX
             */ function NewDiagnosis() { return ( <section className="flex flex-col w-full bg-white max-md:max-w-full"> <div className="flex z-10 flex-col justify-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full"> <div className="mt-8 mb-2.5 max-md:mr-1 max-md:max-w-full"> <div className="flex gap-5 max-md:flex-col max-md:gap-0"> <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"> <h2 className="text-5xl font-bold text-black leading-[57.6px] max-md:mt-10 max-md:max-w-full max-md:text-4xl"> Start a New Diagnosis </h2> </div> <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full"> <div className="flex flex-col grow leading-[150%] max-md:mt-10 max-md:max-w-full"> <p className="text-lg text-black max-md:max-w-full"> Easily begin a new diagnosis or review critical alerts for diagnostic results. </p> <div className="flex gap-4 items-start self-start pt-4 mt-6 text-base"> <button className="justify-center px-6 py-3 text-white bg-black border border-black border-solid max-md:px-5"> Get Started </button> <button className="justify-center px-6 py-3 text-black border border-black border-solid max-md:px-5"> Review Alerts </button> </div> </div> </div> </div> </div> </div> </section> );
            } /**
             * Footer component
             * @returns {JSX.Element} Footer component JSX
             */ function Footer() { return ( <footer className="flex flex-col px-16 pt-20 pb-5 w-full bg-white max-md:px-5 max-md:max-w-full"> <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full"> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/933e22f40f786faf066e99d6cc3ce0ef9a0b015c9e4bc7d4ff342dca891bf6c0?apiKey=8f7fb22b499d46a09bcf20703b6309bc&" alt="" className="shrink-0 my-auto aspect-[2.33] w-[63px]" /> <nav className="flex gap-5 max-md:flex-wrap"> <div className="flex gap-5 justify-between items-start text-base font-semibold leading-6 text-black max-md:flex-wrap"> <button>Homepage</button> <button>Dashboard</button> <button>Patient Diagnostics</button> <button className="self-stretch leading-6"> Spirometry Results </button> <button>Patient Symptoms</button> </div> <div className="flex flex-1 gap-3 pl-20 my-auto"> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b374903b3b58f19a20b6f17412e6ef64138924ca84fc6958d2fc69c6506b998f?apiKey=8f7fb22b499d46a09bcf20703b6309bc&" alt="" className="shrink-0 w-6 aspect-square" /> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/973ae2f4bac06b359363caa91c8fe840470c8c5a065f3d76266dc2c16e296983?apiKey=8f7fb22b499d46a09bcf20703b6309bc&" alt="" className="shrink-0 w-6 aspect-square" /> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed46b9abb949e8a22ffc48b3d7a136e1ac7e46ec75a01a045e5cdf8f55d5534c?apiKey=8f7fb22b499d46a09bcf20703b6309bc&" alt="" className="shrink-0 w-6 aspect-square" /> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/13a02d80b8bb97dfdba0b258be17959dd7ae5710974b47563f547fe30fd24d95?apiKey=8f7fb22b499d46a09bcf20703b6309bc&" alt="" className="shrink-0 w-6 aspect-square" /> <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea3edad2a146eef63e9ffb809b4271aa7dd12d834fd2e1640cee793debe10b44?apiKey=8f7fb22b499d46a09bcf20703b6309bc&" alt="" className="shrink-0 w-6 aspect-