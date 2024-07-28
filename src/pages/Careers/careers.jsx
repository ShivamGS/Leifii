import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import "../Contact/contact.css";
// import attachment from "../Contact/attachment.svg";
import { storage } from "./firebaseConfig.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Lottie from "lottie-react";
import work from "./worki.json";
import CursorProvider from "../../lib/context/cursorContext.tsx";
import { Navbar } from "../../components/Nav/Navbar/index.tsx";
import { Footer } from "../../sections/Footer/index.tsx";
import SvgLine from "../../components/SvgLine/svgLine.jsx";

const Careers = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    portfolioLink: "",
    message: "",
    jobRoles: [],
    roleType: "",
    files: [],
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setData({
          ...data,
          jobRoles: [...data.jobRoles, value],
        });
      } else {
        setData({
          ...data,
          jobRoles: data.jobRoles.filter((jobRole) => jobRole !== value),
        });
      }
    } else if (type === "file") {
      setData({
        ...data,
        files: files,
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  }

  async function uploadFile(file) {
    const storageRef = ref(storage, `uploads/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  }

  async function onSubmit(e) {
    e.preventDefault();

    const fileUrls = await Promise.all(
      Array.from(data.files).map((file) => uploadFile(file))
    );

    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      startDate: data.startDate,
      portfolioLink: data.portfolioLink,
      message: data.message,
      jobRoles: data.jobRoles.join(", "),
      roleType: data.roleType,
      fileUrls: fileUrls.join(", "),
    };

    emailjs
      .send(
        "service_5uofzut", // Replace with your EmailJS service ID
        "template_tm9mptr", // Replace with your EmailJS template ID
        templateParams,
        "Yogx-LRBjyVeGVvAm" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("We will soon connect with you");
          // Clear the form fields
          setData({
            name: "",
            email: "",
            phone: "",
            startDate: "",
            portfolioLink: "",
            message: "",
            jobRoles: [],
            roleType: "",
            files: [],
          });
          // Redirect to the contact page
          navigate("/");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Error sending email: " + err.text);
        }
      );
  }

  return (
    <CursorProvider>
      <Navbar />
      <div className="overflow-x-hidden">
        <div className="text-[2.8rem] md:text-[4rem] lg:text-[6rem] my-[15rem] mx-[1rem] md:mx-[7rem] lg:mx-[10rem] w-full h-[3rem] md:h-[7rem] lg:h-[10rem] font-[questrial]">
          <span className=" font-light italic">Creativity</span>
          <br />
          <span className="">meets technology</span>
        </div>

        <div className="h-[65vh] md:h-[60vh] lg:h-[80vh] mt-[10rem] w-full">
          <img src="/job1.png"></img>
        </div>

        <div className="flex flex-col md:flex-row h-auto md:h-[40vh] lg:h-[50vh] w-full px-4 mx-0 md:mx-[5rem] lg:mx-[10rem] mt-[5rem] md:mt-[10rem] lg:mt-[13rem] mb-0 font-[questrial]">
          <div className="w-full md:w-1/5 text-[1.4rem] md:text-[1.5rem] mb-8 md:mb-0 px-4">
            OUR TEAM CULTURE
          </div>
          <div className="w-full md:w-3/5 text-[1rem] md:text-[1.25rem] lg:text-[1.75rem] px-4 md:px-[2.5rem] lg:px-[5rem] text-justify pr-4 tracking-wider leading-[1.25rem] lg:leading-[2rem]">
            At Leifii, our team culture is built on creativity, collaboration,
            and a commitment to excellence. We believe in the power of diverse
            perspectives and foster an environment where every team member is
            encouraged to contribute their unique ideas. Our team is composed of
            individuals with rich creative backgrounds, all dedicated to
            bringing innovative solutions to life. We live to beautify dreams
            and meet needs, transforming them into reality for a better world.
          </div>
        </div>

        <SvgLine />

        <div className="flex flex-col h-[50vh] my-[4rem] w-full text-center items-center justify-center leading-[1.6em] font-[questrial]">
          <div className="text-[2rem] md:text-[3rem] lg:text-[4rem] h-[7rem]">
            Team at Leifii.Co
          </div>
          <div className="h-[5rem] text-[1.2rem] md:text-[1.5rem] lg:text-[2.3rem]">
            Degree doesn't matter to us. Skills Does!
          </div>
          <div className="h-[15rem] text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] w-[85%] lg:w-[60%] leading-[1.6em]">
            We are always looking to hire talented individuals to join our
            marketing team. Our team is looking for creative, innovative, and
            strategic thinkers who can help us reach the next level of success.
            We offer a variety of positions, ranging from entry-level to
            experienced roles, in digital marketing, content marketing, SEO,
            social media management, and more. If you’re passionate about
            helping organizations reach their marketing goals and have the
            skills to back it up, we’d love to hear from you
          </div>
        </div>
        <div className="h-[3rem] md:h-0"></div>

        <div className="h-[45vh]  pt-[2rem] md:pt-0 md:h-[80vh] w-[70vh] md:w-full flex flex-row m-[1rem] md:m-[1rem] lg:m-[5rem] mx-[2rem] md:mx-[3rem] lg:mx-[10rem] gap-6 md:gap-10 ">
          <div className="w-[30%] md:w-[40%] h-[70%] md:h-[60%] lg:h-[70%]">
            <img
              src="/job2.jpg"
              className="rounded-[2rem] md:rounded-[3rem] w-full h-full object-cover"
              alt="Job 2"
            />
          </div>
          <div className="w-[30%] md:w-[40%] h-[85%] md:h-[90%]  lg:h-[100%] pt-[5rem] md:pt-[15rem]">
            <img
              src="/job3.jpg"
              className="rounded-[2rem] md:rounded-[3rem] w-full h-full object-cover"
              alt="Job 3"
            />
          </div>
        </div>

        <SvgLine />

        <div className="h-[5vh] md:h-[0vh] mb-0 mt-[6rem] m-2 md:m-[10rem] font-[questrial] text-left md:text-center leading-[2.5rem] md:leading-[4rem] lg:leading-[6rem]">
          {/* Mobile View */}
          <div className="block md:hidden px-5">
            <div className="text-[1.5rem]">Think you have what it takes?</div>
            <div className="text-[2.3rem]">
              Send us your <br />
              <span className="italic mt-2">Resume</span>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="text-[1.6rem] md:text-[4rem] lg:text-[5rem]">
              Think you have what it takes?
            </div>
            <div className="text-[3.5rem] md:text-[3.5rem] lg:text-[5rem]">
              Send us your Resume
            </div>
          </div>
        </div>

        <div>
          <header className="cb-request">
            <div className="cb-request-content">
              <div className="cb-request-container">
                <div className="cb-request-header ">
                  {/* <h1>
                  <span className="font-light">
                    Think You Have What It Takes!{" "}
                  </span>{" "}
                  <br></br> Send us your Resume
                </h1> */}
                  {/* <div className="absolute right-[7rem] top-[14rem] h-[10rem] w-[10rem]">
                  {" "}
                  <Lottie
                    animationData={work}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div> */}
                </div>

                <div className="cb-request-form">
                  <form
                    className="cb-form"
                    onSubmit={onSubmit}
                    encType="multipart/form-data"
                  >
                    <div className="cb-form-group">
                      <div className="cb-form-label -smooth">
                        I'm interested in applying to...
                      </div>
                      <div className="cb-checkbox-group">
                        <div
                          className="cb-checkbox cb-checkbox_rounded"
                          data-magnetic
                        >
                          <label>
                            <input
                              type="checkbox"
                              name="jobRoles"
                              value="UI/UX Designer"
                              onChange={handleChange}
                            ></input>
                            <span className="cb-checkbox_rounded-box">
                              <span className="cb-checkbox_rounded-title">
                                <span data-text="UI/UX Designer">
                                  UI/UX Designer
                                </span>
                              </span>
                              <span className="cb-checkbox_rounded-ripple">
                                <span></span>
                              </span>
                            </span>
                          </label>
                        </div>
                        <div
                          className="cb-checkbox cb-checkbox_rounded"
                          data-magnetic
                        >
                          <label>
                            <input
                              type="checkbox"
                              name="jobRoles"
                              value="Graphic Designer"
                              onChange={handleChange}
                            ></input>
                            <span className="cb-checkbox_rounded-box">
                              <span className="cb-checkbox_rounded-title">
                                <span data-text="Graphic Designer">
                                  Graphic Designer
                                </span>
                              </span>
                              <span className="cb-checkbox_rounded-ripple">
                                <span></span>
                              </span>
                            </span>
                          </label>
                        </div>
                        <div
                          className="cb-checkbox cb-checkbox_rounded"
                          data-magnetic
                        >
                          <label>
                            <input
                              type="checkbox"
                              name="jobRoles"
                              value="Full Stack Developer"
                              onChange={handleChange}
                            ></input>
                            <span className="cb-checkbox_rounded-box">
                              <span className="cb-checkbox_rounded-title">
                                <span data-text="Full Stack Developer">
                                  Full Stack Developer
                                </span>
                              </span>
                              <span className="cb-checkbox_rounded-ripple">
                                <span></span>
                              </span>
                            </span>
                          </label>
                        </div>
                        <div
                          className="cb-checkbox cb-checkbox_rounded"
                          data-magnetic
                        >
                          <label>
                            <input
                              type="checkbox"
                              name="jobRoles"
                              value="Photographer"
                              onChange={handleChange}
                            ></input>
                            <span className="cb-checkbox_rounded-box">
                              <span className="cb-checkbox_rounded-title">
                                <span data-text="Photographer">
                                  Photographer
                                </span>
                              </span>
                              <span className="cb-checkbox_rounded-ripple">
                                <span></span>
                              </span>
                            </span>
                          </label>
                        </div>
                        <div
                          className="cb-checkbox cb-checkbox_rounded"
                          data-magnetic
                        >
                          <label>
                            <input
                              type="checkbox"
                              name="jobRoles"
                              value="Videographer"
                              onChange={handleChange}
                            ></input>
                            <span className="cb-checkbox_rounded-box">
                              <span className="cb-checkbox_rounded-title">
                                <span data-text="Videographer">
                                  Videographer
                                </span>
                              </span>
                              <span className="cb-checkbox_rounded-ripple">
                                <span></span>
                              </span>
                            </span>
                          </label>
                        </div>
                        <div
                          className="cb-checkbox cb-checkbox_rounded"
                          data-magnetic
                        >
                          <label>
                            <input
                              type="checkbox"
                              name="jobRoles"
                              value="Social Media Manager"
                              onChange={handleChange}
                            ></input>
                            <span className="cb-checkbox_rounded-box">
                              <span className="cb-checkbox_rounded-title">
                                <span data-text="Social Media Manager">
                                  Social Media Manager
                                </span>
                              </span>
                              <span className="cb-checkbox_rounded-ripple">
                                <span></span>
                              </span>
                            </span>
                          </label>
                        </div>
                        <div
                          className="cb-checkbox cb-checkbox_rounded"
                          data-magnetic
                        >
                          <label>
                            <input
                              type="checkbox"
                              name="jobRoles"
                              value="Video Editor"
                              onChange={handleChange}
                            ></input>
                            <span className="cb-checkbox_rounded-box">
                              <span className="cb-checkbox_rounded-title">
                                <span data-text="Video Editor">
                                  Video Editor
                                </span>
                              </span>
                              <span className="cb-checkbox_rounded-ripple">
                                <span></span>
                              </span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="cb-form-group">
                      <div className="cb-form-label -smooth">Role Type</div>
                      <div className="cb-checkbox-group">
                        <div
                          className="cb-checkbox cb-checkbox_rounded"
                          data-magnetic
                        >
                          <label>
                            <input
                              type="radio"
                              name="roleType"
                              value="Intern"
                              onChange={handleChange}
                            ></input>
                            <span className="cb-checkbox_rounded-box">
                              <span className="cb-checkbox_rounded-title">
                                <span data-text="Intern">Intern</span>
                              </span>
                              <span className="cb-checkbox_rounded-ripple">
                                <span></span>
                              </span>
                            </span>
                          </label>
                        </div>
                        <div
                          className="cb-checkbox cb-checkbox_rounded"
                          data-magnetic
                        >
                          <label>
                            <input
                              type="radio"
                              name="roleType"
                              value="Full time"
                              onChange={handleChange}
                            ></input>
                            <span className="cb-checkbox_rounded-box">
                              <span className="cb-checkbox_rounded-title">
                                <span data-text="Full time">Full time</span>
                              </span>
                              <span className="cb-checkbox_rounded-ripple">
                                <span></span>
                              </span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="cb-form-group">
                      <div
                        className="cb-input cb-input_light"
                        data-validity-msg='{"valueMissing":"Please fill your name"}'
                      >
                        <div className="cb-input_light-box">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                            aria-label="Your name"
                            onChange={handleChange}
                          ></input>
                          <div className="cb-input_light-line"></div>
                        </div>
                        <div className="cb-input_light-message"></div>
                      </div>
                    </div>
                    <div className="cb-form-group">
                      <div
                        className="cb-input cb-input_light"
                        data-validity-msg='{"valueMissing":"Please fill your email address","typeMismatch":"That email address looks a bit weird"}'
                      >
                        <div className="cb-input_light-box">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required
                            aria-label="Your email"
                            onChange={handleChange}
                          ></input>
                          <div className="cb-input_light-line"></div>
                        </div>
                        <div className="cb-input_light-message"></div>
                      </div>
                    </div>
                    <div className="cb-form-group">
                      <div
                        className="cb-input cb-input_light"
                        data-validity-msg='{"valueMissing":"Please fill your phone number"}'
                      >
                        <div className="cb-input_light-box">
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Your phone number"
                            required
                            aria-label="Your phone number"
                            onChange={handleChange}
                          ></input>
                          <div className="cb-input_light-line"></div>
                        </div>
                        <div className="cb-input_light-message"></div>
                      </div>
                    </div>
                    {/* <div className="cb-form-group">
                    <div className="cb-form-label -smooth">
                      Available start date
                    </div>
                    <div
                      className="cb-input cb-input_light"
                      data-validity-msg='{"valueMissing":"Please fill your available start date"}'
                    >
                      <div className="cb-input_light-box">
                        <input
                          type="date"
                          name="startDate"
                          placeholder="Available start date"
                          required
                          aria-label="Available start date"
                          onChange={handleChange}
                        ></input>
                        <div className="cb-input_light-line"></div>
                      </div>
                      <div className="cb-input_light-message"></div>
                    </div>
                  </div> */}
                    <div className="cb-form-group">
                      <div
                        className="cb-input cb-input_light"
                        data-validity-msg='{"valueMissing":"Please fill your portfolio link"}'
                      >
                        <div className="cb-input_light-box">
                          <input
                            type="url"
                            name="portfolioLink"
                            placeholder="Portfolio Link"
                            required
                            aria-label="Portfolio Link"
                            onChange={handleChange}
                          ></input>
                          <div className="cb-input_light-line"></div>
                        </div>
                        <div className="cb-input_light-message"></div>
                      </div>
                    </div>
                    <div className="cb-form-group">
                      <div className="cb-input cb-input_light">
                        <div className="cb-input_light-box">
                          <textarea
                            name="message"
                            placeholder="Tell us about yourself"
                            aria-label="Tell us about yourself"
                            onChange={handleChange}
                          ></textarea>
                          <div className="cb-input_light-line"></div>
                        </div>
                      </div>
                    </div>
                    <div className="cb-form-group">
                      <div
                        data-validity='{"size":26214400,"limit":10}'
                        data-validity-msg='{"size":"Size limit has been exceeded (25 mb)","limit":"Attach up to 10 files"}'
                      >
                        <input
                          type="file"
                          name="files"
                          multiple
                          onChange={handleChange}
                        ></input>
                        <button className="cb-input_file-btn" type="button">
                          {/* <img src={attachment} alt="attachment"></img> */}
                          <span>Add attachment</span>
                        </button>
                        <div className="cb-input_file-items"></div>
                        <div className="cb-input_file-message"></div>
                      </div>
                    </div>
                    <div className="cb-form-submit">
                      <button
                        className="text-[1.2rem] text-white border-[#000] border-2 rounded-full p-4 transition-colors duration-300 bg-[#000] hover:bg-white hover:text-black font-[questrial]"
                        type="submit"
                        data-magnetic
                        data-cursor="-opaque"
                      >
                        <span data-text="Send request">Send request</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </header>
        </div>
        <Footer />
      </div>
    </CursorProvider>
  );
};

export default Careers;
