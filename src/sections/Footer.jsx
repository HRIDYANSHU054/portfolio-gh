function Footer() {
  return (
    <section className="c-space flex flex-wrap items-center justify-between gap-5 border-t border-black-300 pb-3 pt-7">
      <div className="flex gap-2 text-white-500">
        <p>Terms & Condiitions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-2">
        <a
          href="https://github.com/HRIDYANSHU054"
          aria-label="github"
          rel="noreferrer"
        >
          <div className="social-icon">
            <img
              src={`${import.meta.env.BASE_URL}assets/github.svg`}
              alt="My Github"
              className="h-1/2 w-1/2"
            />
          </div>
        </a>
      </div>

      <p className="text-white-500">
        &copy; 2024 Hridyanshu. All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
