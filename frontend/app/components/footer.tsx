export default function Footer() {
    return (
        <footer className="footer bg-neutral text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
             <path
                d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.331 3.608 1.307.975.975 1.245 2.242 1.307 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.331 2.633-1.307 3.608-.975.975-2.242 1.245-3.608 1.307-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.331-3.608-1.307-.975-.975-1.245-2.242-1.307-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.331-2.633 1.307-3.608.975-.975 2.242-1.245 3.608-1.307 1.265-.058 1.645-.07 4.849-.07m0-2.163C8.741 0 8.332 0 7.052.067 5.773.134 4.568.457 3.529 1.496 2.49 2.536 2.166 3.74 2.1 5.02.067 6.3 0 6.709 0 12s.067 5.7.133 6.979c.134 1.281.457 2.486 1.496 3.525 1.04 1.04 2.244 1.363 3.525 1.496 1.279.067 1.688.133 6.979.133s5.7-.067 6.979-.133c1.281-.134 2.486-.457 3.525-1.496 1.04-1.04 1.363-2.244 1.496-3.525.067-1.279.133-1.688.133-6.979s-.067-5.7-.133-6.979c-.134-1.279-.457-2.486-1.496-3.525C19.929.457 18.725.134 17.444.067 16.165.067 15.756 0 12 0z" />
                <circle cx="12" cy="12" r="3.6" />
                <path d="M18.406 4.594a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z" />
                </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    );
}