"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const eyeRefs = useRef([]);
  const mouthRefs = useRef([]);

  const MAX_MOVE = 7;
  let eyesLocked = false;

  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (eyesLocked) return;

      eyeRefs.current.forEach((eye) => {
        if (!eye) return;

        const r = eye.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;

        const dx = e.clientX - cx;
        const dy = e.clientY - cy;

        const angle = Math.atan2(dy, dx);

        eye.style.transform = `
          translate(
            ${Math.cos(angle) * MAX_MOVE}px,
            ${Math.sin(angle) * MAX_MOVE}px
          )
        `;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    const blink = () => {
      gsap.to(eyeRefs.current, {
        scaleY: 0.15,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
        transformOrigin: "center",
      });
    };

    const interval = setInterval(blink, 2600);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const handleEmailInput = () => {
    gsap.to(mouthRefs.current, {
      scaleY: 1.6,
      scaleX: 1.2,
      duration: 0.15,
      transformOrigin: "center",
    });
  };

  const resetMouth = () => {
    gsap.to(mouthRefs.current, {
      scaleY: 1,
      scaleX: 1,
      duration: 0.2,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    console.log(res);

    if (res.ok || res.status === 200) {
      await res.json();
      router.push("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);

    if (!showPassword) {
      eyesLocked = true;

      gsap.to(eyeRefs.current, {
        x: -MAX_MOVE * 1.2,
        y: 0,
        duration: 0.2,
      });
    } else {
      eyesLocked = false;

      gsap.to(eyeRefs.current, {
        x: 0,
        y: 0,
        duration: 0.25,
      });
    }
  };

  return (
    <main className={styles.app}>
      <div className={styles.card}>
        {/* LEFT ILLUSTRATION */}

        <div className={styles.illustration}>
          <div className={styles.shapes}>
            <div className={`${styles.shape} ${styles.purple}`}>
              <div className={`${styles.eyes} ${styles.noPupil}`}>
                <span ref={(el) => (eyeRefs.current[0] = el)}></span>
                <span ref={(el) => (eyeRefs.current[1] = el)}></span>
              </div>
              <div
                className={styles.mouth}
                ref={(el) => (mouthRefs.current[0] = el)}
              ></div>
            </div>

            <div className={`${styles.shape} ${styles.dark}`}>
              <div className={`${styles.eyes} ${styles.darkEyes}`}>
                <span ref={(el) => (eyeRefs.current[2] = el)}></span>
                <span ref={(el) => (eyeRefs.current[3] = el)}></span>
              </div>
            </div>

            <div className={`${styles.shape} ${styles.yellow}`}>
              <div className={`${styles.eyes} ${styles.orangeEyes}`}>
                <span ref={(el) => (eyeRefs.current[4] = el)}></span>
                <span ref={(el) => (eyeRefs.current[5] = el)}></span>
              </div>
              <span
                className={`${styles.mouth} ${styles.big}`}
                ref={(el) => (mouthRefs.current[1] = el)}
              ></span>
            </div>

            <div className={`${styles.shape} ${styles.orange}`}>
              <div className={`${styles.eyes} ${styles.orangeEyes}`}>
                <span ref={(el) => (eyeRefs.current[6] = el)}></span>
                <span ref={(el) => (eyeRefs.current[7] = el)}></span>
              </div>
              <div
                className={`${styles.mouth} ${styles.big}`}
                ref={(el) => (mouthRefs.current[2] = el)}
              ></div>
            </div>
          </div>
        </div>

        {/* FORM */}

        <div className={styles.formContainer}>
          <div className={styles.formBox}>
            <div className={styles.header}>
              <h1>VARYON PARTNERS</h1>
              {/* <img
                src="https://dummyimage.com/80x80/000/fff&text=LOGO"
                className={styles.logo}
                alt="logo"
              /> */}
              <h3>Welcome back!</h3>
              <h4>Please enter your details</h4>
            </div>

            <form onSubmit={handleLogin}>
              <div className={styles.field}>
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  onInput={handleEmailInput}
                  onBlur={resetMouth}
                  required
                />
              </div>

              <div className={styles.field}>
                <label>Password</label>

                <div className={styles.password}>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    onFocus={resetMouth}
                    required
                  />

                  <button type="button" onClick={togglePassword}>
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </button>
                </div>
              </div>

              {/* <div className={styles.row}>
                <label className={styles.checkbox}>
                  <input type="checkbox" /> Remember for 30 days
                </label>

                <a href="#">Forgot password?</a>
              </div> */}

              <button className={`${styles.btn} ${styles.primary}`}>
                Log In
              </button>
            </form>

            {/* <p className={styles.signup}>
              Don’t have an account? <a href="#">Sign Up</a>
            </p> */}
          </div>
        </div>
      </div>
    </main>
  );
}
