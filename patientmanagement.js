import * as React from "react";

function SearchButton() {
  return (
    <button className="flex gap-3 px-3 py-2 whitespace-nowrap bg-white border border-white border-solid text-stone-500 max-md:flex-wrap">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/23a1c91b538519e68530e0509de1522e980f56a4afcedb9518eeaf233075249d?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="" className="shrink-0 w-6 aspect-square" />
      <span className="flex-1 max-md:max-w-full">Search</span>
    </button>
  );
}

function UserProfile() {
  return (
    <div className="flex gap-4 justify-between pl-2 text-white">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a90e8e220ff530a6ab85ee65f63d7a19891ea806cc0c53d4aff443b922f18936?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="" className="shrink-0 my-auto w-6 aspect-square" />
      <div className="flex gap-2 items-center">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea59af229607603492a08994c10df1a0974227ef9810be833b9c72b7466310a7?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="User avatar" className="shrink-0 self-stretch w-10 rounded-full aspect-square" />
        <span className="self-stretch my-auto">John Doe</span>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82e70e18a1b0bb65084cb956b9e4a70eb11ef4d7ea98373398549f4732b6e932?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="" className="shrink-0 self-stretch my-auto w-6 aspect-square" />
      </div>
    </div>
  );
}

function MyComponent() {
  return (
    <div className="flex overflow-hidden relative flex-col gap-5 justify-between w-full min-h-[110px] max-md:flex-wrap max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3451f31189bd28f151e4f81c7f80439a9a390de4215bcbfbb556854b1d64c4f?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="" className="object-cover absolute inset-0 size-full" />
      <div className="flex overflow-hidden relative flex-col justify-center items-center aspect-[0.91] w-[100px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1511d6ed1c7c094c7067b667e2d580f7294369fbfffa45c05c062ffae4ab213e?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="" className="object-cover absolute inset-0 size-full" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/70b3c97da9cb8ebfed90b6d983b10bfb3ba9b79032ea3a076c6bc578cf863c4e?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="" className="w-full aspect-[0.91]" />
      </div>
      <div className="flex relative gap-5 justify-between self-end px-8 mt-16 text-base leading-6 max-md:flex-wrap max-md:px-5 max-md:mt-10">
        <SearchButton />
        <UserProfile />
      </div>
    </div>
  );

  function Button({ children, className }) {
  return (
    <button className={`justify-center px-6 py-3 border border-solid max-md:px-5 ${className}`}>
      {children}
    </button>
  );
}

function MyComponent() {
  return (
    <section className="flex overflow-hidden relative flex-col items-start px-16 py-20 w-full text-base leading-6 text-white min-h-[470px] max-md:px-5 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4cc3315c978b943b3ea35df3eda42837d6afbb038e560cd11c0601911f4fb95?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="" className="object-cover absolute inset-0 size-full" />
      <h2 className="relative mt-8 font-semibold max-md:max-w-full">Manage</h2>
      <h1 className="relative mt-4 text-6xl font-bold leading-[67.2px] max-md:max-w-full max-md:text-4xl">
        Patient Profiles
      </h1>
      <p className="relative mt-6 text-lg max-md:max-w-full">
        Check, update, and delete patient profiles and records with ease.
      </p>
      <div className="flex relative gap-4 items-start pt-4 mt-6 mb-2.5 whitespace-nowrap">
        <Button className="bg-black border-black">Add</Button>
        <Button className="border-white">Update</Button>
      </div>
    </section>
  );
}

  import * as React from "react";

  function Header() {
    return (
      <header className="flex flex-col w-full bg-white max-md:max-w-full">
        <div className="flex overflow-hidden relative flex-col gap-5 justify-between w-full min-h-[110px] max-md:flex-wrap max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3451f31189bd28f151e4f81c7f80439a9a390de4215bcbfbb556854b1d64c4f?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="" className="object-cover absolute inset-0 size-full" />
          <div className="flex overflow-hidden relative flex-col justify-center items-center aspect-[0.91] w-[100px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1511d6ed1c7c094c7067b667e2d580f7294369fbfffa45c05c062ffae4ab213e?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="" className="object-cover absolute inset-0 size-full" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/70b3c97da9cb8ebfed90b6d983b10bfb3ba9b79032ea3a076c6bc578cf863c4e?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Logo" className="w-full aspect-[0.91]" />
          </div>
          <div className="flex relative gap-5 justify-between self-end px-8 mt-16 text-base leading-6 max-md:flex-wrap max-md:px-5 max-md:mt-10">
            <div className="flex gap-3 px-3 py-2 whitespace-nowrap bg-white border border-white border-solid text-stone-500 max-md:flex-wrap">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/23a1c91b538519e68530e0509de1522e980f56a4afcedb9518eeaf233075249d?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Search icon" className="shrink-0 w-6 aspect-square" />
              <div className="flex-1 max-md:max-w-full">Search</div>
            </div>
            <div className="flex gap-4 justify-between pl-2 text-white">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a90e8e220ff530a6ab85ee65f63d7a19891ea806cc0c53d4aff443b922f18936?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Notification icon" className="shrink-0 my-auto w-6 aspect-square" />
              <div className="flex gap-2 items-center">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea59af229607603492a08994c10df1a0974227ef9810be833b9c72b7466310a7?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="User avatar" className="shrink-0 self-stretch w-10 rounded-full aspect-square" />
                <div className="self-stretch my-auto">John Doe</div>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/82e70e18a1b0bb65084cb956b9e4a70eb11ef4d7ea98373398549f4732b6e932?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Dropdown arrow" className="shrink-0 self-stretch my-auto w-6 aspect-square" />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  function Hero() {
    return (
      <section className="flex overflow-hidden relative flex-col items-start px-16 py-20 w-full text-base leading-6 text-white min-h-[470px] max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4cc3315c978b943b3ea35df3eda42837d6afbb038e560cd11c0601911f4fb95?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="" className="object-cover absolute inset-0 size-full" />
        <h2 className="relative mt-8 font-semibold max-md:max-w-full">Manage</h2>
        <h1 className="relative mt-4 text-6xl font-bold leading-[67.2px] max-md:max-w-full max-md:text-4xl">Patient Profiles</h1>
        <p className="relative mt-6 text-lg max-md:max-w-full">Check, update, and delete patient profiles and records with ease.</p>
        <div className="flex relative gap-4 items-start pt-4 mt-6 mb-2.5 whitespace-nowrap">
          <button className="justify-center px-6 py-3 bg-black border border-black border-solid max-md:px-5">Add</button>
          <button className="justify-center px-6 py-3 border border-white border-solid max-md:px-5">Update</button>
        </div>
      </section>
    );
  }

  function PatientProfilesHeader() {
    return (
      <div className="p-6 w-full bg-white border-t border-r border-l border-black border-solid max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[82%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-black max-md:mt-10 max-md:max-w-full">
              <h2 className="text-2xl font-bold leading-8 max-md:max-w-full">Manage Patient Profiles</h2>
              <p className="mt-1 text-base leading-6 max-md:max-w-full">View and update patients records and diagnosis</p>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[18%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-4 justify-between pr-2 mt-6 text-base leading-6 whitespace-nowrap max-md:mt-10">
              <div className="flex gap-4">
                <button className="justify-center px-5 py-2 text-black border border-black border-solid">Button</button>
                <button className="justify-center px-5 py-2 text-white bg-black border border-black border-solid">Button</button>
              </div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/853f9ee019dd85b991e6aa7c452670ffb53cbc9487a71e759aa906b3efe051c7?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Settings icon" className="shrink-0 my-auto w-6 aspect-square" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  function PatientProfilesTable() {
    const patientData = [
      { id: "123456", name: "Patient name", date: "1/11/2050", sex: "Male", age: "14", status: "Complete" },
      { id: "123456", name: "Patient name", date: "1/11/2050", sex: "Female", age: "14", status: "Complete" },
      { id: "123456", name: "Patient name", date: "1/11/2050", sex: "Male", age: "14", status: "Complete" },
      { id: "123456", name: "Patient name", date: "1/11/2050", sex: "Female", age: "14", status: "Complete" },
      { id: "123456", name: "Patient name", date: "1/11/2050", sex: "Male", age: "14", status: "Complete" },
      { id: "123456", name: "Patient name", date: "1/11/2050", sex: "Female", age: "14", status: "Complete" },
    ];

    return (
      <div className="flex gap-0 px-5 w-full text-base leading-6 text-black border border-black border-solid max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col flex-1 font-medium">
          <div className="justify-center items-start px-6 py-4 font-semibold border-b border-solid border-b-black max-md:px-5">Patient ID</div>
          {patientData.map((patient, index) => (
            <div key={index} className="justify-center px-6 py-4 whitespace-nowrap border-b border-solid border-b-black text-ellipsis max-md:px-5">{patient.id}</div>
          ))}
        </div>
        <div className="flex flex-col whitespace-nowrap">
          <div className="justify-center items-start px-6 py-4 font-semibold border-b border-solid border-b-black max-md:px-5">Name</div>
          {patientData.map((patient, index) => (
            <div key={index} className="justify-center px-6 py-4 border-b border-solid border-b-black text-ellipsis max-md:px-5">{patient.name}</div>
          ))}
        </div>
        <div className="flex flex-col whitespace-nowrap">
          <div className="flex gap-0 px-6 py-4 font-semibold border-b border-solid border-b-black max-md:px-5">
            <div>Date</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/31cc387cc28657f37eeed551d55161e19300eab1b962767407add48c509a4eb0?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Sort icon" className="shrink-0 w-6 aspect-square" />
          </div>
          {patientData.map((patient, index) => (
            <div key={index} className="justify-center px-6 py-4 border-b border-solid border-b-black text-ellipsis max-md:px-5">{patient.date}</div>
          ))}
        </div>
        <div className="flex flex-col whitespace-nowrap">
          <div className="justify-center items-start px-6 py-4 font-semibold border-b border-solid border-b-black max-md:px-5">Sex</div>
          {patientData.map((patient, index) => (
            <div key={index} className="justify-center px-6 py-4 border-b border-solid border-b-black text-ellipsis max-md:px-5">{patient.sex}</div>
          ))}
        </div>
        <div className="flex flex-col whitespace-nowrap">
          <div className="justify-center items-start px-6 py-4 font-semibold border-b border-solid border-b-black max-md:px-5">Age</div>
          {patientData.map((patient, index) => (
            <div key={index} className="justify-center px-6 py-4 border-b border-solid border-b-black text-ellipsis max-md:px-5">{patient.age}</div>
          ))}
        </div>
        <div className="flex flex-col text-sm font-medium whitespace-nowrap">
          <div className="justify-center items-start px-6 py-4 text-base font-semibold border-b border-solid border-b-black max-md:px-5">Status</div>
          {patientData.map((patient, index) => (
            <div key={index} className="flex flex-col justify-center items-start px-6 py-4 border-b border-solid border-b-black max-md:px-5">
              <div className="justify-center px-3 py-0.5 bg-zinc-100">{patient.status}</div>
            </div>
          ))}
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b5b49fdd38bae32396f00ef2b07c9d94a1048b8b460b39e0675f44904f9ff90?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="" className="shrink-0 aspect-[0.18] w-[72px]" />
      </div>
    );
  }

  function Pagination() {
    return (
      <div className="flex z-10 flex-col pt-8 mb-0 w-full text-base leading-6 text-black whitespace-nowrap bg-white max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-3 justify-between px-5 w-full max-md:flex-wrap max-md:max-w-full">
          <button className="flex gap-3 justify-center px-5 py-2 border border-black border-solid">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7aa133e9983b884c5ef96bb8f28ee1bb3c02a729887475388eb9aafa6826c934?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Previous icon" className="shrink-0 w-6 aspect-square" />
            <div>Prev</div>
          </button>
          <div className="flex gap-0.5 text-center">
            <div className="justify-center items-start p-3 border border-black border-solid">1</div>
            <div className="justify-center items-start px-4 py-2 rounded-lg">2</div>
            <div className="justify-center items-start px-4 py-2 rounded-lg">3</div>
            <div className="justify-center items-start px-4 py-2 rounded-lg">4</div>
          </div>
          <button className="flex gap-3 justify-center px-5 py-2 border border-black border-solid">
            <div>Next</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee5bdbc32bbc53684deecb2f9d63712884517174ee790d5d45a4eae8116d726d?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Next icon" className="shrink-0 w-6 aspect-square" />
          </button>
        </div>
      </div>
    );
  }

  function Footer() {
    return (
      <footer className="flex flex-col pt-2.5 w-full bg-white max-md:max-w-full">
        <div className="flex flex-col px-16 py-20 w-full bg-white mt-[610px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/44f1bfdaf9585296d8dd1d61f4b7315ae823b34f20a2f79f543da02954c91b6b?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Logo" className="shrink-0 my-auto aspect-[2.33] w-[63px]" />
            <div className="flex gap-5 max-md:flex-wrap">
              <nav className="flex gap-5 justify-between items-start text-base font-semibold leading-6 text-black max-md:flex-wrap">
                <a href="#">Homepage</a>
                <a href="#">Dashboard</a>
                <a href="#">Patient Diagnostics</a>
                <a href="#" className="self-stretch leading-6">Spirometry Results</a>
                <a href="#">Patient Symptoms</a>
              </nav>
              <div className="flex flex-1 gap-3 pl-20 my-auto">
                <a href="#"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b374903b3b58f19a20b6f17412e6ef64138924ca84fc6958d2fc69c6506b998f?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Facebook icon" className="shrink-0 w-6 aspect-square" /></a>
                <a href="#"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/973ae2f4bac06b359363caa91c8fe840470c8c5a065f3d76266dc2c16e296983?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Twitter icon" className="shrink-0 w-6 aspect-square" /></a>
                <a href="#"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed46b9abb949e8a22ffc48b3d7a136e1ac7e46ec75a01a045e5cdf8f55d5534c?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Instagram icon" className="shrink-0 w-6 aspect-square" /></a>
                <a href="#"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/13a02d80b8bb97dfdba0b258be17959dd7ae5710974b47563f547fe30fd24d95?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="LinkedIn icon" className="shrink-0 w-6 aspect-square" /></a>
                <a href="#"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea3edad2a146eef63e9ffb809b4271aa7dd12d834fd2e1640cee793debe10b44?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="YouTube icon" className="shrink-0 w-6 aspect-square" /></a>
              </div>
            </div>
          </div>
          <hr className="shrink-0 mt-20 h-px bg-black border border-black border-solid max-md:mt-10 max-md:max-w-full" />
          <div className="flex gap-5 justify-between self-center mt-8 text-sm leading-5 max-md:flex-wrap">
            <div className="text-black">© 2024 King&Eben. All rights reserved.</div>
            <div className="flex gap-5 justify-between text-black">
              <a href="#" className="underline">Privacy Policy</a>
              <a href="#" className="underline">Terms of Service</a>
              <a href="#" className="underline">Cookies Settings</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  function MyComponent() {
    return (
      <div className="flex flex-col">
        <Header />
        <Hero />
        <PatientProfilesHeader />
        <PatientProfilesTable />
        <Pagination />
        <Footer />