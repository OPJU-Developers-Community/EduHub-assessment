import styles from './LoginOrganism.styles.module.css'


export default function LoginOrganism() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSection}>

      </div>

      <div className={styles.rightSection}>
        <div className={styles.loginBox}>
          <h1 className={styles.title}>Login</h1>
          <h3 className={styles.subtitle}>Welcome back! Please login to your account</h3>

          <label htmlFor='standard-basic-email' className={styles.label}>
            Email
          </label>
          <div className={styles.inputContainer}>
            <div className={styles.clearButton}>
              <img src='/email.svg' alt="email" />
            </div>
            <input
              className={styles.inputField}
              type="text"
              id="standard-basic-email"
              name="email"
              placeholder="Enter your Email"
            />
            <div className={styles.clearButton}>
              <button> 
                <img src='/x.svg' alt="clear" />
              </button>
            </div>
          </div>


          <label htmlFor='standard-basic-password' className={styles.label}>
            Password
          </label>
          <div className={styles.inputContainer}>
            <div className={styles.clearButton}>
              <img src='/password.svg' alt="password" />
            </div>
            <input
              className={styles.inputField}
              type="password"
              id="standard-basic-password"
              name="password"
              placeholder="Enter your Password"
            />
            <div className={styles.clearButton}>
              <button>
                <img src='/x.svg' alt="clear" />
              </button>
            </div>
          </div>

          <button className={styles.forgetPassBtn}>Forget Password</button>
          <button className={styles.signInBtn}>Login</button>

          
        </div>
      </div>

    </div>

  );
}

