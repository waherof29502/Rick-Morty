import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Form() {
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData),
    });
    console.log(formData);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Form</title>
      </Head>

      <main className={styles.main}>
        <h1 className="title">Contact Form</h1>

        <h2>Please be a human </h2>
        <div className={styles.grid}>
          <style jsx>
            {`
            label{
              display:block;
              margin-bottom: .2em
            }
            button{
              color:white;
              background-color:blueviolet;
              padding: .8em 1em;
              border: 0;
              border-radius: .2em;
            }
            `}
          </style>
          <form method="post" onSubmit={handleOnSubmit}>
            <p>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </p>
            <p>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </p>
            <p>
              <label htmlFor="message">Message</label>
              <textarea name="message" />
            </p>
            <p>
              <button>Submit </button>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
