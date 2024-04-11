import * as React from "react";

const navLinks = [
  { label: "Homepage", url: "/" },
  { label: "Dashboard", url: "/dashboard" },
  { label: "Patient Diagnostics", url: "/diagnostics" },
  { label: "Spirometry Results", url: "/spirometry" },
  { label: "Patient Symptoms", url: "/symptoms" },
];

const socialIcons = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b374903b3b58f19a20b6f17412e6ef64138924ca84fc6958d2fc69c6506b998f?apiKey=89206080c3424bb49f51c7c3e49c6f3b&", alt: "Social media icon 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/973ae2f4bac06b359363caa91c8fe840470c8c5a065f3d76266dc2c16e296983?apiKey=89206080c3424bb49f51c7c3e49c6f3b&", alt: "Social media icon 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ed46b9abb949e8a22ffc48b3d7a136e1ac7e46ec75a01a045e5cdf8f55d5534c?apiKey=89206080c3424bb49f51c7c3e49c6f3b&", alt: "Social media icon 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/13a02d80b8bb97dfdba0b258be17959dd7ae5710974b47563f547fe30fd24d95?apiKey=89206080c3424bb49f51c7c3e49c6f3b&", alt: "Social media icon 4" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea3edad2a146eef63e9ffb809b4271aa7dd12d834fd2e1640cee793debe10b44?apiKey=89206080c3424bb49f51c7c3e49c6f3b&", alt: "Social media icon 5" },
];

const Header = () => (
  <header className="flex overflow-hidden relative flex-col gap-5 justify-between w-full min-h-[110px] max-md:flex-wrap max-md:max-w-full">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3451f31189bd28f151e4f81c7f80439a9a390de4215bcbfbb556854b1d64c4f?apiKey=89206080c3424bb49f51c7c3e49c6f3b&"
      alt="Background"
      className="object-cover absolute inset-0 size-full"
    />
    <div className="flex overflow-hidden relative flex-col justify-center items-center aspect-[0.91] w-[100px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1511d6ed1c7c094c7067b667e2d580f7294369fbfffa45c05c062ffae4ab213e?apiKey=89206080c3424bb49f51c7c3e49c6f3b&"
        alt="Logo background"
        className="object-cover absolute inset-0 size-full"
      />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba2c935b65021272e9e31b2c9fa3fec861220971ece5ccd6d10c71376a0012e4?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Logo" className="w-full aspect-[0.91]" />
    </div>
    <nav className="flex relative gap-5 justify-between self-end px-8 mt-16 text-base leading-6 max-md:flex-wrap max-md:px-5 max-md:mt-10">
      <button className="flex gap-3 px-3 py-2 whitespace-nowrap bg-white border border-white border-solid text-stone-500 max-md:flex-wrap">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/23a1c91b538519e68530e0509de1522e980f56a4afcedb9518eeaf233075249d?apiKey=89206080c3424bb49f51c7c3e49c6f3b&" alt="Search icon" className="shrink-0 w-6 aspect-square" />
        <span className="flex-1 max-md:max-w-full">Search</span>
      </button>
      <div className="flex gap-4 justify-between pl-2 text-white">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a90e8e220ff530a6ab85ee65f63d7a19891ea806cc0c53d4aff443b922f18936?apiKey=89206080c3424bb49f51c7c3e49c6f3b&"
          alt="Notification icon"
          className="shrink-0 my-auto w-6 aspect-square"
        />
        <button className="flex gap-2 items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea59af229607603492a08994c10df1a0974227ef9810be833b9c72b7466310a7?apiKey=89206080c3424bb49f51c7c3e49c6f3b&"
            alt="User avatar"
            className="shrink-0 self-stretch w-10 rounded-full aspect-square"
          />
          <span className="self-stretch my-auto">John Doe</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/82e70e18a1b0bb65084cb956b9e4a70eb11ef4d7ea98373398549f4732b6e932?apiKey=89206080c3424bb49f51c7c3e49c6f3b&"
            alt="Dropdown arrow"
            className="shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </button>
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section className="flex overflow-hidden relative flex-col justify-center items-center p-2.5 w-full text-center min-h-[200px] max-md:px-5 max-md:max-w-full">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9c09a570f3190ec8f82c1cdaa639531cc2e42196413afd5e32acb10f0bc76c0?apiKey=89206080c3424bb49f51c7c3e49c6f3b&"
      alt="Hero background"
      className="object-cover absolute inset-0 size-full"
    />
    <h1 className="relative text-6xl font-bold text-white leading-[67.2px] max-md:max-w-full max-md:text-4xl">
      Data Upload
    </h1>
    <p className="relative mt-6 text-lg text-white max-md:max-w-full">
      Upload patient data for diagnosis, including spirometry results and symptom information.
    </p>
  </section>
);

const FileUpload = () => {
  const [patientName, setPatientName] = React.useState("");

  const handleUpload = () => {
    console.log(`Uploading file for patient: ${patientName}`);
  };

  return (
    <section className="flex flex-col justify-center items-center p-20 w-full text-base leading-6 text-black border-b border-black border-solid max-md:px-5 max-md:max-w-full">
      <h2 className="mt-32 text-5xl font-bold leading-[57.6px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Patient Data- File Upload
      </h2>
      <p className="mt-6 text-lg max-md:max-w-full">
        Fill in the details and upload a CSV or Excel file to make a diagnosis
      </p>
      <label htmlFor="patientName" className="mt-8 max-md:max-w-full">
        Patient Name
      </label>
      <input
        type="text"
        id="patientName"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
        className="shrink-0 mt-2 max-w-full h-12 bg-white border border-black border-solid w-[680px]"
      />
      <button
        onClick={handleUpload}
        className="justify-center self-start px-6 py-3 mt-6 mb-24 ml-72 text-white whitespace-nowrap bg-black border border-black border-solid max-md:px-5 max-md:mb-10 max-md:ml-2.5"
      >
        Upload
      </button>
    </section>
  );
};

const FormSubmission = () => {
  const [formData, setFormData] = React.useState({
    patientName: "",
    age: "",
    weight: "",
    height: "",
    fev1: "",
    fvc: "",
    pef: "",
    gender: "",
    allergies: "",
    smoking: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="flex flex-col w-full bg-white max-md:max-w-full">
      <div className="flex z-10 flex-col px-20 pt-8 pb-14 w-full max-md:px-5 max-md:max-w-full">
        <h2 className="self-center ml-16 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          Patient Data - Form Submission
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col mt-16 mr-8 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          <label htmlFor="patientName2" className="text-base leading-6 text-center text-black max-md:max-w-full">
            Patient Name
          </label>
          <input
            type="text"
            id="patientName2"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            className="shrink-0 mt-3.5 h-12 bg-white border border-black border-solid max-md:max-w-full"
          />
          <div className="mt-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow mt-2 text-base leading-6 text-center text-black max-md:mt-10">
                  <label htmlFor="age" className="self-start ml-6 max-md:ml-2.5">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="shrink-0 mt-2.5 h-12 bg-white border border-black border-solid"
                  />
                  <label htmlFor="fev1" className="self-start mt-6 ml-4 max-md:ml-2.5">
                    Forced Expiratory Volume 1
                  </label>
                  <input
                    type="number"
                    id="fev1"
                    name="fev1"
                    value={formData.fev1}
                    onChange={handleChange}
                    className="shrink-0 mt-3.5 h-12 bg-white border border-black border-solid"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-base leading-6 text-center text-black max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 items-start whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
                      <label htmlFor="weight">Weight</label>
                      <input
                        type="number"
                        id="weight"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="shrink-0 mt-3 h-12 bg-white border border-black border-solid"
                      />
                    </div>
                    <div className="flex flex-col flex-1 grow shrink-0 mt-1.5 basis-0 w-fit">
                      <label htmlFor="height" className="self-start ml-7 max-md:ml-2.5">
                        Height
                      </label>
                      <input
                        type="number"
                        id="height"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        className="shrink-0 mt-3 h-12 bg-white border border-black border-solid"
                      />
                    </div>
                  </div>
                  <div className="flex gap-5 mt-8 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
                      <label htmlFor="fvc" className="self-start ml-3 max-md:ml-2.5">
                        Forced Vital Capacity
                      </label>
                      <input
                        type="number"
                        id="fvc"
                        name="fvc"
                        value={formData.fvc}
                        onChange={handleChange}
                        className="shrink-0 mt-2 h-12 bg-white border border-black border-solid"
                      />
                    </div>
                    <div className="flex flex-col flex-1 grow shrink-0 self-start mt-1 whitespace-nowrap basis-0 w-fit">
                      <label htmlFor="pef" className="self-start ml-4 max-md:ml-2.5">
                        PEF
                      </label>
                      <input
                        type="number"
                        id="pef"
                        name="pef"
                        value={formData.pef}
                        onChange={handleChange}
                        className="shrink-0 mt-2 h-12 bg-white border border-black border-solid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-center mt-14 max-w-full w-[453px] max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <fieldset className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <legend className="flex flex-col grow py-4 mt-1 text-base leading-6 text-black whitespace-nowrap max-md:mt-10">
                  Gender
                </legend>
                <div className="flex gap-3 mt-4">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                    className="shrink-0 my-auto bg-white border border-black border-solid h-[18px] rounded-[100px] w-[18px]"
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="flex gap-3 mt-3.5">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                    className="shrink-0 my-auto bg-white border border-black border-solid h-[18px] rounded-[100px] w-[18px]"
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </fieldset>
              <fieldset className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <legend className="flex flex-col py-4 text-base leading-6 text-black whitespace-nowrap max-md:mt-9">
                  Allergies
                </legend>
                <div className="flex gap-3 mt-4">
                  <input
                    type="radio"
                    id="allergiesYes"
                    name="allergies"
                    value="yes"
                    checked={formData.allergies === "yes"}
                    onChange={handleChange}
                    className="shrink-0 my-auto bg-white border border-black border-solid h-[18px] rounded-[100px] w-[18px]"
                  />
                  <label htmlFor="allergiesYes">Yes</label>
                </div>
                <div className="flex gap-3 mt-3.5">
                  <input
                    type="radio"
                    id="allergiesNo"
                    name="allergies"
                    value="no"
                    checked={formData.allergies === "no"}
                    onChange={handleChange}
                    className="shrink-0 my-auto bg-white border border-black border-solid h-[18px] rounded-[100px] w-[18px]"
                  />
                  <label htmlFor="allergiesNo">No</label>
                </div>
              </fieldset>
              <fieldset className="flex