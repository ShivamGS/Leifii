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
      <div>
        <header className="cb-request">
          <div className="cb-request-content">
            <div className="cb-request-container">
              <div className="cb-request-header ">
                <h1>
                  <span className="italic font-light">Hey! </span> <br></br>{" "}
                  Design your future with LEIFII{" "}
                </h1>
                <div className="absolute right-[7rem] top-[14rem] h-[10rem] w-[10rem]">
                  {" "}
                  <Lottie
                    animationData={work}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
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
                              <span data-text="Photographer">Photographer</span>
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
                              <span data-text="Videographer">Videographer</span>
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
                              <span data-text="Video Editor">Video Editor</span>
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
                  <div className="cb-form-group">
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
                  </div>
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
                      className="cb-btn cb-btn_send"
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
    </CursorProvider>
  );
};

export default Careers;
